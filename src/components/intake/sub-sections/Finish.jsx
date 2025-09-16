import '@awesome.me/webawesome/dist/components/button/button.js'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function Finish(props) {
  return (
    <SubSection {...props} title="Finish up">
      <fieldset class="space-y-4">
        <TextArea name="service_comments" label="Any additional notes or comments?" />
        <wa-button type="button" class="w-full" onClick={props.onSubmit}>
          Submit request
        </wa-button>
      </fieldset>
    </SubSection>
  )
}
