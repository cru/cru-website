import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import Select from '../../ui/solid/Select'
import SubSection from '../SubSection'

const AccountCreation = (props) => {
  return (
    <SubSection {...props} title="New REDCap user account">
      <fieldset class="space-y-4">
        <div>
          <Select
            name="user_account_num"
            label="How many new user accounts are you requesting?"
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
              { value: '4', label: '4' },
              { value: '5', label: '5' },
              { value: '6', label: '6' },
              { value: '7', label: '7' },
              { value: '8', label: '8' },
              { value: '9', label: '9' },
              { value: '10', label: '10' },
              { value: '11', label: '11' },
              { value: '12', label: '12' },
              { value: '13', label: '13' },
              { value: '14', label: '14' },
              { value: '15', label: '15' },
            ]}
          />
        </div>

        <div>
          <Checkbox
            name="user_1_is_requester"
            value="1"
            label="This account is for myself"
          />
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3" id="user_1_fields">
          <Input
            name="user_1_fname"
            label="User 1 First Name"
          />
          <Input
            name="user_1_lname"
            label="User 1 Last Name"
          />
          <Input
            name="user_1_email"
            label="User 1 Email"
            type="email"
          />
        </div>

        {/* <!-- Additional user fields (2-15) would be generated dynamically --> */}
        <div id="additional_users">
          {/* Users 2-15 will be added via JavaScript based on user_account_num selection */}
        </div>

        <div>
          <Checkbox
            name="user_notify"
            value="1"
            label="I would like to be notified when the requested account(s) are created & their usernames"
          />
        </div>
      </fieldset>
    </SubSection>
  )
}

export default AccountCreation
