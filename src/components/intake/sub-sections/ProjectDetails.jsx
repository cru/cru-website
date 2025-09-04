import Checkbox from '../../ui/solid/Checkbox'
import Input from '../../ui/solid/Input'
import SubSection from '../SubSection'

export default function ProjectDetails(props) {
  return (
    <SubSection {...props} title="Project Details">
<fieldset class="space-y-4">
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

          <Checkbox name="proj_have_ethics" value="1" label="I have ethics approval" />

          <Input
            id="proj_ethics_id"
            name="proj_ethics_id"
            label="Ethics ID"
            placeholder="Ethics ID"
          />
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

          <Checkbox
            name="proj_need_ethics"
            value="1"
            label="I need support with ethics"
          />

          <Checkbox
            name="proj_have_budget"
            value="1"
            label="I have an approved/anticipated budget in mind"
          />

          <Input
            id="proj_budget_amt"
            name="proj_budget_amt"
            label="Budget Amount (CAD$)"
            min="0"
            type="number"
            placeholder="CAD$"
          />

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              id="proj_date_start"
              name="proj_date_start"
              label="Intended Start Date"
              type="date"
            />

            <Input
              id="proj_date_end"
              name="proj_date_end"
              label="Intended End Date"
              type="date"
            />
          </div>
        </div>
      </fieldset>
    </SubSection>
  )
}
