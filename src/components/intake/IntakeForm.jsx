import '@awesome.me/webawesome/dist/components/button/button.js'
import { createSignal, For } from 'solid-js'
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

  return (
    <article class="flex space-x-24">
      <SolidSteps
        client:idle
        activeStep={activeStep()}
        steps={Object.values(STEPS).map((s) => s.label)}
      />

      <form class="mx-auto w-full py-6">
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

        <For each={Object.values(STEPS)}>
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

// const STEPS = [
//   {
//     label: 'Service Type',
//     Component: ServiceType,
//   },
//   {
//     label: 'New Project',
//     Component: NewProject,
//   },
//   {
//     label: 'Requester Information',
//     Component: Requester,
//   },
//   {
//     label: 'Principal Investigator',
//     Component: PrincipalInvestigator,
//   },
//   {
//     label: 'Research Purpose',
//     Component: ResearchPurpose,
//   },
//   {
//     label: 'Project Details',
//     Component: ProjectDetails,
//   },
//   {
//     label: 'REDCap Build',
//     Component: Redcap,
//   },
//   {
//     label: 'Methods & Analytics',
//     Component: MethodsAnalytics,
//   },
//   {
//     label: 'Custom Development',
//     Component: CustomDevelopment,
//   },
//   {
//     label: 'Financial Info',
//     Component: Financial,
//   },
//   {
//     label: 'New REDCap Account',
//     Component: AccountCreation,
//   },
//   {
//     label: 'Free Trial',
//     Component: FreeTrial,
//   },
//   {
//     label: 'Other Services',
//     Component: OtherServices,
//   },
//   {
//     label: 'Finish up',
//     Component: Finish,
//   },
// ]

const STEPS = {
  SERVICE_TYPE: {
    label: 'Service Type',
    Component: ServiceType,
  },
  NEW_PROJECT: {
    label: 'New Project',
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
    Component: AccountCreation,
  },
  FREE_TRIAL: {
    label: 'Free Trial',
    Component: FreeTrial,
  },
  OTHER_SERVICES: {
    label: 'Other Services',
    Component: OtherServices,
  },
  FINISH: {
    label: 'Finish up',
    Component: Finish,
  },
}

export default IntakeForm
