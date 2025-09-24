import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import SubSection from '../SubSection'

const AccountCreation = (props) => {
  return (
    <SubSection {...props} title="New REDCap user account">
      <div class="space-y-4">
        <Input
          name="user_account_num"
          label="How many new user accounts are you requesting?"
          type="number"
          required
          min="1"
          max="15"
          defaultValue="1"
        />
        {/* <Checkbox
            name="user_1_is_requester___1"
            value="1"
            label="This account is for myself"
          /> */}
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3" id="user_1_fields">
          <Input name="user_1_fname" label="User 1 First Name" />
          <Input name="user_1_lname" label="User 1 Last Name" />
          <Input name="user_1_email" label="User 1 Email" type="email" />
        </div>
        {/* <!-- Additional user fields (2-15) would be generated dynamically --> */}
        <div id="additional_users">
          {/* Users 2-15 will be added via JavaScript based on user_account_num selection */}
        </div>
        <Checkbox
          name="user_notify___1"
          value="1"
          label="I would like to be notified when the requested account(s) are created & their usernames"
        />
      </div>
    </SubSection>
  )
}

export default AccountCreation
