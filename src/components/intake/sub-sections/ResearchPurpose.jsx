import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'

export default function ResearchPurpose() {
  return (
    <fieldset
      class="space-y-4 rounded-lg border border-gray-200 p-4"
      id="methods_analytics_section"
    >
      <legend class="px-2 text-lg font-semibold text-gray-900">Research Type</legend>
      <div id="research_purpose_section">
        <Radio
          name="proj_purpose_res"
          label="What is the primary purpose of your research?"
          options={[
            { value: 'basic', label: 'Basic research' },
            { value: 'ct', label: 'Clinical Trial' },
            { value: 'registry', label: 'Registry/Repository' },
            { value: 'oth', label: 'Other' },
          ]}
        />
      </div>

      <div id="research_other_section">
        <Input
          id="proj_purpose_res_oth"
          name="proj_purpose_res_oth"
          label="Specify Research Purpose"
          placeholder="specify project or study purpose"
        />
      </div>
    </fieldset>
  )
}
