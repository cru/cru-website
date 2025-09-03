import { createSignal } from "solid-js"
import Checkbox from "../ui/solid/Checkbox"
import SolidSteps from "../ui/solid/SolidSteps"
import AccountCreation from "./sub-sections/AccountCreation"
import CustomDevelopment from "./sub-sections/CustomDevelopment"
import Financial from "./sub-sections/Financial"
import FreeTrial from "./sub-sections/FreeTrial"
import MethodsAnalytics from "./sub-sections/MethodsAnalytics"
import OtherServices from "./sub-sections/OtherServices"
import PrincipalInvestigator from "./sub-sections/PrincipalInvestigator"
import ProjectDetails from "./sub-sections/ProjectDetails"
import ProjectInfo from "./sub-sections/ProjectInfo"
import Redcap from "./sub-sections/Redcap"
import Requester from "./sub-sections/Requester"
import ResearchPurpose from "./sub-sections/ResearchPurpose"

const IntakeForm = () => {
	const [activeStep, setActiveStep] = createSignal(0)

	return (
		<article class="flex space-x-24">
			<SolidSteps
				client:idle
				activeStep={activeStep()}
				steps={[
					"Service Type",
					"New REDCap Account",
					"Custom Development",
					"Financial Info",
					"Free Trial",
					"M&A",
					"Other Services",
					"Principal Investigator",
					"Project Details",
					"Project Info",
					"REDCap",
					"Requester",
					"Research Purpose",
				]}
			/>

			<form class="mx-auto w-full space-y-6 py-6">
				<div class="space-y-12">
					<section class="flex flex-col space-y-4">
						<p>What type of support are you looking for from CHI?</p>
						<Checkbox
							name="service_type[]"
							value="user"
							label="New REDCap user account"
						/>
						<Checkbox
							name="service_type[]"
							value="proj"
							label="New service, project, or support request"
						/>
						<Checkbox
							name="service_type[]"
							value="trial"
							label="Free trial / practice project"
						/>
						<Checkbox
							name="service_type[]"
							value="oth"
							label="Other / learn more about CHI services"
						/>
					</section>

					<AccountCreation />
					<CustomDevelopment />
					<Financial />
					<FreeTrial />
					<MethodsAnalytics />
					<OtherServices />
					<PrincipalInvestigator />
					<ProjectDetails />
					<ProjectInfo />
					<Redcap />
					<Requester />
					<ResearchPurpose />
				</div>

				<div>
					<label
						for="service_comments"
						class="block text-sm font-medium text-gray-700"
					>
						Any additional notes or comments?
					</label>
					<textarea
						name="service_comments"
						id="service_comments"
						rows="3"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
					></textarea>
				</div>

				<div class="pt-6">
					<button
						type="submit"
						class="bg-brand-primary-700 hover:bg-brand-primary-800 focus:ring-brand-primary-500 w-full rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-offset-2"
					>
						Submit Request
					</button>

					<button
						type="button"
						onClick={() => setActiveStep(activeStep() + 1)}
						class="mt-12 cursor-pointer"
					>
						Next
					</button>
				</div>
			</form>
		</article>
	)
}

export default IntakeForm

