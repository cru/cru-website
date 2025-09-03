import Checkbox from "../../ui/solid/Checkbox"
import Input from "../../ui/solid/Input"
import Radio from "../../ui/solid/Radio"
import TextArea from "../../ui/solid/TextArea"

export default function Financial() {
	return (
		<fieldset
			class="space-y-4 rounded-lg border border-gray-200 p-4"
			id="financial_section"
		>
			<legend class="px-2 text-lg font-semibold text-gray-900">
				Financial Information
			</legend>

			<div>
				<Checkbox
					name="fin_requester_is_contact"
					value="1"
					label="I am the billing contact"
				/>
			</div>

			<div
				class="grid grid-cols-1 gap-4 md:grid-cols-3"
				id="billing_contact_fields"
			>
				<Input
					id="fin_contact_fname"
					name="fin_contact_fname"
					label="Billing Contact First Name"
				/>
				<Input
					id="fin_contact_lname"
					name="fin_contact_lname"
					label="Billing Contact Last Name"
				/>

				<Input
					id="fin_contact_email"
					name="fin_contact_email"
					label="Billing Contact Email"
					type="email"
				/>
			</div>

			<div>
				<div class="block text-sm font-medium text-gray-700">
					Please select preferred payment method *
				</div>
				<div class="mt-2 space-y-2">
					<Radio
						name="fin_method"
						label="Please select preferred payment method"
						options={[
							{ value: "uofc", label: "UofC GLJE/Journal Transfer" },
							{
								value: "ex",
								label: "External Account (e.g., AHS, other institutions)",
							},
							{
								value: "cc",
								label: "Credit Card (note: UofC PCard is not allowed)",
							},
						]}
					/>
				</div>
			</div>

			<div
				id="external_payment_section"
				style={{ display: "none" }}
				class="space-y-4"
			>
				<div>
					<Input
						id="fin_method_ex_institution"
						name="fin_method_ex_institution"
						label="Institution/Company Name *"
					/>
				</div>
				<div>
					<TextArea
						name="fin_method_ex_address"
						id="fin_method_ex_address"
						label="Institution/Company Address *"
						required
					/>
				</div>

				<div>
					<Input
						id="fin_method_ex_name"
						name="fin_method_ex_name"
						label="Institution/Company Contact Name *"
					/>
				</div>

				<Input
					id="fin_method_ex_email"
					name="fin_method_ex_email"
					label="Institution/Company Contact Email"
					type="email"
					required
				/>
			</div>

			<div>
				<Checkbox
					name="terms_agree"
					value="1"
					required
					label="I agree to the Terms & Conditions"
				/>
			</div>

			<div>
				<label for="terms_sig" class="block text-sm font-medium text-gray-700">
					Authorization Signature *
				</label>
				<input
					type="file"
					name="terms_sig"
					id="terms_sig"
					required
					class="mt-1 block w-full"
				/>
			</div>
		</fieldset>
	)
}
