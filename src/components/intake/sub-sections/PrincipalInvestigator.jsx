import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import SubSection from '../SubSection'

export default function PrincipalInvestigator(props) {
  return (
    <SubSection {...props} title="Principal Investigator">
      <fieldset class="space-y-4">
        <Checkbox
          name="proj_requester_is_pi"
          value="1"
          label="I am the principal investigator"
        />

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3" id="pi_fields">
          <Input id="proj_pi_fname" name="proj_pi_fname" label="PI First Name" />
          <Input id="proj_pi_lname" name="proj_pi_lname" label="PI Last Name" />
          <Input id="proj_pi_email" name="proj_pi_email" label="PI Email" type="email" />
        </div>
      </fieldset>
    </SubSection>
  )
}
