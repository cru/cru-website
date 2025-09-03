import '@awesome.me/webawesome/dist/components/select/select.js'
import { Index } from 'solid-js'

const Select = (props) => {
  return (
    <wa-select {...props} class={`${props.classes}`}>
      <Index each={props.options}>
        {(option) => <wa-option value={option().value}>{option().label}</wa-option>}
      </Index>
    </wa-select>
  )
}

export default Select
