import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function NewProject(props) {
  return (
    <SubSection {...props}>
      <fieldset
        class="space-y-4 rounded-lg border border-gray-200 p-4"
        id="project_section"
      >
        <legend class="px-2 text-lg font-semibold text-gray-900">
          New Service or Project
        </legend>

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
