import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function NewProject(props) {
  return (
    <SubSection {...props} title="New service or project">
      <fieldset class="space-y-4">
        <CheckboxGroup
          name="proj_type"
          label="What type of support or service do you need?"
          options={[
            {
              value: 'rc',
              label: 'REDCap (Research Electronic Data Capture)',
            },
            {
              value: 'custom',
              label: 'Custom Platform Development',
            },
            {
              value: 'ma',
              label: 'Methods, Data & Analytics Support',
            },
          ]}
        />
        <Input name="proj_title" label="Project or Study Title" required minlength="2" />
          <Radio
            name="proj_purpose"
            label="Purpose of your project or study?"
            options={[
              { value: 'research', label: 'Research' },
              { value: 'qi', label: 'Quality Improvement' },
              { value: 'op', label: 'Operational' },
            ]}
          />
      </fieldset>
    </SubSection>
  )
}
