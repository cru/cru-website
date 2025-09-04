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
            branchTriggers()[p.field] && branchTriggers()[p.field] === p.value,
        ),
    ).map((s) => s.label)

  createEffect(() => {
    if (!formRef) return

    const form = formRef
    form.addEventListener('input', handleFormEvent)
  })

  const handleFormEvent = (e) => {
    const formData = new FormData(formRef)
    const fieldName = e.target.name
    if (branchFields.has(fieldName)) {
      const fieldValue = formData.get(fieldName)
      setBranchTriggers({ ...branchTriggers(), [fieldName]: fieldValue })
    }
  }

  return (
    <article class="flex space-x-24">
      <SolidSteps
        client:idle
        activeStep={activeStep()}
        steps={availableSteps()}
      />

      <form id="intake-form" ref={formRef} class="mx-auto w-full py-6">
        <div class="flex justify-between pb-16">
          <wa-button size="small" on:click={() => setActiveStep(activeStep() - 1)}>
            Previous
          </wa-button>
          <wa-button size="small" on:click={() => setActiveStep(activeStep() + 1)}>
            Next
          </wa-button>
        </div>

        <For each={Object.values(STEPS)}>
          {(step, index) => (
            <Dynamic component={step.Component} hidden={activeStep() !== index()} />
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
    label: 'New Project',
    branchFrom: [{ field: 'service_type', value: 'proj' }],
    Component: NewProject,
  },
  {
    label: 'Requester Information',
    Component: Requester,
  },
  {
    label: 'Principal Investigator',
    Component: PrincipalInvestigator,
  },
  {
    label: 'Research Purpose',
    Component: ResearchPurpose,
  },
  {
    label: 'Project Details',
    Component: ProjectDetails,
  },
  {
    label: 'REDCap Build',
    Component: Redcap,
  },
  {
    label: 'Methods & Analytics',
    Component: MethodsAnalytics,
  },
  {
    label: 'Custom Development',
    Component: CustomDevelopment,
  },
  {
    label: 'Financial Info',
    Component: Financial,
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
    label: 'Finish up',
    Component: Finish,
  },
]

const zSTEPS = {
  SERVICE_TYPE: {
    label: 'Service Type',
    Component: ServiceType,
  },
  NEW_PROJECT: {
    label: 'New Project',
    prerequisites: [{ field: 'service_type', value: 'proj' }],
    Component: NewProject,
  },
  REQUESTER: {
    label: 'Requester Information',
    Component: Requester,
  },
  PRINCIPAL_INVESTIGATOR: {
    label: 'Principal Investigator',
    Component: PrincipalInvestigator,
  },
  RESEARCH_PURPOSE: {
    label: 'Research Purpose',
    Component: ResearchPurpose,
  },
  PROJECT_DETAILS: {
    label: 'Project Details',
    Component: ProjectDetails,
  },
  REDCAP: {
    label: 'REDCap Build',
    Component: Redcap,
  },
  METHODS_ANALYTICS: {
    label: 'Methods & Analytics',
    Component: MethodsAnalytics,
  },
  CUSTOM_DEVELOPMENT: {
    label: 'Custom Development',
    Component: CustomDevelopment,
  },
  FINANCIAL: {
    label: 'Financial Info',
    Component: Financial,
  },
  ACCOUNT_CREATION: {
    label: 'New REDCap Account',
    prerequisites: [{ field: 'service_type', value: 'user' }],
    Component: AccountCreation,
  },
  FREE_TRIAL: {
    label: 'Free Trial',
    prerequisites: [{ field: 'service_type', value: 'trial' }],
    Component: FreeTrial,
  },
  OTHER_SERVICES: {
    label: 'Other Services',
    prerequisites: [{ field: 'service_type', value: 'oth' }],
    Component: OtherServices,
  },
  FINISH: {
    label: 'Finish up',
    Component: Finish,
  },
}

export default IntakeForm
