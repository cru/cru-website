import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function ResearchPurpose(props) {
  return (
    <SubSection {...props}>
      <fieldset
        class="space-y-4 rounded-lg border border-gray-200 p-4"
        id="methods_analytics_section"
      >
        <legend class="px-2 text-lg font-semibold text-gray-900">
          Research Type
        </legend>
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

        <Input
          id="proj_purpose_res_oth"
          name="proj_purpose_res_oth"
          label="Specify Research Purpose"
          placeholder="specify project or study purpose"
        />
      </fieldset>
    </SubSection>
  )
}
