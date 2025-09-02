const InputText = (props) => {
	return (
		<div class="space-y-1">
			<label
				for={props.id}
				class="block text-sm font-medium"
			>{`${props.label}${props.required ? " *" : ""}`}</label>
			<input
				type={props.type}
				id={props.id}
				name={props.name}
				{...props}
				class={`block w-full rounded-md border border-gray-200 px-2 py-1 ${props.className}`}
			/>
		</div>
	)
}

export default InputText
