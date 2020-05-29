import { createNamespace } from '../utils';

import Field from '../field';
import Popup from '../popup';
import Picker from '../picker';

const [createComponent, bem] = createNamespace('picker-field');

const s = {
  props: {
    value: {},
    rules: Array,
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessageAlign: {
      type: String,
      default: 'right',
    },
    errorMessage: {},
    placeholder: {},
    inputAlign: {
      type: String,
      default: 'right',
    },
    border: {
      type: Boolean,
      default: true,
    },
    labelWidth: [Number, String],
    labelClass: null,
    name: String,
    columns: Array,
    textKey: {
      type: String,
      default: 'text',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
  },
  data() {
    return {
      popupVisible: false,
      text: '',
      val: '',
      defaultIndex: 0,
    };
  },
  computed: {
    placeholderText() {
      if (this.placeholder) {
        return this.placeholder;
      }
      return `请选择${this.label}`;
    },
  },
  mounted() {
    this.changeValueHandler(this.value);
  },
  watch: {
    value(val) {
      this.changeValueHandler(val);
    },
  },
  methods: {
    getPicker() {
      return this.$refs.picker;
    },
    changeValueHandler(val) {
      if (val) {
        const index = this.columns.findIndex(item => item[this.valueKey] === val);
        if (index > -1) {
          const item = this.columns[index];
          this.text = item[this.textKey];
          this.defaultIndex = index;
        } else {
          this.text = '';
        }
      } else {
        this.text = '';
      }
    },
    onConfirm(item, index) {
      this.popupVisible = false;
      this.val = item[this.valueKey];
      this.text = item[this.textKey];

      this.$emit('update:textValue', this.text);
      this.$emit('input', this.val);
      this.$emit('change', this.val, item);
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
    const pickerProps = {
      props: {
        columns: this.columns,
        showToolbar: true,
        valueKey: this.textKey,
        defaultIndex: this.defaultIndex,
      },
      on: {
        cancel: () => {
          this.popupVisible = false;
        },
        confirm: this.onConfirm,
      },
    };

    const fieldProps = {
      props: {
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
          this.popupVisible = true;
        },
      },
      scopedSlots: {

      },
    };


    return (
      <Field is-link={true} readonly={true} {...fieldProps}>
        <Popup {...popupProps} get-container="body">
            <Picker ref="picker" {...pickerProps} />
        </Popup>
      </Field>
    );
  },
};

export default createComponent(s);
