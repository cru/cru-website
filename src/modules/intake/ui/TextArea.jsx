import '@awesome.me/webawesome/dist/components/textarea/textarea.js'

const TextArea = (props) => {
  return (
    <wa-textarea
      appearance="filled"
      size="small"
      {...props}
      class={`${props.classes}`}
    ></wa-textarea>
  )
}

export default TextArea
