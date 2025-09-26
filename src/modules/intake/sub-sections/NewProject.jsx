import SubSection from '../SubSection'
import Checkbox from '../ui/Checkbox'
import CheckboxGroup from '../ui/CheckboxGroup'
import Input from '../ui/Input'
import Radio from '../ui/Radio'
import TextArea from '../ui/TextArea'

export default function NewProject(props) {
  return (
    <SubSection {...props} title="New service or project">
      <div class="space-y-4">
        <CheckboxGroup
          name="proj_type"
          label="What type of support or service do you need?"
          required
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
          required
          options={[
            { value: 'research', label: 'Research' },
            { value: 'qi', label: 'Quality Improvement' },
            { value: 'op', label: 'Operational' },
          ]}
        />
        <Checkbox
          name="proj_extra_need_reporting___1"
          value="1"
          label=" I have advanced reporting needs (ex. dashboards, visualizations)"
        />
        <Checkbox
          name="proj_extra_need_lts___1"
          value="1"
          label=" I require long-term support"
        />
        <TextArea
          name="proj_extra_lts_summary"
          label="Briefly describe your long-term support needs"
        />
      </div>
    </SubSection>
  )
}
