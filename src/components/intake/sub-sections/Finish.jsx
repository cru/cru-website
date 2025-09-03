import '@awesome.me/webawesome/dist/components/button/button.js'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function Finish(props) {
  return (
    <SubSection {...props}>
      <div class="space-y-6">
        <TextArea
          name="service_comments"
          id="service_comments"
          label="Any additional notes or comments?"
        />
        <wa-button type="submit" class="w-full">
          Submit request
        </wa-button>
      </div>
    </SubSection>
  )
}
