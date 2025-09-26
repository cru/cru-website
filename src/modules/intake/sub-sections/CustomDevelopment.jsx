import SubSection from '../SubSection'
import Checkbox from '../ui/Checkbox'
import CheckboxGroup from '../ui/CheckboxGroup'
import TextArea from '../ui/TextArea'

export default function CustomDevelopment(props) {
  return (
    <SubSection {...props} title="Custom platform development">
      <div class="space-y-4">
        <CheckboxGroup
          name="custom_type"
          label="What type of Custom Data Services do you need?"
          required
          options={[
            { value: 'dashboard', label: 'Data Dashboards' },
            { value: 'web', label: 'Public Facing Websites' },
            { value: 'edc', label: 'Custom Data Capture Application' },
            { value: 'mgmt', label: 'Data Management Tool' },
            { value: 'infra', label: 'Infrastructure' },
            { value: 'advice', label: 'Advisory/Consultancy' },
            { value: 'mobile', label: 'Mobile Data Capture Tool' },
            { value: 'unsure', label: "I'm unsure" },
          ]}
        />
        <TextArea
          name="custom_needs"
          label="Please elaborate on your needs or vision?"
          required
        />
        <Checkbox
          name="custom_need_rc___1"
          value="1"
          label="I require some custom integration with REDCap or other platforms"
        />
        <TextArea
          name="custom_rc_summary"
          label="Please describe your integration needs"
        />
      </div>
    </SubSection>
  )
}
