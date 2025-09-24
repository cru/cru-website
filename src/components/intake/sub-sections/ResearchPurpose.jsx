import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function ResearchPurpose(props) {
  return (
    <SubSection {...props} title="Research purpose">
      <div class="space-y-4">
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
          name="proj_purpose_res_oth"
          label="Specify Research Purpose"
          placeholder="specify project or study purpose"
        />
      </div>
    </SubSection>
  )
}
