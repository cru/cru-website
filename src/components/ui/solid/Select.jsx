import '@awesome.me/webawesome/dist/components/select/select.js'
import { Index } from 'solid-js'

const Select = (props) => {
  return (
    <wa-select
      appearance="filled"
      size="small"
      {...props}
      class={`space-y-2 ${props.classes}`}
    >
      <Index each={props.options}>
        {(option) => (
          <wa-option value={option().value} class="p-2 mx-1 rounded-md">
            {option().label}
          </wa-option>
        )}
      </Index>
    </wa-select>
  )
}

export default Select
