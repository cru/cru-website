import { z } from 'astro:schema'

const newProjectSchema = z.object({
  proj_type___rc: z.string().optional(),
  proj_type___custom: z.string().optional(),
  proj_type___ma: z.string().optional(),
  proj_title: z.string().optional(),
  proj_purpose: z.enum(['research', 'qi', 'op']).optional(),
})

const requesterSchema = z.object({
  requester_fname: z.string().optional(),
  requester_lname: z.string().optional(),
  requester_email: z.string().email().optional(),
  requester_institution: z.enum(['uc', 'oth']).optional(),
  requester_institution_uc: z.enum(['med', 'nur', 'kin', 'eng']).optional(),
  requester_institution_uc_faculty: z
    .enum([
      'appm',
      'bmb',
      'cardiac',
      'cba',
      'cns',
      'chs',
      'ccm',
      'emerg',
      'fam',
      'gen',
      'med',
      'microinfect',
      'obgyn',
      'onc',
      'ped',
      'lab',
      'phys',
      'psych',
      'rad',
      'surg',
    ])
    .optional(),
  requester_institution_oth: z
    .enum(['uni', 'pca', 'aca', 'ra', 'ala', 'ahs', 'oth'])
    .optional(),
  requester_institution_uni: z.string().optional(),
  requester_institution_other: z.string().optional(),
  requester_referred_from: z.string().optional(),
})

const principalInvestigatorSchema = z.object({
  proj_requester_is_pi: z.string().optional(),
  proj_pi_fname: z.string().optional(),
  proj_pi_lname: z.string().optional(),
  proj_pi_email: z.string().email().optional(),
})

const projectDetailsSchema = z.object({
  proj_is_lshi___1: z.string().optional(),
  proj_have_protocol___1: z.string().optional(),
  proj_protocol_upload: z.any().optional(),
  proj_have_ethics___1: z.string().optional(),
  proj_ethics_id: z.string().optional(),
  proj_ethics_upload: z.any().optional(),
  proj_need_ethics___1: z.string().optional(),
  proj_have_budget___1: z.string().optional(),
  proj_budget_amt: z.string().optional(),
  proj_date_start: z.string().optional(),
  proj_date_end: z.string().optional(),
})

const redcapSchema = z.object({
  rc_build: z.enum(['self', 'chi', 'unsure']).optional(),
  rc_participant_num: z.string().optional(),
  rc_site_num: z.string().optional(),
  rc_have_international_sites___1: z.string().optional(),
  rc_international_sites___usa: z.string().optional(),
  rc_international_sites___europe: z.string().optional(),
  rc_international_sites___oth: z.string().optional(),
  rc_have_surveys___1: z.string().optional(),
  rc_have_randomization___1: z.string().optional(),
  rc_randomization_summary: z.string().optional(),
  rc_have_xml___1: z.string().optional(),
  rc_xml_upload: z.any().optional(),
  rc_price_tier: z.enum(['basic', 'plus', 'premium', 'cctt']).optional(),
})
const customDevelopmentSchema = z.object({
  custom_type___dashboard: z.string().optional(),
  custom_type___web: z.string().optional(),
  custom_type___edc: z.string().optional(),
  custom_type___mgmt: z.string().optional(),
  custom_type___infra: z.string().optional(),
  custom_type___advice: z.string().optional(),
  custom_type___mobile: z.string().optional(),
  custom_type___unsure: z.string().optional(),
  custom_needs: z.string().optional(),
  custom_need_rc: z.string().optional(),
  custom_rc_summary: z.string().optional(),
})
const methodsAnalyticsSchema = z.object({
  ma_have_existing_data: z.enum(['1', '0', '99']).optional(),
  ma_existing_data___rc: z.string().optional(),
  ma_existing_data___admin: z.string().optional(),
  ma_existing_data___oth: z.string().optional(),
  ma_existing_data_pid: z.string().optional(),
  ma_data_desc: z.string().optional(),
  ma_methods___power: z.string().optional(),
  ma_methods___review: z.string().optional(),
  ma_methods___dev: z.string().optional(),
  ma_methods___unsure: z.string().optional(),
  ma_analytics___cleaning: z.string().optional(),
  ma_analytics___power: z.string().optional(),
  ma_analytics___stats: z.string().optional(),
  ma_analytics___ml: z.string().optional(),
  ma_analytics___vis: z.string().optional(),
  ma_analytics___oth: z.string().optional(),
  ma_analytics___unsure: z.string().optional(),
  ma_analytics___none: z.string().optional(),
  ma_analytics_oth: z.string().optional(),
  ma_research_question: z.string().optional(),
})
const financialSchema = z.object({
  fin_requester_is_contact: z.string().optional(),
  fin_contact_fname: z.string().optional(),
  fin_contact_lname: z.string().optional(),
  fin_contact_email: z.string().email().optional(),
  fin_method: z.enum(['uofc', 'ex', 'cc']).optional(),
  fin_method_ex_institution: z.string().optional(),
  fin_method_ex_address: z.string().optional(),
  fin_method_ex_name: z.string().optional(),
  fin_method_ex_email: z.string().email().optional(),
  terms_agree___1: z.string().optional(),
  terms_sig: z.any().optional(),
})
const accountCreationSchema = z.object({
  user_account_num: z.string().optional(),
  user_1_is_requester___1: z.string().optional(),
  user_1_fname: z.string().optional(),
  user_1_lname: z.string().optional(),
  user_1_email: z.string().email().optional(),
  user_notify___1: z.string().optional(),
})
const serviceTypeSchema = z.object({
  service_type_user___user: z.string().optional(),
  service_type: z.enum(['trial', 'proj', 'oth']).optional(),
})

const researchPurposeSchema = z.object({
  proj_purpose_res: z.enum(['basic', 'ct', 'registry', 'oth']).optional(),
})

const otherServicesSchema = z.object({
  service_oth_questions: z.string().optional(),
})

const freeTrialSchema = z.object({
  trial_type___rc: z.string().optional(),
  trial_type___dx: z.string().optional(),
  trial_proj_title: z.string().optional(),
  trial_rc_users: z.string().optional(),
  trial_name: z.string().optional(),
  trial_email: z.string().email().optional(),
  trial_purpose: z.string().optional(),
})

const finishSchema = z.object({
  service_comments: z.string().optional(),
})

export const intakeSchema = z.object({
  ...serviceTypeSchema.shape,
  ...newProjectSchema.shape,
  ...requesterSchema.shape,
  ...principalInvestigatorSchema.shape,
  ...researchPurposeSchema.shape,
  ...projectDetailsSchema.shape,
  ...redcapSchema.shape,
  ...customDevelopmentSchema.shape,
  ...methodsAnalyticsSchema.shape,
  ...financialSchema.shape,
  ...accountCreationSchema.shape,
  ...otherServicesSchema.shape,
  ...freeTrialSchema.shape,
  ...finishSchema.shape,
})
