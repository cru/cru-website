import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function OtherServices(props) {
  return (
    <SubSection {...props} title="Other services">
      <fieldset class="space-y-4">
          <TextArea
            name="service_oth_questions"
            id="service_oth_questions"
            label="What would you like help with, or what questions do you have?"
          />
      </fieldset>
    </SubSection>
  )
}
