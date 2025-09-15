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
    formRef.addEventListener('input', handleFormEvent)
  })

  const handleFormEvent = (e) => {
    const formData = new FormData(formRef)
    const fieldName = e.target.name
    if (branchFields.has(fieldName)) {
      const fieldValues = formData.getAll(fieldName)
      setBranchTriggers({ ...branchTriggers(), [fieldName]: fieldValues })
    }
  }


  const handleNext = () => {
    if (formRef.reportValidity()) {
      setActiveStep(activeStep() + 1)
    }
  }

  return (
    <article class="flex space-x-24">
      <SolidSteps
        client:idle
        activeStep={activeStep()}
        steps={availableSteps().map((s) => s.label)}
      />

      <form id="intake-form" ref={formRef} class="mx-auto w-full space-y-6">
        
        <For each={availableSteps()}>
          {(step, index) => (
            <Dynamic
              component={step.Component}
              formRef={formRef}
              hidden={activeStep() !== index()}
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
      </form>
    </article>
  )
}

const STEPS = [
  {
    label: 'How can we help?',
    Component: ServiceType,
  },
  {
    label: 'Some info about you',
    Component: Requester,
  },
  {
    label: 'New service or project',
    branchFrom: [{ field: 'service_type___proj', value: '1' }],
    Component: NewProject,
  },
  {
    label: 'Principal investigator',
    branchFrom: [{ field: 'service_type___proj', value: '1' }],
    Component: PrincipalInvestigator,
  },
  {
    label: 'Research purpose',
    branchFrom: [{ field: 'service_type___proj', value: '1' }],
    Component: ResearchPurpose,
  },
  {
    label: 'Project details',
    branchFrom: [{ field: 'service_type___proj', value: '1' }],
    Component: ProjectDetails,
  },
  {
    label: 'REDCap build',
    branchFrom: [{ field: 'proj_type___rc', value: '1' }],
    Component: Redcap,
  },
  {
    label: 'Custom development',
    branchFrom: [{ field: 'proj_type___custom', value: '1' }],
    Component: CustomDevelopment,
  },
  {
    label: 'Methods & Analytics',
    branchFrom: [{ field: 'proj_type___ma', value: '1' }],
    Component: MethodsAnalytics,
  },
  {
    label: 'New REDCap account',
    branchFrom: [{ field: 'service_type___user', value: '1' }],
    Component: AccountCreation,
  },
  {
    label: 'Free trial',
    branchFrom: [{ field: 'service_type___trial', value: '1' }],
    Component: FreeTrial,
  },
  {
    label: 'Other services',
    branchFrom: [{ field: 'service_type___oth', value: '1' }],
    Component: OtherServices,
  },
  {
    label: 'Financial info',
    branchFrom: [{ field: 'service_type___proj', value: '1' }],
    Component: Financial,
  },
  {
    label: 'Finish up',
    Component: Finish,
  },
]



export default IntakeForm
