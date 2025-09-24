import Checkbox from '../../ui/solid/Checkbox'
import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function CustomDevelopment(props) {
  return (
    <SubSection {...props} title="Custom platform development">
      <div class="space-y-4">
        <CheckboxGroup
          name="custom_type"
          label="What type of Custom Data Services do you need? *"
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
          label="Please elaborate on your needs or vision? *"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />

        <Checkbox
          name="custom_need_rc"
          value="1"
          label="I require any custom integration with REDCap or other platforms"
        />

        <TextArea
          name="custom_rc_summary"
          label="Please describe your integration needs"
        />
      </div>
    </SubSection>
  )
}
