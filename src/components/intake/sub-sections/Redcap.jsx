import Checkbox from '../../ui/solid/Checkbox'
import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import FileUpload from '../../ui/solid/FileUpload'
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
            { value: 'unsure', label: 'I am unsure' },
          ]}
        />
        <Radio
          name="rc_price_tier"
          label="Please select a REDCap Support Tier"
          hint={
            <span>
              See{' '}
              <a
                href="/data-capture/pricing"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:decoration-brand-primary-500 cursor-pointer underline hover:decoration-2"
              >
                Data Capture Pricing
              </a>{' '}
              for more information
            </span>
          }
          options={[
            { value: 'basic', label: 'Basic' },
            { value: 'plus', label: 'Plus' },
            { value: 'premium', label: 'Premium' },
            { value: 'cctt', label: 'CCTT' },
          ]}
        />
        <Input
          name="rc_participant_num"
          label="Number of Expected Study Participants"
          type="number"
          min="0"
        />
        <Input name="rc_site_num" label="Number of Study Sites" type="number" min="0" />
        <Checkbox
          name="rc_have_international_sites___1"
          value="1"
          label="I have international sites"
        />
        <CheckboxGroup
          name="rc_international_sites"
          label="Which international sites?"
          options={[
            { value: 'usa', label: 'USA' },
            { value: 'europe', label: 'Europe' },
            { value: 'oth', label: 'Other' },
          ]}
        />
        <Checkbox
          name="rc_have_surveys___1"
          value="1"
          label="I require surveys (online questionnaires) to be sent to participants"
        />
        <Checkbox
          name="rc_have_randomization___1"
          value="1"
          label="I require randomization"
        />
        <TextArea
          name="rc_randomization_summary"
          label="Please provide a summary of the randomization schema"
        />
        <Checkbox
          name="rc_have_xml___1"
          value="1"
          label="I have an existing REDCap project XML file to create my project from"
        />
        <FileUpload name="rc_xml_upload" label="Existing REDCap Project XML File" />
      </fieldset>
    </SubSection>
  )
}
