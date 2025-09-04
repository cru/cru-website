import Radio from '../../ui/solid/Radio'
import SubSection from '../SubSection'

export default function ServiceType(props) {
  return (
    <SubSection {...props} title="Welcome to the CHI">
      <Radio
        name="service_type"
        label="To get started, let us know what type of support you are looking for"
        required
        options={[
          {
            value: 'user',
            label: 'Do you need us to create a new REDCap account for you?',
          },
          {
            value: 'trial',
            label:
              'Do you need us to create a new REDCap 60-day Practice Project for you?',
          },
          {
            value: 'proj',
            label:
              'Are you looking to request support or initiate a new service with our team today (e.g. a new REDCap project, data access, analytics, or platform development and/or support)?',
          },
          {
            value: 'oth',
            label:
              'I’m not sure what services I require, but I would like to learn more about the support required by CHI.',
          },
        ]}
      />
    </SubSection>
  )
}
