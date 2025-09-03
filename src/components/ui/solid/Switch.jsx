import "@awesome.me/webawesome/dist/components/switch/switch.js"

const Switch = (props) => {
	return (
		<wa-switch {...props} class={`${props.className}`}>
			{props.label}
		</wa-switch>
	)
}

export default Switch
