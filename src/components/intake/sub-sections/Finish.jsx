import '@awesome.me/webawesome/dist/components/button/button.js'
import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function Finish(props) {
  const handleSubmit = async () => {
    const disabledFields = props.formRef.querySelectorAll('[disabled]');
    disabledFields.forEach(field => field.disabled = false);
    const formData = new FormData(props.formRef)
    const formJson = Object.fromEntries(
        Array.from(formData.keys()).map(key => [
          key, formData.get(key)
        ])
    )
    
    formData.keys().forEach(key => console.log(key, formData.get(key)))
    // const { data, error } = await actions.submitIntake(formJson)
    // console.log(error)
    if (!error) alert(data)

  }

  return (
    <SubSection {...props} title="Finish up">
      <fieldset class="space-y-4">
        <TextArea
          name="service_comments"
          label="Any additional notes or comments?"
        />
        <wa-button type="button" class="w-full" onClick={handleSubmit}>
          Submit request
        </wa-button>
      </fieldset>
    </SubSection>
  )
}
