import InputText from "../../ui/solid/InputText"

export default function MethodsAnalytics() {
	return (
		<fieldset
			class="space-y-4 rounded-lg border border-gray-200 p-4"
			id="methods_analytics_section"
			style={{ display: "none" }}
		>
			<legend class="px-2 text-lg font-semibold text-gray-900">
				Methods, Data & Analytics Support
			</legend>

			<div>
				<div class="block text-sm font-medium text-gray-700">
					Do you currently have data? *
				</div>
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="radio"
							name="ma_have_existing_data"
							value="1"
							class="border-gray-300"
						/>
						<span class="ml-2">Yes</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="ma_have_existing_data"
							value="0"
							class="border-gray-300"
						/>
						<span class="ml-2">No, I require data access</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="ma_have_existing_data"
							value="99"
							class="border-gray-300"
						/>
						<span class="ml-2">I am looking for more information</span>
					</label>
				</div>
			</div>

			<div id="existing_data_section" style={{ display: "none" }}>
				<div class="block text-sm font-medium text-gray-700">
					What type of data do you have?
				</div>
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_existing_data[]"
							value="rc"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I have data on CHI's REDCap platform</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_existing_data[]"
							value="admin"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I have administrative data</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_existing_data[]"
							value="oth"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I have other data</span>
					</label>
				</div>
			</div>

			<div id="redcap_pid_section" style={{ display: "none" }}>
				<label
					for="ma_existing_data_pid"
					class="block text-sm font-medium text-gray-700"
				>
					REDCap PID
				</label>
				<input
					type="number"
					name="ma_existing_data_pid"
					id="ma_existing_data_pid"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				/>
			</div>

			<div id="dataset_description_section" style={{ display: "none" }}>
				<label
					for="ma_data_desc"
					class="block text-sm font-medium text-gray-700"
				>
					What dataset(s) will you be using?
				</label>
				<textarea
					name="ma_data_desc"
					id="ma_data_desc"
					rows="3"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				></textarea>
			</div>

			<div>
				<div class="block text-sm font-medium text-gray-700">
					What Methods support do you require? *
				</div>
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_methods[]"
							value="power"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">Power/sample size calculations</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_methods[]"
							value="review"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">
							Review of existing methods section/research design/statistical
							plan
						</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_methods[]"
							value="dev"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">
							Co-development of methods section/research design/statistical plan
						</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_methods[]"
							value="unsure"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I am unsure</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_methods[]"
							value="none"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I don't require methods support</span>
					</label>
				</div>
			</div>

			<div>
				<div class="block text-sm font-medium text-gray-700">
					What Analytics support do you require? *
				</div>
				<div class="mt-2 space-y-2">
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="cleaning"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">Data cleaning, linking and processing</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="power"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">
							Sample size calculation (a priori power calculations)
						</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="stats"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">
							Descriptive statistics, traditional biostatistical methods
						</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="ml"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">Machine learning and data science methods</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="vis"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">Visualizations</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="oth"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">Other</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="unsure"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I am unsure</span>
					</label>
					<label class="flex items-center">
						<input
							type="checkbox"
							name="ma_analytics[]"
							value="none"
							class="rounded border-gray-300"
						/>
						<span class="ml-2">I don't require analytics support</span>
					</label>
				</div>
			</div>

			<div id="analytics_other_section" style={{ display: "none" }}>
				<label
					for="ma_analytics_oth"
					class="block text-sm font-medium text-gray-700"
				>
					What other Analytics support do you require?
				</label>
				<textarea
					name="ma_analytics_oth"
					id="ma_analytics_oth"
					rows="3"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				></textarea>
			</div>

			<div>
				<InputText
					id="ma_research_question"
					name="ma_research_question"
					label="What is your Research Question?"
				/>
			</div>
		</fieldset>
	)
}
