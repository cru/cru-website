import Checkbox from '../../ui/solid/Checkbox'
import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function Redcap(props) {
  return (
    <SubSection {...props} title="REDCap project details">
      <fieldset class="space-y-4">
        <Radio
          name="rc_build"
          label="What type of project service are you interested in?"
          options={[
            { value: 'self', label: 'Self-service project' },
            { value: 'chi', label: 'CHI supported project' },
          ]}
        />

        <Checkbox name="rc_build_unsure" value="1" label="I am unsure" />

        <Input
          id="rc_participant_num"
          name="rc_participant_num"
          label="Number of Expected Study Participants"
          type="number"
          min="0"
        />

        <Input
          id="rc_site_num"
          name="rc_site_num"
          label="Number of Study Sites"
          type="number"
          min="0"
        />

        <Checkbox
          name="rc_have_international_sites"
          value="1"
          label="I have international sites"
        />

        <CheckboxGroup name="rc_international_sites" label="Which international sites?" options={[
          { value: 'usa', label: 'USA' },
          { value: 'europe', label: 'Europe' },
          { value: 'oth', label: 'Other' },
        ]} />
        

        <Checkbox
          name="rc_have_surveys"
          value="1"
          label="I require surveys (online questionnaires) to be sent to participants"
        />

        <Checkbox
          name="rc_have_randomization"
          value="1"
          label="I require randomization"
        />

        <TextArea
          name="rc_randomization_summary"
          id="rc_randomization_summary"
          label="Please provide a summary of the randomization schema"
        />

        <Checkbox
          name="rc_have_xml"
          value="1"
          label="I have an existing REDCap project XML file to create my project from"
        />

        <div id="xml_upload_section">
          <label
            for="rc_xml_upload"
            class="block text-sm font-medium text-gray-700"
          >
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
      </fieldset>
    </SubSection>
  )
}
