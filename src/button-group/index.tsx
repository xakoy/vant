import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

const [createComponent, bem] = createNamespace('button-group');


export type ButtonGroupProps = {
    title?: string;
    border: boolean;
};
export type ButtonGroupSlots = DefaultSlots & {
    title?: ScopedSlot;
};
  

function ButtonGroup(
    h: CreateElement,
    props: ButtonGroupProps,
    slots: ButtonGroupSlots,
    ctx: RenderContext<ButtonGroupProps>
  ) {
    const Group = (
      <div
        class={[bem()]}
        {...inherit(ctx, true)}
      >
        {slots.default?.()}
      </div>
    );
  
    if (props.title || slots.title) {
      return (
        <div>
          <div class={bem('title')}>
            {slots.title ? slots.title() : props.title}
          </div>
          {Group}
        </div>
      );
    }
  
    return Group;
  }
  
  ButtonGroup.props = {
    title: String,
    border: {
      type: Boolean,
      default: true,
    },
  };

export default createComponent<ButtonGroupProps>(ButtonGroup);
