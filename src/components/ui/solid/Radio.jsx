import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js'
import { Index } from 'solid-js'

const Radio = (props) => {
  return (
    <wa-radio-group size="small" {...props} class={`${props.classes}`}>
      <Index each={props.options}>
        {(option) => (
          <wa-radio value={option().value} class="py-1">
            {option().label}
          </wa-radio>
        )}
      </Index>
    </wa-radio-group>
  )
}

export default Radio
