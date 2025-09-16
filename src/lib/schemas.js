import { z } from 'astro:schema'

export const newProjectSchema = z.object({
  proj_type___rc: z.string().optional(),
  proj_type___custom: z.string().optional(),
  proj_type___ma: z.string().optional(),
  proj_title: z.string().optional(),
  proj_purpose: z.enum(['research', 'qi', 'op']).optional(),
})

export const requesterSchema = z.object({
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

export const principalInvestigatorSchema = z.object({
  proj_requester_is_pi: z.string().optional(),
  proj_pi_fname: z.string().optional(),
  proj_pi_lname: z.string().optional(),
  proj_pi_email: z.string().email().optional().or(z.literal('')),
})

export const projectDetailsSchema = z.object({
  proj_is_lshi: z.string().optional(),
  proj_have_protocol: z.string().optional(),
  proj_protocol_upload: z.any().optional(),
  proj_have_ethics: z.string().optional(),
  proj_ethics_id: z.string().optional(),
  proj_ethics_upload: z.any().optional(),
  proj_need_ethics: z.string().optional(),
  proj_have_budget: z.string().optional(),
  proj_budget_amt: z.string().optional(),
  proj_date_start: z.string().optional(),
  proj_date_end: z.string().optional(),
})

export const redcapSchema = z.object({
  rc_build: z.enum(['self', 'chi']).optional(),
  rc_build_unsure: z.string().optional(),
  rc_participant_num: z.string().optional(),
  rc_site_num: z.string().optional(),
  rc_have_international_sites: z.string().optional(),
  rc_international_sites___usa: z.string().optional(),
  rc_international_sites___europe: z.string().optional(),
  rc_international_sites___oth: z.string().optional(),
  rc_have_surveys: z.string().optional(),
  rc_have_randomization: z.string().optional(),
  rc_randomization_summary: z.string().optional(),
  rc_have_xml: z.string().optional(),
  rc_xml_upload: z.any().optional(),
  rc_price_tier: z.enum(['basic', 'plus', 'premium']).optional(),
})
export const customDevelopmentSchema = z.object({
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
export const methodsAnalyticsSchema = z.object({
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
export const financialSchema = z.object({
  fin_requester_is_contact: z.string().optional(),
  fin_contact_fname: z.string().optional(),
  fin_contact_lname: z.string().optional(),
  fin_contact_email: z.string().email().optional().or(z.literal('')),
  fin_method: z.enum(['uofc', 'ex', 'cc']).optional(),
  fin_method_ex_institution: z.string().optional(),
  fin_method_ex_address: z.string().optional(),
  fin_method_ex_name: z.string().optional(),
  fin_method_ex_email: z.string().email().optional().or(z.literal('')),
  terms_agree: z.string().optional(),
  terms_sig: z.any().optional(),
})
export const accountCreationSchema = z.object({
  user_account_num: z.string().optional(),
  user_1_is_requester: z.string().optional(),
  user_1_fname: z.string().optional(),
  user_1_lname: z.string().optional(),
  user_1_email: z.string().email().optional().or(z.literal('')),
  user_2_fname: z.string().optional(),
  user_2_lname: z.string().optional(),
  user_2_email: z.string().email().optional().or(z.literal('')),
  user_3_fname: z.string().optional(),
  user_3_lname: z.string().optional(),
  user_3_email: z.string().email().optional().or(z.literal('')),
  user_4_fname: z.string().optional(),
  user_4_lname: z.string().optional(),
  user_4_email: z.string().email().optional().or(z.literal('')),
  user_5_fname: z.string().optional(),
  user_5_lname: z.string().optional(),
  user_5_email: z.string().email().optional().or(z.literal('')),
  user_6_fname: z.string().optional(),
  user_6_lname: z.string().optional(),
  user_6_email: z.string().email().optional().or(z.literal('')),
  user_7_fname: z.string().optional(),
  user_7_lname: z.string().optional(),
  user_7_email: z.string().email().optional().or(z.literal('')),
  user_8_fname: z.string().optional(),
  user_8_lname: z.string().optional(),
  user_8_email: z.string().email().optional().or(z.literal('')),
  user_9_fname: z.string().optional(),
  user_9_lname: z.string().optional(),
  user_9_email: z.string().email().optional().or(z.literal('')),
  user_10_fname: z.string().optional(),
  user_10_lname: z.string().optional(),
  user_10_email: z.string().email().optional().or(z.literal('')),
  user_11_fname: z.string().optional(),
  user_11_lname: z.string().optional(),
  user_11_email: z.string().email().optional().or(z.literal('')),
  user_12_fname: z.string().optional(),
  user_12_lname: z.string().optional(),
  user_12_email: z.string().email().optional().or(z.literal('')),
  user_13_fname: z.string().optional(),
  user_13_lname: z.string().optional(),
  user_13_email: z.string().email().optional().or(z.literal('')),
  user_14_fname: z.string().optional(),
  user_14_lname: z.string().optional(),
  user_14_email: z.string().email().optional().or(z.literal('')),
  user_15_fname: z.string().optional(),
  user_15_lname: z.string().optional(),
  user_15_email: z.string().email().optional().or(z.literal('')),
  user_notify: z.string().optional(),
})
export const serviceTypeSchema = z.object({
  service_type___user: z.string().optional(),
  service_type___trial: z.string().optional(),
  service_type___proj: z.string().optional(),
  service_type___oth: z.string().optional(),
})

export const researchPurposeSchema = z.object({
  proj_purpose_res: z.enum(['basic', 'ct', 'registry', 'oth']).optional(),
})

export const otherServicesSchema = z.object({
  other_service_needs: z.string().optional(),
})

export const freeTrialSchema = z.object({
  trial_name: z.string().optional(),
  trial_email: z.string().email().optional(),
  trial_purpose: z.string().optional(),
})

export const intakeSchema = z.intersection(
  serviceTypeSchema,
  requesterSchema,
  newProjectSchema,
  principalInvestigatorSchema,
  researchPurposeSchema,
  projectDetailsSchema,
  redcapSchema,
  customDevelopmentSchema,
  methodsAnalyticsSchema,
  accountCreationSchema,
  freeTrialSchema,
  otherServicesSchema,
  financialSchema
)
