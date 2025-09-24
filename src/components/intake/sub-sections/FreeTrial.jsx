import CheckboxGroup from '../../ui/solid/CheckboxGroup'
import Input from '../../ui/solid/Input'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function FreeTrial(props) {
  return (
    <SubSection {...props} title="Free trial / practice project">
      <div class="space-y-4">
        <CheckboxGroup
          name="trial_type"
          label="What type of service are you looking to try?"
          options={[
            { value: 'rc', label: 'REDCap practice/training project' },
            { value: 'dx', label: 'DataXplor' },
          ]}
        />
        <Input name="trial_proj_title" label="Practice Project Title" />
        <TextArea
          name="trial_rc_users"
          label="REDCap Username(s) to add to the practice project"
          placeholder="Including your own, if known"
        />
      </div>
    </SubSection>
  )
}
