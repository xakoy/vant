import { createNamespace } from '../utils';
import { cellProps } from '../cell/shared';

import { emit, inherit } from '../utils/functional';

import Field from '../field';
import Popup from '../popup';
import DatetimePicker from '../datetime-picker';
import fecha from './fecha';

const [createComponent, bem] = createNamespace('datetime-picker-field');

const s = {
  props: {
    ...cellProps,
    value: {},
    rules: Array,
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    defautNow: {
      type: Boolean,
      default: false,
    },
    errorMessageAlign: {},
    errorMessage: {},
    placeholder: {},
    inputAlign: {},
    border: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: false
    },
    labelWidth: [Number, String],
    labelClass: null,
    name: String,
    type: {
      type: String,
      default: 'datetime',
    },
    valueFormat: {
      type: String,
      default: 'YYYY-MM-DD HH:mm',
    },
    maxDate: {},
    minDate: {},
    minHour: {
      type: [Number, String],
      default: 0,
    },
    maxHour: {
      type: [Number, String],
      default: 23,
    },
    minMinute: {
      type: [Number, String],
      default: 0,
    },
    maxMinute: {
      type: [Number, String],
      default: 59,
    },
  },
  data() {
    return {
      currentDate: new Date(),
      popupVisible: false,
      text: '',
    };
  },
  computed: {
    placeholderText() {
      if (this.placeholder) {
        return this.placeholder;
      }
      return `请选择${this.label}`;
    },
    isDateType() {
      return (this.type === 'date' || this.type === 'datetime' || this.type === 'year-month');
    },
  },
  created() {
    this.changeValueHandler(this.value);
  },
  watch: {
    value(val) {
      this.changeValueHandler(val);
    },
  },
  methods: {
    changeValueHandler(val) {
      if (val) {
        if (this.isDateType) {
          const date = fecha.parse(val, this.valueFormat);
          this.currentDate = date;
          this.text = fecha.format(date, this.valueFormat);
        } else {
          this.text = val;
        }
      } else if (this.defautNow) {
        const date = new Date();
        this.currentDate = date;
        this.text = fecha.format(date, this.valueFormat);
        this.$emit('input', this.text);
        this.$emit('change', this.text);
      }
    },
    onConfirm(date) {
      this.popupVisible = false;
      let text = '';
      if (this.isDateType) {
        text = fecha.format(date, this.valueFormat);
      } else {
        text = date;
      }

      this.text = text;
      this.$emit('input', text);
      this.$emit('change', text);
    },
  },
  render() {
    const popupProps = {
      props: {
        position: 'bottom',
        value: this.popupVisible,
      },
      on: {
        input: (value) => {
          this.popupVisible = value;
        },
      },
    };
    const datetimePickerProps = {
      props: {
        value: this.isDateType ? this.currentDate : this.text,
        minDate: this.minDate,
        maxDate: this.maxDate,
        type: this.type,
      },
      on: {
        input: (value) => {
          this.currentDate = value;
        },
        cancel: () => {
          this.popupVisible = false;
        },
        confirm: this.onConfirm,
      },
    };

    const fieldProps = {
      props: {
        form: this.form,
        clickable: false,
        label: this.label,
        required: this.required,
        inputAlign: this.inputAlign,
        errorMessage: this.errorMessage,
        errorMessageAlign: this.errorMessageAlign,
        placeholder: this.placeholderText,
        value: this.text,
        rules: this.rules,
        border: this.border,
        labelWidth: this.labelWidth,
        labelClass: this.labelClass,
        name: this.name,
      },
      on: {
        click: () => {
          if(this.readonly) {
            return
          }
          this.popupVisible = true;
        },
      },
      scopedSlots: {

      },
    };


    return (
      <Field is-link={!this.readonly} readonly={true} {...fieldProps}>
        <Popup {...popupProps} get-container="body">
            <DatetimePicker {...datetimePickerProps} />
        </Popup>
      </Field>
    );
  },
};

export default createComponent(s);
