import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'

export default function Redcap() {
  return (
    <fieldset class="space-y-4 rounded-lg border border-gray-200 p-4" id="redcap_section">
      <legend class="px-2 text-lg font-semibold text-gray-900">
        REDCap Project Details
      </legend>

      <div>
        <div class="mt-2 space-y-2">
          <Radio
            name="rc_build"
            label="What type of project service are you interested in?"
            options={[
              { value: 'self', label: 'Self-service project' },
              { value: 'chi', label: 'CHI supported project' },
            ]}
          />
        </div>

        <div class="mt-2 flex items-center">
          <Checkbox name="rc_build_unsure" value="1" label="I am unsure" />
        </div>
      </div>

      <div>
        <Input
          id="rc_participant_num"
          name="rc_participant_num"
          label="Number of Expected Study Participants"
          type="number"
          min="0"
        />
      </div>

      <div>
        <Input
          id="rc_site_num"
          name="rc_site_num"
          label="Number of Study Sites"
          type="number"
          min="0"
        />
      </div>

      <div>
        <Checkbox
          name="rc_have_international_sites"
          value="1"
          label="I have international sites"
        />
      </div>

      <div id="international_sites_section">
        <div class="block text-sm font-medium text-gray-700">
          Which international sites?
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox name="rc_international_sites[]" value="usa" label="USA" />
          <Checkbox name="rc_international_sites[]" value="europe" label="Europe" />
          <Checkbox name="rc_international_sites[]" value="oth" label="Other" />
        </div>
      </div>

      <div>
        <Checkbox
          name="rc_have_surveys"
          value="1"
          label="I require surveys (online questionnaires) to be sent to participants"
        />
      </div>

      <div>
        <Checkbox
          name="rc_have_randomization"
          value="1"
          label="I require randomization"
        />
      </div>

      <div id="randomization_section">
        <TextArea
          name="rc_randomization_summary"
          id="rc_randomization_summary"
          label="Please provide a summary of the randomization schema"
        />
      </div>

      <div>
        <Checkbox
          name="rc_have_xml"
          value="1"
          label="I have an existing REDCap project XML file to create my project from"
        />
      </div>

      <div id="xml_upload_section">
        <label for="rc_xml_upload" class="block text-sm font-medium text-gray-700">
          Existing REDCap Project XML File
        </label>
        <input
          type="file"
          name="rc_xml_upload"
          id="rc_xml_upload"
          accept=".xml"
          class="mt-1 block w-full"
        />
      </div>

      {/* REDCap Pricing Tier */}
      <div>
        <div class="space-y-2">
          <Radio
            name="rc_price_tier"
            label="Please select a REDCap Support Tier"
            hint="See Data Capture Pricing for more information"
            options={[
              { value: 'basic', label: 'Basic' },
              { value: 'plus', label: 'Plus' },
              { value: 'premium', label: 'Premium' },
            ]}
          />
        </div>
      </div>
    </fieldset>
  )
}
