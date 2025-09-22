import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Radio from '../../ui/solid/Radio'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function Financial(props) {
  return (
    <SubSection {...props} title="Financial information">
      <fieldset class="space-y-4">
        {/* <Checkbox
          name="fin_requester_is_contact___1"
          value="1"
          label="I am the billing contact"
        /> */}
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3" id="billing_contact_fields">
          <Input name="fin_contact_fname" label="First Name" />
          <Input name="fin_contact_lname" label="Last Name" />
          <Input name="fin_contact_email" label="Email" type="email" />
        </div>
          <small class="text-gray-600">This should always be the project or account owner (preferably the individual listed as the project holder in eFIN)</small>
        </div>
        
          <Radio
            name="fin_method"
            label="Please select preferred payment method"
            required
            options={[
              { value: 'uofc', label: 'UofC GLJE/Journal Transfer' },
              {
                value: 'ex',
                label: 'External Account (e.g., AHS, other institutions)',
              },
              {
                value: 'cc',
                label: 'Credit Card (note: UofC PCard is not allowed)',
              },
            ]}
          />
        <Input
          name="fin_method_ex_institution"
          label="Institution/Company Name"
          required
          minlength="2"
        />
        <TextArea
          name="fin_method_ex_address"
          label="Institution/Company Address"
          required
          minlength="2"
        />
        <Input
          name="fin_method_ex_name"
          label="Institution/Company Contact Name"
          required
          minlength="2"
        />
        <Input
          name="fin_method_ex_email"
          label="Institution/Company Contact Email"
          type="email"
          required
        />
        <Checkbox
          name="terms_agree___1"
          value="1"
          required
          label="I agree to the Terms & Conditions"
        />
      </fieldset>
    </SubSection>
  )
}
