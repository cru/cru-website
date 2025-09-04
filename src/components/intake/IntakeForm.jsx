import '@awesome.me/webawesome/dist/components/button/button.js'
import { createEffect, createSignal, For } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import SolidSteps from '../ui/solid/SolidSteps'
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

const IntakeForm = () => {
  const [activeStep, setActiveStep] = createSignal(0)
  const [branchTriggers, setBranchTriggers] = createSignal({})
  const branchFields = new Set(
    STEPS.flatMap((s) => s.branchFrom)
      .filter((b) => b)
      .map((b) => b?.field),
  )
  let formRef

  const availableSteps = () =>
    STEPS.filter(
      (s) =>
        !s.branchFrom ||
        s.branchFrom.every(
          (p) =>
            branchTriggers()[p.field] &&
            branchTriggers()[p.field].includes(p.value),
        ),
    )

  createEffect(() => {
    if (!formRef) return

    const form = formRef
    form.addEventListener('input', handleFormEvent)
  })

  const handleFormEvent = (e) => {
    const formData = new FormData(formRef)
    const fieldName = e.target.name
    if (branchFields.has(fieldName)) {
      const fieldValues = formData.getAll(fieldName)
      setBranchTriggers({ ...branchTriggers(), [fieldName]: fieldValues })
    }
  }

  return (
    <article class="flex space-x-24">
      <SolidSteps
        client:idle
        activeStep={activeStep()}
        steps={availableSteps().map((s) => s.label)}
      />

      <form id="intake-form" ref={formRef} class="mx-auto w-full py-6">
        <div class="flex justify-between pb-16">
          <wa-button
            size="small"
            on:click={() => setActiveStep(activeStep() - 1)}
          >
            Previous
          </wa-button>
          <wa-button
            size="small"
            on:click={() => setActiveStep(activeStep() + 1)}
          >
            Next
          </wa-button>
        </div>

        <For each={availableSteps()}>
          {(step, index) => (
            <Dynamic
              component={step.Component}
              hidden={activeStep() !== index()}
            />
          )}
        </For>
      </form>
    </article>
  )
}

const STEPS = [
  {
    label: 'Service Type',
    Component: ServiceType,
  },
  {
    label: 'Requester Information',
    Component: Requester,
  },
  {
    label: 'New Project',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: NewProject,
  },
  {
    label: 'Principal Investigator',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: PrincipalInvestigator,
  },
  {
    label: 'Research Purpose',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: ResearchPurpose,
  },
  {
    label: 'Project Details',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: ProjectDetails,
  },
  {
    label: 'REDCap Build',
    branchFrom: [{ field: 'proj_type[]', value: 'rc' }],
    Component: Redcap,
  },
  {
    label: 'Custom Development',
    branchFrom: [{ field: 'proj_type[]', value: 'custom' }],
    Component: CustomDevelopment,
  },
  {
    label: 'Methods & Analytics',
    branchFrom: [{ field: 'proj_type[]', value: 'ma' }],
    Component: MethodsAnalytics,
  },
  {
    label: 'New REDCap Account',
    branchFrom: [{ field: 'service_type', value: 'user' }],
    Component: AccountCreation,
  },
  {
    label: 'Free Trial',
    branchFrom: [{ field: 'service_type', value: 'trial' }],
    Component: FreeTrial,
  },
  {
    label: 'Other Services',
    branchFrom: [{ field: 'service_type', value: 'oth' }],
    Component: OtherServices,
  },
  {
    label: 'Financial Info',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: Financial,
  },
  {
    label: 'Finish up',
    Component: Finish,
  },
]

export default IntakeForm
