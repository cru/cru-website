import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function MethodsAnalytics(props) {
  return (
    <SubSection {...props} title="Methods, data & analytics support">
      <fieldset class="space-y-4">
        <Radio
          name="ma_have_existing_data"
          label="Do you currently have data?"
          options={[
            { value: '1', label: 'Yes' },
            { value: '0', label: 'No, I require data access' },
            { value: '99', label: 'I am looking for more information' },
          ]}
        />

        <CheckboxGroup name="ma_existing_data[]" label="What type of data do you have?" options={[
          { value: 'rc', label: "I have data on CHI's REDCap platform" },
          { value: 'admin', label: 'I have administrative data' },
          { value: 'oth', label: 'I have other data' },
        ]} />
        
        <Input
          id="ma_existing_data_pid"
          name="ma_existing_data_pid"
          type="number"
          min="0"
          label="REDCap PID"
        />

        <TextArea
          name="ma_data_desc"
          id="ma_data_desc"
          label="What dataset(s) will you be using?"
        />

        <CheckboxGroup name="ma_methods[]" label="What Methods support do you require?" options={[
          { value: 'power', label: 'Power/sample size calculations' },
          { value: 'review', label: 'Review of existing methods section/research design/statistical plan' },
          { value: 'dev', label: 'Co-development of methods section/research design/statistical plan' },
          { value: 'unsure', label: 'I am unsure' },
          { value: 'none', label: "I don't require methods support" },
        ]} />
        
        <CheckboxGroup name="ma_analytics[]" label="What Analytics support do you require?" options={[
          { value: 'cleaning', label: 'Data cleaning, linking and processing' },
          { value: 'power', label: 'Sample size calculation (a priori power calculations)' },
          { value: 'stats', label: 'Descriptive statistics, traditional biostatistical methods' },
          { value: 'ml', label: 'Machine learning and data science methods' },
          { value: 'vis', label: 'Visualizations' },
          { value: 'oth', label: 'Other' },
          { value: 'unsure', label: 'I am unsure' },
          { value: 'none', label: "I don't require analytics support" },
        ]} />
        

        <TextArea
          name="ma_analytics_oth"
          id="ma_analytics_oth"
          label="What other Analytics support do you require?"
        />

        <Input
          id="ma_research_question"
          name="ma_research_question"
          label="What is your Research Question?"
        />
      </fieldset>
    </SubSection>
  )
}
