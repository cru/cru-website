import '@awesome.me/webawesome/dist/components/button/button.js'
import '@lottiefiles/dotlottie-wc'
import { actions } from 'astro:actions'
import { createEffect, createSignal, For, Switch, Match } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Dynamic } from 'solid-js/web'
import AccountCreation from './sub-sections/AccountCreation'
import CustomDevelopment from './sub-sections/CustomDevelopment'
import Financial from './sub-sections/Financial'
import Finish from './sub-sections/Finish'
import FreeTrial from './sub-sections/FreeTrial'
import MethodsAnalytics from './sub-sections/MethodsAnalytics'
import NewProject from './sub-sections/NewProject'
import OtherServices from './sub-sections/OtherServices'
import PrincipalInvestigator from './sub-sections/PrincipalInvestigator'
import ProjectDetails from './sub-sections/ProjectDetails'
import Redcap from './sub-sections/Redcap'
import Requester from './sub-sections/Requester'
import ResearchPurpose from './sub-sections/ResearchPurpose'
import ServiceType from './sub-sections/ServiceType'
import SolidSteps from './ui/SolidSteps'

enum formStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error',
}

const IntakeForm = () => {
  const [submitState, setSubmitState] = createSignal(formStatus.IDLE)
  const [activeStep, setActiveStep] = createSignal(0)
  const [branchTriggers, setBranchTriggers] = createSignal({})
  const [steps, setSteps] = createStore([
    {
      name: 'service_type',
      label: 'How can we help?',
      form: null,
      Component: ServiceType,
    },
    {
      name: 'requester_info',
      label: 'Some info about you',
      form: null,
      Component: Requester,
    },
    {
      name: 'account_creation',
      label: 'New REDCap account',
      form: null,
      branchFrom: [{ field: 'service_type_user___user', value: '1' }],
      Component: AccountCreation,
    },
    {
      name: 'free_trial',
      label: 'Free trial',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'trial' }],
      Component: FreeTrial,
    },
    {
      name: 'new_project',
      label: 'New service or project',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'proj' }],
      Component: NewProject,
    },
    {
      name: 'principal_investigator',
      label: 'Principal investigator',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'proj' }],
      Component: PrincipalInvestigator,
    },
    {
      name: 'research_purpose',
      label: 'Research purpose',
      form: null,
      branchFrom: [{ field: 'proj_purpose', value: 'research' }],
      Component: ResearchPurpose,
    },
    {
      name: 'project_details',
      label: 'Project details',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'proj' }],
      Component: ProjectDetails,
    },
    {
      name: 'redcap',
      label: 'REDCap build',
      form: null,
      branchFrom: [{ field: 'proj_type___rc', value: '1' }],
      Component: Redcap,
    },
    {
      name: 'custom_development',
      label: 'Custom development',
      form: null,
      branchFrom: [{ field: 'proj_type___custom', value: '1' }],
      Component: CustomDevelopment,
    },
    {
      name: 'methods_analytics',
      label: 'Methods & Analytics',
      form: null,
      branchFrom: [{ field: 'proj_type___ma', value: '1' }],
      Component: MethodsAnalytics,
    },
    {
      name: 'other_services',
      label: 'Other services',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'oth' }],
      Component: OtherServices,
    },
    {
      name: 'financial_info',
      label: 'Financial info',
      form: null,
      branchFrom: [{ field: 'service_type', value: 'proj' }],
      Component: Financial,
    },
    {
      name: 'finish',
      label: 'Finish up',
      form: null,
      Component: Finish,
    },
  ])
  const branchFields = new Set(
    steps
      .flatMap((s) => s.branchFrom)
      .filter((b) => b)
      .map((b) => b?.field)
  )

  const availableSteps = () =>
    steps.filter(
      (s) =>
        !s.branchFrom ||
        s.branchFrom.every(
          (p) => branchTriggers()[p.field] && branchTriggers()[p.field].includes(p.value)
        )
    )

  createEffect(() => {
    availableSteps().forEach((step) => {
      if (!step.form) return
      step.form.addEventListener('input', handleFormEvent)
    })
  })

  const handleFormEvent = (e: Event) => {
    const fieldName = (e.target as HTMLInputElement).name
    let fieldValue = null
    for (const step of availableSteps()) {
      if (!step.form) continue
      if (branchFields.has(fieldName)) {
        const formData = new FormData(step.form)
        if (formData.has(fieldName)) {
          fieldValue = formData.get(fieldName)
          break
        }
      }
    }

    setBranchTriggers({ ...branchTriggers(), [fieldName]: fieldValue })
  }

  const handleNext = () => {
    const form = availableSteps()[activeStep()].form
    if (form && form.reportValidity()) setActiveStep(activeStep() + 1)
  }

  const registerForm = (name: string, form: HTMLFormElement) => {
    if (!name || !form) return
    setSteps((step) => step.name === name, 'form', form)
  }

  const handleSubmit = async () => {
    // Combine all form data into a single FormData
    const formData = new FormData()
    availableSteps().forEach((step) => {
      if (!step.form) return

      const stepForm = new FormData(step.form)
      for (const [key, value] of stepForm.entries()) {
        formData.append(key, value)
      }
    })

    setSubmitState(formStatus.SUBMITTING)
    const { error } = await actions.submitIntakeForm(formData)
    setSubmitState(error ? formStatus.ERROR : formStatus.SUCCESS)
  }

  return (
    <article class="flex space-x-24">
      <SolidSteps
        activeStep={activeStep()}
        steps={availableSteps().map((s) => s.label)}
      />

      <div class="mx-auto w-full space-y-6">
        <Switch>
          <Match when={submitState() === formStatus.SUCCESS}>
            <div class="animate-fade-in-up space-y-6 py-12 text-center">
              <h4 class="animate-delay-100 text-3xl font-bold text-emerald-600">
                Success!
              </h4>
              <p class="animate-delay-200 mx-auto max-w-md text-lg text-gray-600">
                Your request has been sent. We will carefully review your request and will
                be in touch soon.
              </p>
              <div class="animate-delay-300">
                <dotlottie-wc
                  src="assets/lottie/intakeSubmit.lottie"
                  autoplay="true"
                  loop="true"
                  class="mx-auto size-56"
                ></dotlottie-wc>
              </div>
            </div>
          </Match>
          <Match when={submitState() === formStatus.ERROR}>
            <div class="animate-fade-in-up space-y-6 py-12 text-center">
              <h4 class="animate-delay-100 text-3xl font-bold">Error</h4>
              <p class="animate-delay-200 mx-auto max-w-md text-lg text-gray-600">
                There was an error submitting your request. Please try again, and if the
                problem persists, contact us directly at{' '}
                <a
                  href="mailto:cru@ucalgary.ca"
                  class="text-brand-primary-500 cursor-pointer"
                >
                  cru@ucalgary.ca
                </a>
              </p>
            </div>
          </Match>
          <Match when={submitState() === formStatus.IDLE}>
            <For each={availableSteps()}>
              {(step, index) => (
                <Dynamic
                  component={step.Component}
                  form={step.form}
                  hidden={activeStep() !== index()}
                  setFormRef={(form) => registerForm(step.name, form)}
                  onSubmit={handleSubmit}
                />
              )}
            </For>
            <div class="flex justify-between">
              <wa-button
                size="small"
                appearance="filled"
                disabled={activeStep() === 0}
                on:click={() => setActiveStep(activeStep() - 1)}
              >
                Previous
              </wa-button>
              <wa-button
                size="small"
                appearance="accent"
                disabled={activeStep() === availableSteps().length - 1}
                on:click={handleNext}
              >
                Next
              </wa-button>
            </div>
          </Match>
        </Switch>
      </div>
    </article>
  )
}

export default IntakeForm
