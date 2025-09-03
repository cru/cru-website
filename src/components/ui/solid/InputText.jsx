import '@awesome.me/webawesome/dist/components/input/input.js'

const InputText = (props) => {
  return <wa-input {...props} class={`${props.className}`} />
}

export default InputText
