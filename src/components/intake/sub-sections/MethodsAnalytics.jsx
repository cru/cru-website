import Checkbox from '../../ui/solid/Checkbox'
import InputText from '../../ui/solid/InputText'

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
        <div class="block text-sm font-medium text-gray-700">
          Do you currently have data? *
        </div>
        <div class="mt-2 space-y-2">
          <label class="flex items-center">
            <input
              type="radio"
              name="ma_have_existing_data"
              value="1"
              class="border-gray-300"
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              name="ma_have_existing_data"
              value="0"
              class="border-gray-300"
            />
            <span class="ml-2">No, I require data access</span>
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              name="ma_have_existing_data"
              value="99"
              class="border-gray-300"
            />
            <span class="ml-2">I am looking for more information</span>
          </label>
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
        <label for="ma_existing_data_pid" class="block text-sm font-medium text-gray-700">
          REDCap PID
        </label>
        <input
          type="number"
          name="ma_existing_data_pid"
          id="ma_existing_data_pid"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div id="dataset_description_section">
        <label for="ma_data_desc" class="block text-sm font-medium text-gray-700">
          What dataset(s) will you be using?
        </label>
        <textarea
          name="ma_data_desc"
          id="ma_data_desc"
          rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
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

      <div id="analytics_other_section">
        <label for="ma_analytics_oth" class="block text-sm font-medium text-gray-700">
          What other Analytics support do you require?
        </label>
        <textarea
          name="ma_analytics_oth"
          id="ma_analytics_oth"
          rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>

      <div>
        <InputText
          id="ma_research_question"
          name="ma_research_question"
          label="What is your Research Question?"
        />
      </div>
    </fieldset>
  )
}
