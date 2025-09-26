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
        />
        <Radio
          name="proj_purpose_ct"
          label="Clinical Trial registration"
          options={[
            { value: 'hc', label: 'Health Canada' },
            { value: 'non', label: 'Non-registered' },
          ]}
        />
                <Input
          name="proj_purpose_ct_hc"
          label="Protocol or Control number"
        />
                        <Input
          name="proj_purpose_ct_non"
          label="Protocol or Control number"
        />
      </div>
    </SubSection>
  )
}
