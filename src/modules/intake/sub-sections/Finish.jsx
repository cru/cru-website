import '@awesome.me/webawesome/dist/components/button/button.js'
import SubSection from '../SubSection'
import TextArea from '../ui/TextArea'

export default function Finish(props) {
  return (
    <SubSection {...props} title="Finish up">
      <div class="space-y-4">
        <TextArea name="service_comments" label="Any additional notes or comments?" />
        <wa-button
          type="button"
          class="w-full"
          loading={props.status === 'submitting'}
          onClick={props.onSubmit}
        >
          Submit request
        </wa-button>
      </div>
    </SubSection>
  )
}
