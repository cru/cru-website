import Checkbox from '../../ui/solid/Checkbox'

export default function CustomDevelopment() {
  return (
    <fieldset class="space-y-4 rounded-lg border border-gray-200 p-4" id="custom_section">
      <legend class="px-2 text-lg font-semibold text-gray-900">
        Custom Platform Development
      </legend>

      <div>
        <div class="block text-sm font-medium text-gray-700">
          What type of Custom Data Services do you need? *
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox name="custom_type[]" value="dashboard" label="Data Dashboards" />
          <Checkbox name="custom_type[]" value="web" label="Public Facing Websites" />
          <Checkbox
            name="custom_type[]"
            value="edc"
            label="Custom Data Capture Application"
          />

          <Checkbox name="custom_type[]" value="mgmt" label="Data Management Tool" />
          <Checkbox name="custom_type[]" value="infra" label="Infrastructure" />

          <Checkbox name="custom_type[]" value="advice" label="Advisory/Consultancy" />

          <Checkbox
            name="custom_type[]"
            value="mobile"
            label="Mobile Data Capture Tool"
          />

          <Checkbox name="custom_type[]" value="unsure" label="I'm unsure" />
        </div>
      </div>

      <div>
        <label for="custom_needs" class="block text-sm font-medium text-gray-700">
          Please elaborate on your needs or vision? *
        </label>
        <textarea
          name="custom_needs"
          id="custom_needs"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>

      <div>
        <Checkbox
          name="custom_need_rc"
          value="1"
          label="I require any custom integration with REDCap or other platforms"
        />
      </div>

      <div id="custom_integration_section" style={{ display: 'none' }}>
        <label for="custom_rc_summary" class="block text-sm font-medium text-gray-700">
          Please describe your integration needs
        </label>
        <textarea
          name="custom_rc_summary"
          id="custom_rc_summary"
          rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>
    </fieldset>
  )
}
