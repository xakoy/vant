import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('popup-menu-item');


export type PopupMenuItemProps = {
    title: String
    icon?: string
    iconPrefix?: string
};
export type PopupMenuItemSlots = DefaultSlots & {
    title?: ScopedSlot;
    icon?: ScopedSlot
};

const PopupMenuItem =  {
    props: {
        title: String,
        icon: String,
        iconPrefix: String
    },
    render (
        h: CreateElement
    ) {
        const that = this as any
        const props: PopupMenuItemProps = that
        const { icon } = props;
        const slots = that.$slots

        function LeftIcon() {
            if (slots.icon) {
            return slots.icon;
            }
        
            if (icon) {
            return (
                <Icon
                class={bem('left-icon')}
                name={icon}
                classPrefix={props.iconPrefix}
                />
            );
            }
        }

        function onClickHandler(event: Event) {
            that.$emit('click', event)
        }


        return <dl onClick={onClickHandler}>
            <dt>
                { LeftIcon() }
            </dt>
            <dd>
                {slots.title ? slots.title : props.title}
            </dd>
        </dl>
    }
}

export default createComponent<PopupMenuItemProps>(PopupMenuItem);
