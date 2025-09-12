import '@awesome.me/webawesome/dist/components/button/button.js'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'
import { actions } from 'astro:actions'

export default function Finish(props) {
  const handleSubmit = async () => {
    const { data, error } = await actions.submitIntake({ name: 'Houston' })
    if (!error) alert(data)
  }

  return (
    <SubSection {...props} title="Finish up">
      <fieldset class="space-y-4">
        <TextArea
          name="service_comments"
          id="service_comments"
          label="Any additional notes or comments?"
        />
        <wa-button type="button" class="w-full" onClick={handleSubmit}>
          Submit request
        </wa-button>
      </fieldset>
    </SubSection>
  )
}
