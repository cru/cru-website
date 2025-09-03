import InputText from "../../ui/solid/InputText"

export default function ResearchPurpose() {
	return (
		<fieldset
			class="space-y-4 rounded-lg border border-gray-200 p-4"
			id="methods_analytics_section"
		>
			<legend class="px-2 text-lg font-semibold text-gray-900">
				Research Type
			</legend>
			<div id="research_purpose_section">
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose_res"
							value="basic"
							class="border-gray-300"
						/>
						<span class="ml-2">Basic research</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose_res"
							value="ct"
							class="border-gray-300"
						/>
						<span class="ml-2">Clinical Trial</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose_res"
							value="registry"
							class="border-gray-300"
						/>
						<span class="ml-2">Registry/Repository</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose_res"
							value="oth"
							class="border-gray-300"
						/>
						<span class="ml-2">Other</span>
					</label>
				</div>
			</div>

			<div id="research_other_section">
				<InputText
					id="proj_purpose_res_oth"
					name="proj_purpose_res_oth"
					label="Specify Research Purpose"
					placeholder="specify project or study purpose"
				/>
			</div>
		</fieldset>
	)
}
