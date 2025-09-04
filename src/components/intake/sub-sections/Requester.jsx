import Input from '../../ui/solid/Input'
import Select from '../../ui/solid/Select'
import SubSection from '../SubSection'

export default function Requester(props) {
  return (
    <SubSection {...props} title="Requester Information">
      <fieldset class="space-y-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            id="requester_fname"
            name="requester_fname"
            label="First Name"
            required
          />
          <Input id="requester_lname" name="requester_lname" label="Last Name" required />
        </div>

        <Input
          id="requester_email"
          name="requester_email"
          label="Email"
          type="email"
          required
        />

        <Select
          id="requester_institution"
          name="requester_institution"
          label="Institutional Affiliation"
          required
          options={[
            { value: '', label: 'Select institution...' },
            { value: 'uc', label: 'University of Calgary' },
            { value: 'oth', label: 'Other (AHS, University of Alberta, etc.)' },
          ]}
        />

        <Select
          id="requester_institution_uc"
          name="requester_institution_uc"
          label="University of Calgary Faculty"
          options={[
            { value: '', label: 'Select faculty...' },
            { value: 'med', label: 'Cumming School of Medicine' },
            { value: 'nur', label: 'Nursing' },
            { value: 'kin', label: 'Kinesiology' },
            { value: 'eng', label: 'Engineering' },
          ]}
        />

        <Select
          id="requester_institution_uc_faculty"
          name="requester_institution_uc_faculty"
          label="Department"
          options={[
            { value: '', label: 'Select department...' },
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

        <Select
          id="requester_institution_oth"
          name="requester_institution_oth"
          label="Other Institution"
          options={[
            { value: '', label: 'Select other...' },
            { value: 'uni', label: 'Other Post-Secondary Institute' },
            { value: 'pca', label: 'Primary Care Alberta' },
            { value: 'aca', label: 'Acute Care Alberta' },
            { value: 'ra', label: 'Recovery Alberta' },
            { value: 'ala', label: 'Assisted Living Alberta' },
            { value: 'ahs', label: 'Alberta Health Services' },
            { value: 'oth', label: 'Other' },
          ]}
        />

        <Input
          id="requester_institution_uni"
          name="requester_institution_uni"
          label="Specify Institution"
          placeholder="specify institution"
        />

        <Input
          id="requester_institution_other"
          name="requester_institution_other"
          label="Other Institution"
          placeholder="specify institution"
        />

        <Input
          id="requester_referred_from"
          name="requester_referred_from"
          label="How did you hear about our services?"
        />
      </fieldset>
    </SubSection>
  )
}
