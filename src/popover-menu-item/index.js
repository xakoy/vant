/* eslint-disable */
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_BOTTOM } from '../utils/constant';
// import { CreateElement, RenderContext } from 'vue/types';
// import { DefaultSlots, ScopedSlot } from '../utils/types';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('popover-menu-item');
const [createpComponent, bemp] = createNamespace('popover');

// console.log(bemp, 'bemp')



// export type PopoverMenuItemProps = {
//     title: string;
//     icon?: string;
//     iconPrefix?: string;
// };
// export type PopoverMenuItemSlots = DefaultSlots & {
//     title?: ScopedSlot;
//     icon?: ScopedSlot;
// };

const PopoverMenuItem =  {
    props: {
        disabled: Boolean,
        title: String,
        icon: String,
        iconPrefix: String
    },
    render (
        h
    ) {
        const that = this
        const props = that
        const { icon } = props;
        const slots = that.$slots

        function LeftIcon() {
            if (slots.icon) {
                return slots.icon;
            }
        
            if (icon) {
                return (
                    <Icon
                    class={bemp('action-icon')}
                    name={icon}
                    classPrefix={props.iconPrefix}
                    />
                );
            }
        }

        function onClickHandler(event) {
            that.$emit('click', event)
        }

        const { disabled, className } = this;

        return (
            // <div>ads</div>
            <div
                role="menuitem"
                class={[bemp('action', { disabled, 'with-icon': icon || slots.icon }), className]}
                onClick={() => onClickHandler()}
            >
                { LeftIcon() }
                {/* {icon && <Icon name={icon} class={bemp('action-icon')} />} */}
                <div class={[bemp('action-text'), BORDER_BOTTOM]}>{slots.title ? slots.title : props.title}</div>
            </div>
        )


        // return (<dl onClick={onClickHandler}>
        //     <dt>
        //         { LeftIcon() }
        //     </dt>
        //     <dd>
        //         {slots.title ? slots.title : props.title}
        //     </dd>
        // </dl>)
    }
}

export default createComponent(PopoverMenuItem);
