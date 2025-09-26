import SubSection from '../SubSection'
import CheckboxGroup from '../ui/CheckboxGroup'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'

export default function FreeTrial(props) {
  return (
    <SubSection {...props} title="Free trial / practice project">
      <div class="space-y-4">
        <CheckboxGroup
          name="trial_type"
          label="What type of service are you looking to try?"
          required
          options={[
            { value: 'rc', label: 'REDCap practice/training project' },
            { value: 'dx', label: 'DataXplor' },
          ]}
        />
        <Input name="trial_proj_title" label="Practice Project Title" />
        <TextArea
          name="trial_rc_users"
          label="REDCap Username(s) to add to the practice project"
          hint="Including your own, if known"
        />
      </div>
    </SubSection>
  )
}
