import '@awesome.me/webawesome/dist/components/input/input.js'

const Input = (props) => {
  return <wa-input {...props} class={`${props.classes}`}></wa-input>
}

export default Input
