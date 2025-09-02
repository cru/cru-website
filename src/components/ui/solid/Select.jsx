const Select = (props) => {
	return (
		<div class="space-y-1">
			<label for={props.id} class="block text-sm font-medium">
				{props.label}
			</label>
			<select
				name={props.name}
				id={props.id}
				{...props}
				class={`block w-full rounded-md border border-gray-200 px-2 py-1 appearance-none ${props.className}`}
			>
				{props.options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	)
}

export default Select
