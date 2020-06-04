import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('popup-menu');


export type PopupMenuProps = {
    zIndex: [Number, String]
    value: boolean
    right?: string
    top?: string
    left?: string
    bottom?: string
};
export type PopupMenuSlots = DefaultSlots & {
};

const PopupMenu = {
    mixins: [
        ClickOutsideMixin({
          event: 'touchstart',
          method: 'onClick',
        }),
    ],
    props: {
        zIndex: {
            type: [Number, String],
            default: 100
        },
        value: {
            type: Boolean,
            default: false
        },
        right: String,
        top: String,
        left: String,
        bottom: String
    },
    data() {
        return {
            visible: false
        }
    },
    watch: {
        value() {
            const that = this as any
            that.visible = that.value
        }
    },
    render(
        h: CreateElement
    ) {
        const that = this as any
        if(!that.visible) {
            return
        }
        const { slots } = that
        const props: PopupMenuProps = that
        return <div 
            onClick={that.onClick}
            class={[bem('warp')]} 
            style={{'z-index': props.zIndex}}
            // {...inherit(ctx, true)}
        >
            <div class={[bem()]} style={{right: props.right, top: props.top, left: props.left, bottom: props.bottom}}>
                <div class={[bem('items')]}>
                    {slots('default')}
                </div>
            </div>
        </div>
    },
    methods: {
        onClick: function() {
            const that = this as any
            if(!that.visible){
                return
            }
            that.visible = false
            that.$emit('input', false)
        }
    }
}

export default createComponent<PopupMenuProps>(PopupMenu)
