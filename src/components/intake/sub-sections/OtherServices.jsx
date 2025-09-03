import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function OtherServices(props) {
  return (
    <SubSection {...props}>
      <fieldset
        class="space-y-4 rounded-lg border border-gray-200 p-4"
        id="other_section"
      >
        <legend class="px-2 text-lg font-semibold text-gray-900">Other Services</legend>

        <div>
          <TextArea
            name="service_oth_questions"
            id="service_oth_questions"
            label="What would you like help with, or what questions do you have?"
          />
        </div>
      </fieldset>
    </SubSection>
  )
}
