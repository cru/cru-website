import Checkbox from '../../ui/solid/Checkbox'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function CustomDevelopment(props) {
  return (
    <SubSection {...props} title="Custom platform development">
      <fieldset class="space-y-4">
        <div class="block text-sm font-medium text-gray-700">
          What type of Custom Data Services do you need? *
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox
            name="custom_type[]"
            value="dashboard"
            label="Data Dashboards"
          />
          <Checkbox
            name="custom_type[]"
            value="web"
            label="Public Facing Websites"
          />
          <Checkbox
            name="custom_type[]"
            value="edc"
            label="Custom Data Capture Application"
          />

          <Checkbox
            name="custom_type[]"
            value="mgmt"
            label="Data Management Tool"
          />
          <Checkbox name="custom_type[]" value="infra" label="Infrastructure" />

          <Checkbox
            name="custom_type[]"
            value="advice"
            label="Advisory/Consultancy"
          />

          <Checkbox
            name="custom_type[]"
            value="mobile"
            label="Mobile Data Capture Tool"
          />

          <Checkbox name="custom_type[]" value="unsure" label="I'm unsure" />
        </div>

        <TextArea
          name="custom_needs"
          id="custom_needs"
          label="Please elaborate on your needs or vision? *"
          required
          disabled={props.hidden}
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />

        <Checkbox
          name="custom_need_rc"
          value="1"
          label="I require any custom integration with REDCap or other platforms"
        />

        <TextArea
          name="custom_rc_summary"
          id="custom_rc_summary"
          label="Please describe your integration needs"
        />
      </fieldset>
    </SubSection>
  )
}
