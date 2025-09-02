const Checkbox = (props) => {
	return (
		<label class="flex items-center">
			<input
				type="checkbox"
				name={props.name}
				value={props.value}
				{...props}
				class={`rounded border-gray-300 ${props.className}`}
			/>
			<span class="ml-2">{props.label}</span>
		</label>
	)
}

export default Checkbox
