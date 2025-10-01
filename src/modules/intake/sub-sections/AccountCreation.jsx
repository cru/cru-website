import { createEffect, createSignal, For } from 'solid-js'
import SubSection from '../SubSection'
import Checkbox from '../ui/Checkbox'
import Input from '../ui/Input'

const AccountCreation = (props) => {
  const [numAccounts, setNumAccounts] = createSignal([1])

  createEffect(() => {
    if (!props.form) return

    props.form.addEventListener('input', (e) => {
      if (e.target.name === 'user_account_num')
        setNumAccounts(Array(Number(e.target.value)).fill(0))
    })
  })

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
          value="1"
        />
        {/* <Checkbox
            name="user_1_is_requester___1"
            value="1"
            label="This account is for myself"
          /> */}
        <table class="w-full border-collapse">
          <thead class="text-left text-sm">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <For each={numAccounts()}>
              {(_, index) => (
                <tr>
                  <td>
                    <Input name={`user_${index() + 1}_fname`} required />
                  </td>
                  <td class="px-3 py-2">
                    <Input name={`user_${index() + 1}_lname`} required />
                  </td>
                  <td>
                    <Input name={`user_${index() + 1}_email`} type="email" required />
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
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
