import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function NewProject(props) {
  return (
    <SubSection {...props} title="New service or project">
      <fieldset class="space-y-4">
        <div class="space-y-3">
          <div class="block text-sm font-medium text-gray-700">
            What type of support or service do you need?
          </div>
          <div class="flex flex-col space-y-2">
            <Checkbox
              name="proj_type[]"
              value="rc"
              label="REDCap (Research Electronic Data Capture)"
            />
            <Checkbox
              name="proj_type[]"
              value="custom"
              label="Custom Platform Development"
            />
            <Checkbox
              name="proj_type[]"
              value="ma"
              label="Methods, Data & Analytics Support"
            />
          </div>
        </div>
        <Input
          id="proj_title"
          name="proj_title"
          label="Project or Study Title"
          required
          minLength="2"
          disabled={props.hidden}
        />

        <div class="mt-2 space-y-2">
          <Radio
            name="proj_purpose"
            label="Purpose of your project or study?"
            options={[
              { value: 'research', label: 'Research' },
              { value: 'qi', label: 'Quality Improvement' },
              { value: 'op', label: 'Operational' },
            ]}
          />
        </div>
      </fieldset>
    </SubSection>
  )
}
