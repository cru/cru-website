import { For } from 'solid-js'
import Checkbox from './Checkbox'

const CheckboxGroup = (props) => {
  return (
      <div class="space-y-3">
          <div class="block text-sm font-medium text-gray-700">
            {props.label}
          </div>
          <div class="flex flex-col space-y-2">
          <For each={props.options}>{(option) => (
            <Checkbox
              name={props.name}
              value={option.value}
              label={option.label}
            />
          )}</For>
          </div>
        </div>
  )
}

export default CheckboxGroup
