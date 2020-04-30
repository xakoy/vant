// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

export type CellGroupProps = {
  title?: string;
  value?: string;
  border: boolean;
};

export type CellGroupSlots = DefaultSlots & {
  title?: ScopedSlot;
  value?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('cell-group');

function CellGroup(
  h: CreateElement,
  props: CellGroupProps,
  slots: CellGroupSlots,
  ctx: RenderContext<CellGroupProps>
) {
  const Group = (
    <div
      class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]}
      {...inherit(ctx, true)}
    >
      {slots.default?.()}
    </div>
  );

  function Value() {
    const isShowValue = props.value || slots.value
    if(isShowValue){
      return (
        <div class={bem('title-value')}>
          {slots.value ? slots.value() : props.value}
        </div>
      )
    }
  }

  if ((props.title || slots.title) || (props.value || slots.value)) {
    return (
      <div>
        <div class={bem('title')}>
          <div class={bem('title-text')}>
            {slots.title ? slots.title() : props.title}
          </div>
          {Value()}
        </div>
        {Group}
      </div>
    );
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true,
  },
};

export default createComponent<CellGroupProps>(CellGroup);
