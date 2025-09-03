import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'

export default function MethodsAnalytics() {
  return (
    <fieldset
      class="space-y-4 rounded-lg border border-gray-200 p-4"
      id="methods_analytics_section"
    >
      <legend class="px-2 text-lg font-semibold text-gray-900">
        Methods, Data & Analytics Support
      </legend>

      <div>
        <div class="mt-2 space-y-2">
          <Radio
            name="ma_have_existing_data"
            label="Do you currently have data?"
            options={[
              { value: '1', label: 'Yes' },
              { value: '0', label: 'No, I require data access' },
              { value: '99', label: 'I am looking for more information' },
            ]}
          />
        </div>
      </div>

      <div id="existing_data_section">
        <div class="block text-sm font-medium text-gray-700">
          What type of data do you have?
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox
            name="ma_existing_data[]"
            value="rc"
            label="I have data on CHI's REDCap platform"
          />
          <Checkbox
            name="ma_existing_data[]"
            value="admin"
            label="I have administrative data"
          />
          <Checkbox name="ma_existing_data[]" value="oth" label="I have other data" />
        </div>
      </div>

      <div id="redcap_pid_section">
        <Input
          id="ma_existing_data_pid"
          name="ma_existing_data_pid"
          type="number"
          label="REDCap PID"
        />
      </div>

      <div id="dataset_description_section">
        <TextArea
          name="ma_data_desc"
          id="ma_data_desc"
          label="What dataset(s) will you be using?"
        />
      </div>

      <div>
        <div class="block text-sm font-medium text-gray-700">
          What Methods support do you require? *
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox
            name="ma_methods[]"
            value="power"
            label="Power/sample size calculations"
          />
          <Checkbox
            name="ma_methods[]"
            value="review"
            label="Review of existing methods section/research design/statistical plan"
          />
          <Checkbox
            name="ma_methods[]"
            value="dev"
            label="Co-development of methods section/research design/statistical plan"
          />

          <Checkbox name="ma_methods[]" value="unsure" label="I am unsure" />
          <Checkbox
            name="ma_methods[]"
            value="none"
            label="I don't require methods support"
          />
        </div>
      </div>

      <div>
        <div class="block text-sm font-medium text-gray-700">
          What Analytics support do you require? *
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox
            name="ma_analytics[]"
            value="cleaning"
            label="Data cleaning, linking and processing"
          />
          <Checkbox
            name="ma_analytics[]"
            value="power"
            label="Sample size calculation (a priori power calculations)"
          />
          <Checkbox
            name="ma_analytics[]"
            value="stats"
            label="Descriptive statistics, traditional biostatistical methods"
          />
          <Checkbox
            name="ma_analytics[]"
            value="ml"
            label="Machine learning and data science methods"
          />
          <Checkbox name="ma_analytics[]" value="vis" label="Visualizations" />
          <Checkbox name="ma_analytics[]" value="oth" label="Other" />
          <Checkbox name="ma_analytics[]" value="unsure" label="I am unsure" />
          <Checkbox
            name="ma_analytics[]"
            value="none"
            label="I don't require analytics support"
          />
        </div>
      </div>

      <TextArea
        name="ma_analytics_oth"
        id="ma_analytics_oth"
        label="What other Analytics support do you require?"
      />

      <div>
        <Input
          id="ma_research_question"
          name="ma_research_question"
          label="What is your Research Question?"
        />
      </div>
    </fieldset>
  )
}
