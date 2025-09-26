import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'

const Checkbox = (props) => {
  return (
    <wa-checkbox size="small" {...props} class={`${props.classes}`}>
      {props.label}
    </wa-checkbox>
  )
}

export default Checkbox
