import SubSection from '../SubSection'
import Checkbox from '../ui/Checkbox'
import CheckboxGroup from '../ui/CheckboxGroup'
import FileUpload from '../ui/FileUpload'
import Input from '../ui/Input'
import Radio from '../ui/Radio'
import TextArea from '../ui/TextArea'

export default function Redcap(props) {
  return (
    <SubSection {...props} title="REDCap project details">
      <div class="space-y-4">
        <Radio
          name="rc_build"
          label="What type of project service are you interested in?"
          required
          options={[
            { value: 'self', label: 'Self-service project' },
            { value: 'chi', label: 'CHI supported project' },
            { value: 'unsure', label: 'I am unsure' },
          ]}
        />
        <Radio
          name="rc_price_tier"
          label="Please select a REDCap Support Tier"
          required
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
        <CheckboxGroup
          name="rc_adv_features"
          label="Do you require any advanced REDCap features?"
          options={[
            { value: 'mycap', label: 'MyCap' },
            { value: 'em', label: 'External Modules' },
            { value: 'dx', label: 'DataXplor' },
            { value: 'onepager', label: 'OnePager' },
            { value: 'export', label: 'Custom Data Export' },
            { value: 'api', label: 'Custom Integration' },
          ]}
        />
        <Checkbox
          name="rc_econsent_need_separate"
          value="1"
          label="I would like to create two projects: one for eConsent, one for data collection"
          hint="If you are using eConsent, it is best practice to keep eConsent in a separate project from other data collection to protect patient identifiers"
        />
        <Checkbox
          name="rc_econsent_build"
          value="1"
          label="I would like CHI's support with my eConsent (ex. build support, consultation, implementation review)"
        />
        <Input name="rc_econsent_title" label="eConsent project title" />
        <CheckboxGroup
          name="rc_em"
          label="What External Module(s) do you require?"
          options={[
            { value: '1', label: 'Auto-schedule' },
            { value: '2', label: 'Form Field Tooltip' },
            { value: '3', label: 'Image Map' },
            { value: '4', label: 'Instance Table' },
            { value: '5', label: 'Show by Role' },
            { value: '6', label: 'Simple Ontology' },
            { value: '7', label: 'Check for duplicated across multiple projects' },
            { value: '99', label: 'Other (please describe below)' },
          ]}
        />
        <Input name="rc_em_oth" label="Specify other External Module(s)" />
        <TextArea
          name="rc_adv_needs"
          label="Tell us more about what you are looking for"
        />
      </div>
    </SubSection>
  )
}
