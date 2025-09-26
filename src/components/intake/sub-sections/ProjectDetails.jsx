import Checkbox from '../../ui/solid/Checkbox'
import FileUpload from '../../ui/solid/FileUpload'
import Input from '../../ui/solid/Input'
import SubSection from '../SubSection'

export default function ProjectDetails(props) {
  return (
    <SubSection {...props} title="Project details">
      <div class="space-y-4">
        <div class="space-y-4">
          <Checkbox
            name="proj_is_lshi___1"
            value="1"
            label="This study is a Learning Health System Initiative (LSHI)"
          />
          <Checkbox
            name="proj_have_protocol___1"
            value="1"
            label="I have a study or project summary/protocol I can upload"
          />
          <FileUpload
            name="proj_protocol_upload"
            label="Project Summary/Protocol Upload"
          />
          <Checkbox
            name="proj_need_ethics___1"
            value="1"
            label="I need support with ethics"
          />
          <Checkbox
            name="proj_have_ethics___1"
            value="1"
            label="I have ethics approval"
          />
          <Input name="proj_ethics_id" label="Ethics ID" placeholder="Ethics ID" />
          <FileUpload name="proj_ethics_upload" label="Ethics Upload" />

          <Checkbox
            name="proj_have_budget___1"
            value="1"
            label="I have an approved/anticipated budget in mind"
          />
          <Input
            name="proj_budget_amt"
            label="Budget Amount (CAD$)"
            min="0"
            type="number"
            placeholder="CAD$"
          />
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input name="proj_date_start" label="Intended Start Date" type="date" />
            <Input name="proj_date_end" label="Intended End Date" type="date" />
          </div>
        </div>
      </div>
    </SubSection>
  )
}
