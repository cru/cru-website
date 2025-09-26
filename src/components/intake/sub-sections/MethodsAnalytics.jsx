import Checkbox from '../../ui/solid/Checkbox'
import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import FileUpload from '../../ui/solid/FileUpload'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function MethodsAnalytics(props) {
  return (
    <SubSection {...props} title="Methods, data & analytics support">
      <div class="space-y-4">
        <CheckboxGroup
          name="proj_type_ma"
          label="Support type"
          options={[
            { value: 'ma', label: 'Secondary Data Services, Methods & Analytics' },
            {
              value: 'grant',
              label: 'Grant Methods Support, Review & Letters of Support',
            },
          ]}
        />
        <Radio
          name="ma_have_existing_data"
          label="Do you currently have data?"
          required
          options={[
            { value: '1', label: 'Yes' },
            { value: '0', label: 'No, I require data access' },
            { value: '99', label: 'I am looking for more information' },
          ]}
        />
        <CheckboxGroup
          name="ma_existing_data"
          label="What type of data do you have?"
          options={[
            { value: 'rc', label: "I have data on CHI's REDCap platform" },
            { value: 'admin', label: 'I have administrative data' },
            { value: 'oth', label: 'I have other data' },
          ]}
        />
        <Input name="ma_existing_data_pid" type="number" min="0" label="REDCap PID" />
        <TextArea name="ma_data_desc" label="What dataset(s) will you be using?" />
        <Input name="ma_data_custodian" label="Who is your Data Custodian? (if known)" />
        <CheckboxGroup
          name="ma_methods"
          label="What Methods support do you require?"
          options={[
            { value: 'power', label: 'Power/sample size calculations' },
            {
              value: 'review',
              label:
                'Review of existing methods section/research design/statistical plan',
            },
            {
              value: 'dev',
              label: 'Co-development of methods section/research design/statistical plan',
            },
            { value: 'unsure', label: 'I am unsure' },
            { value: 'none', label: "I don't require methods support" },
          ]}
        />
        <Input
          name="ma_grant_deadline"
          type="date"
          label="When is your grant deadline?"
        />
        <Radio
          name="ma_grant_funder"
          label="Who is your primary funder?"
          options={[
            { value: 'cihr', label: 'CIHR' },
            { value: 'ab', label: 'Alberta Innovates' },
            { value: 'nih', label: 'NIH' },
            { value: 'oth', label: 'Other' },
          ]}
        />
        <Input name="ma_grant_funder_oth" label="Who are your other funders?" />
        <Radio
          name="ma_grant_dev_stage"
          label="What stage of development is your grant application in?"
          options={[
            { value: 'draft', label: 'Draft' },
            { value: 'review', label: 'In Review' },
            { value: 'ready', label: 'Ready for Submission' },
            { value: 'funded', label: 'Funded' },
            { value: 'oth', label: 'Other' },
          ]}
        />
        <Input name="ma_research_question" label="What is your Research Question?" />

        <Checkbox
          name="ma_grant_have_proposal___1"
          value="1"
          label="I have a grant proposal I can upload"
        />
        <FileUpload name="ma_grant_proposal_upload" label="Grant Proposal file" />
        <Checkbox
          name="ma_grant_need_dmp___1"
          value="1"
          label="I need a Data Management Plan (DMP)"
        />
        <Checkbox
          name="ma_grant_need_los___1"
          value="1"
          label="I need a Letter of Support (LoS)"
        />
        <CheckboxGroup
          name="ma_grant_methods"
          label="Do you require support with methods section development for grant application?"
          options={[
            {
              value: 'review',
              label:
                'Review of existing methods section/research design/statistical plan',
            },
            {
              value: 'dev',
              label: 'Co-development of methods section/research design/statistical plan',
            },
            {
              value: 'unsure',
              label: 'I am unsure',
            },
          ]}
        />
        <CheckboxGroup
          name="ma_analytics"
          label="What Analytics support do you require?"
          options={[
            { value: 'cleaning', label: 'Data cleaning, linking and processing' },
            {
              value: 'power',
              label: 'Sample size calculation (a priori power calculations)',
            },
            {
              value: 'stats',
              label: 'Descriptive statistics, traditional biostatistical methods',
            },
            { value: 'ml', label: 'Machine learning and data science methods' },
            { value: 'vis', label: 'Visualizations' },
            { value: 'oth', label: 'Other' },
            { value: 'unsure', label: 'I am unsure' },
            { value: 'none', label: "I don't require analytics support" },
          ]}
        />
        <TextArea
          name="ma_analytics_oth"
          label="What other Analytics support do you require?"
        />
      </div>
    </SubSection>
  )
}
