import SubSection from '../SubSection'
import Input from '../ui/Input'

export default function PrincipalInvestigator(props) {
  return (
    <SubSection {...props} title="Principal investigator">
      <div class="space-y-4">
        {/* <Checkbox
          name="proj_requester_is_pi___1"
          value="1"
          label="I am the principal investigator"
        /> */}
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3" id="pi_fields">
          <Input name="proj_pi_fname" label="PI First Name" />
          <Input name="proj_pi_lname" label="PI Last Name" />
          <Input name="proj_pi_email" label="PI Email" type="email" />
        </div>
      </div>
    </SubSection>
  )
}
