import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function ServiceType(props) {
  return (
    <SubSection {...props} title="How can we help?">
      <div class="space-y-6">
        <Radio
          name="service_type_user___user"
          label="I need a new REDCap account created"
          required
          orientation="horizontal"
          options={[
            { value: '1', label: 'Yes' },
            { value: '0', label: 'No' },
          ]}
        />
        <Radio
          name="service_type"
          label="Is there anything else you need support with?"
          options={[
            {
              value: 'trial',
              label: 'I would like to create a new REDCap 60-day Practice Project',
            },
            {
              value: 'proj',
              label:
                'I am looking to request support or initiate a new service with your team today (e.g. a new REDCap project, data access, analytics, or platform development and/or support)',
            },
            {
              value: 'oth',
              label:
                'I’m not sure what services I require, but I would like to learn more about the support offered by CHI.',
            },
          ]}
        />
      </div>
    </SubSection>
  )
}
