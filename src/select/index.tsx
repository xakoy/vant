import { createNamespace, isDef } from '../utils';
import { emit, inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

import Field from '../field'
import Popup from '../popup'

export type SelectProps = {

}

export type SelectSlots = DefaultSlots & {}

export type SelectEvents = {
};
  
const [createComponent, bem] = createNamespace('select');

function Select(
    h: CreateElement,
    props: SelectProps,
    slots: SelectSlots,
    ctx: RenderContext<SelectProps>
) {
    return (
        <Field>
            
        </Field>
    )
}


Select.props = {
};
  
export default createComponent<SelectProps, SelectEvents>(Select);
  