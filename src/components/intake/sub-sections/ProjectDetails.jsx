import Checkbox from '../../ui/solid/Checkbox'
import InputText from '../../ui/solid/InputText'

export default function ProjectDetails() {
  return (
    <fieldset
      class="space-y-4 rounded-lg border border-gray-200 p-4"
      id="methods_analytics_section"
    >
      <legend class="px-2 text-lg font-semibold text-gray-900">Project Details</legend>
      <div class="space-y-4">
        <Checkbox
          name="proj_is_lshi"
          value="1"
          label="This study is a Learning Health System Initiative (LSHI)"
        />

        <Checkbox
          name="proj_have_protocol"
          value="1"
          label="I have a study or project summary/protocol I can upload"
        />

        <div id="protocol_upload_section">
          <label
            for="proj_protocol_upload"
            class="block text-sm font-medium text-gray-700"
          >
            Project Summary/Protocol Upload
          </label>
          <input
            type="file"
            name="proj_protocol_upload"
            id="proj_protocol_upload"
            class="mt-1 block w-full"
          />
        </div>

        <div>
          <Checkbox name="proj_have_ethics" value="1" label="I have ethics approval" />
        </div>

        <div id="ethics_details_section">
          <div>
            <InputText
              id="proj_ethics_id"
              name="proj_ethics_id"
              label="Ethics ID"
              placeholder="Ethics ID"
            />
          </div>
          <div>
            <label
              for="proj_ethics_upload"
              class="block text-sm font-medium text-gray-700"
            >
              Ethics Upload
            </label>
            <input
              type="file"
              name="proj_ethics_upload"
              id="proj_ethics_upload"
              class="mt-1 block w-full"
            />
          </div>
        </div>

        <div>
          <Checkbox
            name="proj_need_ethics"
            value="1"
            label="I need support with ethics"
          />
        </div>

        <div>
          <Checkbox
            name="proj_have_budget"
            value="1"
            label="I have an approved/anticipated budget in mind"
          />
        </div>

        <div id="budget_section">
          <label for="proj_budget_amt" class="block text-sm font-medium text-gray-700">
            Budget Amount (CAD$)
          </label>
          <input
            type="number"
            name="proj_budget_amt"
            id="proj_budget_amt"
            placeholder="CAD$"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label for="proj_date_start" class="block text-sm font-medium text-gray-700">
              Intended Start Date
            </label>
            <input
              type="date"
              name="proj_date_start"
              id="proj_date_start"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label for="proj_date_end" class="block text-sm font-medium text-gray-700">
              Intended End Date
            </label>
            <input
              type="date"
              name="proj_date_end"
              id="proj_date_end"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>
      <fieldset></fieldset>
    </fieldset>
  )
}
