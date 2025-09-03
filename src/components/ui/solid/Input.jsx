import "@awesome.me/webawesome/dist/components/input/input.js"

const Input = (props) => {
	return (
		<wa-input
			appearance="filled"
			size="small"
			{...props}
			class={`${props.classes}`}
		></wa-input>
	)
}

export default Input
