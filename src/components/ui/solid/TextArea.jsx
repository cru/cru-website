import "@awesome.me/webawesome/dist/components/textarea/textarea.js"

const TextArea = (props) => {
	return <wa-textarea {...props} class={`${props.classes}`}></wa-textarea>
}

export default TextArea
