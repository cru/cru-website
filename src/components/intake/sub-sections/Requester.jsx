import { createEffect, createSignal, Show } from 'solid-js'
import Input from '../../ui/solid/Input'
import Select from '../../ui/solid/Select'
import SubSection from '../SubSection'

export default function Requester(props) {
  const [branchTriggers, setBranchTriggers] = createSignal({
    requester_institution: null,
    requester_institution_uc_faculty: null,
    requester_institution_oth: null,
  })

  createEffect(() => {
    if (!props.form) return

    props.form.addEventListener('input', (e) => {
      setBranchTriggers({
        ...branchTriggers(),
        [e.target.name]: e.target.value,
      })
    })
  })

  return (
    <SubSection {...props} title="Some info about you">
      <div class="space-y-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input name="requester_fname" label="First Name" required minlength="2" />
          <Input name="requester_lname" label="Last Name" required minlength="2" />
        </div>
        <Input name="requester_email" label="Email" type="email" required />
        <Select
          name="requester_institution"
          label="Institutional Affiliation"
          required
          options={[
            { value: 'uc', label: 'University of Calgary' },
            { value: 'oth', label: 'Other (AHS, University of Alberta, etc.)' },
          ]}
        />
        <Show when={branchTriggers().requester_institution === 'uc'}>
          <Select
            name="requester_institution_uc_faculty"
            label="University of Calgary Faculty"
            required
            options={[
              { value: 'med', label: 'Cumming School of Medicine' },
              { value: 'nur', label: 'Nursing' },
              { value: 'kin', label: 'Kinesiology' },
              { value: 'eng', label: 'Engineering' },
            ]}
          />
        </Show>
        <Show when={branchTriggers().requester_institution_uc_faculty === 'med'}>
          <Select
            name="requester_institution_uc_department"
            label="University of Calgary CSM Department"
            required
            options={[
              {
                value: 'appm',
                label: 'Anesthesiology, Perioperative and Pain Medicine',
              },
              { value: 'bmb', label: 'Biochemistry and Molecular Biology' },
              { value: 'cardiac', label: 'Cardiac Sciences' },
              { value: 'cba', label: 'Cell Biology and Anatomy' },
              { value: 'cns', label: 'Clinical Neurosciences' },
              { value: 'chs', label: 'Community Health Sciences' },
              { value: 'ccm', label: 'Critical Care Medicine' },
              { value: 'emerg', label: 'Emergency Medicine' },
              { value: 'fam', label: 'Family Medicine' },
              { value: 'gen', label: 'Medical Genetics' },
              { value: 'med', label: 'Medicine' },
              {
                value: 'microinfect',
                label: 'Microbiology, Immunology and Infectious Diseases',
              },
              { value: 'obgyn', label: 'Obstetrics and Gynaecology' },
              { value: 'onc', label: 'Oncology' },
              { value: 'ped', label: 'Pediatrics / Paediatrics' },
              { value: 'lab', label: 'Pathology and Laboratory Medicine' },
              { value: 'phys', label: 'Physiology and Pharmacology' },
              { value: 'psych', label: 'Psychiatry' },
              { value: 'rad', label: 'Radiology' },
              { value: 'surg', label: 'Surgery' },
            ]}
          />
        </Show>
        <Show when={branchTriggers().requester_institution === 'oth'}>
          <Select
            name="requester_institution_oth"
            label="Other Institution"
            required
            options={[
              { value: 'uni', label: 'Other Post-Secondary Institute' },
              { value: 'pca', label: 'Primary Care Alberta' },
              { value: 'aca', label: 'Acute Care Alberta' },
              { value: 'ra', label: 'Recovery Alberta' },
              { value: 'ala', label: 'Assisted Living Alberta' },
              { value: 'ahs', label: 'Alberta Health Services' },
              { value: 'oth', label: 'Other' },
            ]}
          />
        </Show>
        <Show when={branchTriggers().requester_institution_oth === 'uni'}>
          <Input
            name="requester_institution_uni"
            label="Specify Other Post-Secondary Institute"
            required
          />
        </Show>
        <Show when={branchTriggers().requester_institution_oth === 'oth'}>
          <Input
            name="requester_institution_other"
            label="Specify Institution"
            required
          />
        </Show>
        <Input
          name="requester_referred_from"
          label="How did you hear about our services?"
        />
      </div>
    </SubSection>
  )
}
