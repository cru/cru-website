import Checkbox from '../../ui/solid/Checkbox'
import InputText from '../../ui/solid/InputText'

export default function FreeTrial() {
  return (
    <fieldset class="space-y-4 rounded-lg border border-gray-200 p-4" id="trial_section">
      <legend class="px-2 text-lg font-semibold text-gray-900">
        Free Trial / Practice Project
      </legend>

      <div>
        <div class="block text-sm font-medium text-gray-700">
          What type of service are you looking to try? *
        </div>
        <div class="mt-2 space-y-2">
          <Checkbox
            name="trial_type[]"
            value="rc"
            label="REDCap practice/training project"
          />
          <Checkbox name="trial_type[]" value="dx" label="DataXplor" />
        </div>
      </div>

      <div id="trial_redcap_section">
        <div>
          <InputText
            id="trial_proj_title"
            name="trial_proj_title"
            label="Practice Project Title *"
          />
        </div>

        <div>
          <label for="trial_rc_users" class="block text-sm font-medium text-gray-700">
            REDCap Username(s) to add to the practice project
          </label>
          <textarea
            name="trial_rc_users"
            id="trial_rc_users"
            rows="3"
            placeholder="Including your own, if known"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>
      </div>
    </fieldset>
  )
}
