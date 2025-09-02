import Checkbox from "../../ui/solid/Checkbox"
import InputText from "../../ui/solid/InputText"

export default function ProjectInfo() {
	return (
		<fieldset
			class="space-y-4 rounded-lg border border-gray-200 p-4"
			id="project_section"
			style={{ display: "none" }}
		>
			<legend class="px-2 text-lg font-semibold text-gray-900">
				New Service or Project
			</legend>

			<div class="space-y-3">
				<div class="block text-sm font-medium text-gray-700">
					What type of support or service do you need? *
				</div>
				<div class="space-y-2">
					<Checkbox
						name="proj_type[]"
						value="rc"
						label="REDCap (Research Electronic Data Capture)"
					/>
					<Checkbox
						name="proj_type[]"
						value="custom"
						label="Custom Platform Development"
					/>
					<Checkbox
						name="proj_type[]"
						value="ma"
						label="Methods, Data & Analytics Support"
					/>
				</div>
			</div>

			<div>
				<InputText
					id="proj_title"
					name="proj_title"
					label="Project or Study Title *"
					required
				/>
			</div>

			<div>
				<div class="block text-sm font-medium text-gray-700">
					Purpose of your project or study? *
				</div>
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose"
							value="research"
							class="border-gray-300"
						/>
						<span class="ml-2">Research</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose"
							value="qi"
							class="border-gray-300"
						/>
						<span class="ml-2">Quality Improvement</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="proj_purpose"
							value="op"
							class="border-gray-300"
						/>
						<span class="ml-2">Operational</span>
					</label>
				</div>
			</div>
		</fieldset>
	)
}