/* <script>
  // JavaScript to handle form logic and conditional field display
  document.addEventListener('DOMContentLoaded', function () {
    // Handle service type checkboxes
    const serviceTypeCheckboxes = document.querySelectorAll(
      'input[name="service_type[]"]'
    )
    const userSection = document.getElementById('user_section')
    const projectSection = document.getElementById('project_section')
    const trialSection = document.getElementById('trial_section')
    const otherSection = document.getElementById('other_section')

    serviceTypeCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const checkedValues = Array.from(serviceTypeCheckboxes)
          .filter((cb) => cb.checked)
          .map((cb) => cb.value)

        userSection.style.display = checkedValues.includes('user') ? 'block' : 'none'
        projectSection.style.display = checkedValues.includes('proj') ? 'block' : 'none'
        trialSection.style.display = checkedValues.includes('trial') ? 'block' : 'none'
        otherSection.style.display = checkedValues.includes('oth') ? 'block' : 'none'
      })
    })

    // Handle institutional affiliation logic
    const institutionSelect = document.getElementById('requester_institution')
    const ucSection = document.getElementById('requester_institution_uc_section')
    const ucFacultySection = document.getElementById(
      'requester_institution_uc_faculty_section'
    )
    const othSection = document.getElementById('requester_institution_oth_section')
    const uniSection = document.getElementById('requester_institution_uni_section')
    const otherInstSection = document.getElementById(
      'requester_institution_other_section'
    )

    institutionSelect.addEventListener('change', function () {
      ucSection.style.display = this.value === 'uc' ? 'block' : 'none'
      othSection.style.display = this.value === 'oth' ? 'block' : 'none'
    })

    const ucSelect = document.getElementById('requester_institution_uc')
    ucSelect.addEventListener('change', function () {
      ucFacultySection.style.display = this.value === 'med' ? 'block' : 'none'
    })

    const othSelect = document.getElementById('requester_institution_oth')
    othSelect.addEventListener('change', function () {
      uniSection.style.display = this.value === 'uni' ? 'block' : 'none'
      otherInstSection.style.display = this.value === 'oth' ? 'block' : 'none'
    })

    // Handle project type logic
    const projTypeCheckboxes = document.querySelectorAll('input[name="proj_type[]"]')
    const redcapSection = document.getElementById('redcap_section')
    const methodsAnalyticsSection = document.getElementById('methods_analytics_section')
    const customSection = document.getElementById('custom_section')
    const financialSection = document.getElementById('financial_section')

    projTypeCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const checkedValues = Array.from(projTypeCheckboxes)
          .filter((cb) => cb.checked)
          .map((cb) => cb.value)

        redcapSection.style.display = checkedValues.includes('rc') ? 'block' : 'none'
        methodsAnalyticsSection.style.display = checkedValues.includes('ma')
          ? 'block'
          : 'none'
        customSection.style.display = checkedValues.includes('custom') ? 'block' : 'none'
        financialSection.style.display = checkedValues.length > 0 ? 'block' : 'none'
      })
    })

    // Handle research purpose logic
    const projPurposeRadios = document.querySelectorAll('input[name="proj_purpose"]')
    const researchPurposeSection = document.getElementById('research_purpose_section')

    projPurposeRadios.forEach((radio) => {
      radio.addEventListener('change', function () {
        researchPurposeSection.style.display =
          this.value === 'research' ? 'block' : 'none'
      })
    })

    const researchTypeRadios = document.querySelectorAll('input[name="proj_purpose_res"]')
    const researchOtherSection = document.getElementById('research_other_section')

    researchTypeRadios.forEach((radio) => {
      radio.addEventListener('change', function () {
        researchOtherSection.style.display = this.value === 'oth' ? 'block' : 'none'
      })
    })

    // Handle PI information logic
    const piCheckbox = document.getElementById('proj_requester_is_pi')
    const piFields = document.getElementById('pi_fields')

    if (piCheckbox) {
      piCheckbox.addEventListener('change', function () {
        const piInputs = piFields.querySelectorAll('input')
        piInputs.forEach((input) => {
          input.style.display = this.checked ? 'none' : 'block'
          input.required = !this.checked
        })
      })
    }

    // Handle other conditional sections
    const conditionalSections = [
      { trigger: 'proj_have_protocol', section: 'protocol_upload_section' },
      { trigger: 'proj_have_ethics', section: 'ethics_details_section' },
      { trigger: 'proj_have_budget', section: 'budget_section' },
      {
        trigger: 'rc_have_international_sites',
        section: 'international_sites_section',
      },
      { trigger: 'rc_have_randomization', section: 'randomization_section' },
      { trigger: 'rc_have_xml', section: 'xml_upload_section' },
      { trigger: 'custom_need_rc', section: 'custom_integration_section' },
      {
        trigger: 'fin_requester_is_contact',
        section: 'billing_contact_fields',
        reverse: true,
      },
    ]

    conditionalSections.forEach(({ trigger, section, reverse = false }) => {
      const triggerElement = document.querySelector(`[name="${trigger}"]`)
      const sectionElement = document.getElementById(section)

      if (triggerElement && sectionElement) {
        triggerElement.addEventListener('change', function () {
          const show = reverse ? !this.checked : this.checked
          sectionElement.style.display = show ? 'block' : 'none'
        })
      }
    })

    // Handle payment method logic
    const paymentRadios = document.querySelectorAll('input[name="fin_method"]')
    const externalPaymentSection = document.getElementById('external_payment_section')

    paymentRadios.forEach((radio) => {
      radio.addEventListener('change', function () {
        externalPaymentSection.style.display = this.value === 'ex' ? 'block' : 'none'
      })
    })

    // Handle trial type logic
    const trialTypeCheckboxes = document.querySelectorAll('input[name="trial_type[]"]')
    const trialRedcapSection = document.getElementById('trial_redcap_section')

    trialTypeCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const checkedValues = Array.from(trialTypeCheckboxes)
          .filter((cb) => cb.checked)
          .map((cb) => cb.value)
        trialRedcapSection.style.display = checkedValues.includes('rc') ? 'block' : 'none'
      })
    })

    // Handle methods & analytics conditional logic
    const maHaveDataRadios = document.querySelectorAll(
      'input[name="ma_have_existing_data"]'
    )
    const existingDataSection = document.getElementById('existing_data_section')
    const datasetDescSection = document.getElementById('dataset_description_section')

    maHaveDataRadios.forEach((radio) => {
      radio.addEventListener('change', function () {
        existingDataSection.style.display = this.value === '1' ? 'block' : 'none'
        datasetDescSection.style.display =
          this.value === '0' || this.value === '99' ? 'block' : 'none'
      })
    })

    const maExistingDataCheckboxes = document.querySelectorAll(
      'input[name="ma_existing_data[]"]'
    )
    const redcapPidSection = document.getElementById('redcap_pid_section')

    maExistingDataCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const checkedValues = Array.from(maExistingDataCheckboxes)
          .filter((cb) => cb.checked)
          .map((cb) => cb.value)
        redcapPidSection.style.display = checkedValues.includes('rc') ? 'block' : 'none'
      })
    })

    const analyticsOtherCheckbox = document.querySelector(
      'input[name="ma_analytics[]"][value="oth"]'
    )
    const analyticsOtherSection = document.getElementById('analytics_other_section')

    if (analyticsOtherCheckbox) {
      analyticsOtherCheckbox.addEventListener('change', function () {
        analyticsOtherSection.style.display = this.checked ? 'block' : 'none'
      })
    }

    // Set current date for hidden record_date field
    const recordDateField = document.getElementById('record_date')
    if (recordDateField) {
      recordDateField.value = new Date().toISOString().split('T')[0]
    }
  })
</script> */
