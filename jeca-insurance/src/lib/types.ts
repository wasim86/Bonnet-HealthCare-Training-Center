// Base Quote Interface
export interface BaseQuote {
  id?: string;
  quoteType?: string;
  quoteNumber?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  currentInsuranceCompany?: string;
  continuousCoverage?: string;
  policyExpiresIn?: string;
  claimsIn3Years?: string;
  ticketsIn3Years?: string;
  coverageDesired?: string;
  whenToStart?: string;
  additionalComments?: string;
  informationSecure: boolean;
  createdDate?: string;
  updatedDate?: string;
  status?: string;
}

// Vehicle Interface
export interface Vehicle {
  id?: string;
  isPrimary: boolean;
  year: string;
  make: string;
  model: string;
  driveToWorkSchool?: string;
  isLeased?: string;
  workSchoolDistance?: string;
  collisionDeductible?: string;
  annualMileage?: string;
  comprehensiveDeductible?: string;
  moreThanTwoVehicles?: string;
}

// Driver Interface
export interface Driver {
  id?: string;
  isPrimary?: boolean;
  name: string;
  gender: string;
  dateOfBirth: Date;
  married: string;
  accidentsTickets?: string;
  status?: string;
}

// Watercraft Interface (for Boat quotes)
export interface Watercraft {
  id?: string;
  isPrimary: boolean;
  year: string;
  make: string;
  model: string;
  manufacturer?: string;
  watercraftType?: string;
  length?: string;
  boatUse?: string;
  marketValue?: string;
  numberOfEngines?: string;
  totalHorsepower?: string;
  engineType?: string;
  deductible?: string;
  hullMaterial?: string;
  trailerCoverage?: string;
  storageLocation?: string;
  structuralModifications?: string;
}

// Auto Quote Interface
export interface AutoQuote extends BaseQuote {
  vehicles: Vehicle[];
  drivers: Driver[];
}

// Boat Quote Interface
export interface BoatQuote extends BaseQuote {
  watercraft: Watercraft[];
  operators: Driver[];
}

// Motorcycle Quote Interface
export interface MotorcycleQuote extends BaseQuote {
  vehicles: Vehicle[];
  riders: Driver[];
}

// BOP Quote Interface
export interface BOPQuote extends BaseQuote {
  businessName?: string;
  businessType?: string;
  yearsInBusiness?: string;
  numberOfEmployees?: string;
  annualRevenue?: string;
  businessDescription?: string;
  buildingValue?: string;
  equipmentValue?: string;
  inventoryValue?: string;
  liabilityLimit?: string;
  propertyDeductible?: string;
  liabilityDeductible?: string;
}

// Home Quote Interface (PascalCase to match backend DTO)
export interface HomeQuote extends BaseQuote {
  // Home-specific fields (matching backend DTO)
  HomeType?: string;
  YearBuilt?: string;
  SquareFootage?: string;
  ConstructionType?: string;
  PrimaryHeating?: string;
  Foundation?: string;
  Bedrooms?: string;
  RoofType?: string;
  Bathrooms?: string;
  RoofAge?: string;
  Stories?: string;
  GarageType?: string;
  FloodPlan?: string;
  SecuritySystem?: string;
  MunicipalLocation?: string;
  FireAlarm?: string;
  DogBreeds?: string;
  ReplacementCost?: string;
  PersonalLiability?: string;
  DesiredDeductible?: string;
  CreditRating?: string;
  ReportedClaims?: string;
  ReplaceExistingPolicy?: string;
  PolicyStartDate?: string;

  // Property Features (Boolean fields)
  DeadBolts?: boolean;
  FireExtinguishers?: boolean;
  Trampoline?: boolean;
  CoveredDeckPatio?: boolean;
  SwimmingPool?: boolean;
}

// Health Quote Interface
export interface HealthQuote extends BaseQuote {
  // Health-specific fields
  gender: string;
  dateOfBirth: string; // Keep as string for ISO date format
  smoker: string;
  pregnant: string;
  dependents: string;
  annualHouseholdIncome: string;

  // Spouse information
  spouseFirstName?: string;
  spouseLastName?: string;
  spouseGender?: string;
  spouseDateOfBirth?: string;
  spouseSmoker?: string;
  spousePregnant?: string;
}

// Dental Quote Interface
export interface DentalQuote extends BaseQuote {
  coverageType?: string;
  effectiveDate?: Date;
  birthdate?: Date;
  gender?: string;
  dependents?: string;
  currentDentalInsurance?: string;
  lastDentalVisit?: string;
  dentalHistory?: string;
  preferredDentist?: string;
  coverageNeeds?: string;
  numberOfPeople?: string;
  policyStartDate?: string;
}

// Business Quote Interface
export interface BusinessQuote extends BaseQuote {
  businessName?: string;
  businessType?: string;
  yearsInBusiness?: string;
  numberOfEmployees?: string;
  annualRevenue?: string;
  businessDescription?: string;
  physicalAddress?: string;
  businessOperations?: string;
  equipmentValue?: string;
  inventoryValue?: string;
  previousClaims?: string;
  desiredCoverage?: string;
  legalEntity?: string;
  partnersOwners?: string;
  fullTimeEmployees?: string;
  partTimeEmployees?: string;
  subContractors?: string;
  oneTimeOrSeasonal?: string;
  generalLiability?: boolean;
  commercialAuto?: boolean;
  commercialProperty?: boolean;
  cyberLiability?: boolean;
  professionalLiability?: boolean;
  directorsOfficersLiability?: boolean;
  businessOwnersPackage?: boolean;
  workersCompensation?: boolean;
  commercialCrime?: boolean;
  groupHealthInsurance?: boolean;
  groupLifeInsurance?: boolean;
  groupDisabilityInsurance?: boolean;
  retirementPlans?: boolean;
  supplementalPlans?: boolean;
  keyManLifeInsurance?: boolean;
  keyManDisabilityInsurance?: boolean;
  deferredCompensation?: boolean;
  businessOwnerPolicy?: boolean;
  employmentPractices?: boolean;
  directorsOfficers?: boolean;
  keyPersonLife?: boolean;
  businessInterruption?: boolean;
}

// Life Insurance Quote Interface
export interface LifeInsuranceQuote extends BaseQuote {
  coverageType?: string;
  amountOfCoverage?: string;
  policyStartDate?: string;
  birthdate?: string;
  height?: string;
  weight?: string;
  gender?: string;
  tobaccoUse?: string;
  majorDiseases?: string;
  strokeHeartAttack?: string;
  cancerDiagnosis?: string;
  businessHobby?: string;
}

// Disability Insurance Quote Interface
export interface DisabilityInsuranceQuote extends BaseQuote {
  occupation?: string;
  birthdate?: string;
  monthlyIncome?: string;
  gender?: string;
  tobaccoUse?: string;
  policyStartDate?: string;
}

// Flood Quote Interface
export interface FloodQuote extends BaseQuote {
  // Property Information
  policyOwner?: string;
  homeType?: string;
  buildingPurpose?: string;
  rentingHome?: string;
  floodClaims?: string;

  // Coverage Information
  desiredContents?: string;
  desiredBuilding?: string;

  // Additional Information
  comments?: string;
}

// Landlords Quote Interface
export interface LandlordsQuote extends BaseQuote {
  // Property Information
  numberOfUnits?: string;
  totalSquareFeet?: string;
  whenToStart?: string;

  // Additional Information
  additionalComments?: string;
}

// Renters Quote Interface
export interface RentersQuote extends BaseQuote {
  // Property Information
  typeOfHome?: string;
  estimatedSquareFootage?: string;
  totalNumberOfRooms?: string;
  dogBreeds?: string;
  deadBolts?: boolean;
  fireExtinguishers?: boolean;
  trampoline?: boolean;
  coveredDeckPatio?: boolean;
  swimmingPool?: boolean;

  // Policy Information
  replacementValue?: string;
  personalLiabilityCoverage?: string;
  desiredDeductible?: string;
  creditRating?: string;
  reportedClaims?: string;
  replaceExistingPolicy?: string;
}

// Umbrella Insurance Quote Interface
export interface UmbrellaInsuranceQuote extends BaseQuote {
  vehiclesOwned?: string;
  propertiesOwned?: string;
  householdAccidents?: string;
  amountOfCoverage?: string;
  trafficTickets?: string;
  policyStartDate?: string;
}

// Annuity Quote Interface
export interface AnnuityQuote extends BaseQuote {
  annuityType?: string;
  investmentAmount?: string;
  birthdate?: string;
  gender?: string;
  retirementAge?: string;
  currentAge?: string;
  riskTolerance?: string;
  investmentGoals?: string;
  timeHorizon?: string;
  liquidityNeeds?: string;
}

// Medicare Advantage Quote Interface
export interface MedicareAdvantageQuote extends BaseQuote {
  policyStartDate?: string;
  birthdate?: string;
  dateOfBirth?: string;
  gender?: string;
  zipCode?: string;
  currentMedicare?: string;
  prescriptionDrugs?: string;
  doctorPreferences?: string;
  hospitalPreferences?: string;
  monthlyBudget?: string;
  specialNeeds?: string;
}

// Medicare Supplement Quote Interface
export interface MedicareSupplementQuote extends BaseQuote {
  policyStartDate?: string;
  birthdate?: string;
  dateOfBirth?: string;
  gender?: string;
  zipCode?: string;
  medicarePartA?: string;
  medicarePartB?: string;
  currentSupplement?: string;
  planPreferences?: string;
  monthlyBudget?: string;
  healthConditions?: string;
}

// Quote Types Enum
export const QUOTE_TYPES = {
  AUTO: 'Auto',
  HOME: 'Home',
  HEALTH: 'Health',
  BUSINESS: 'Business',
  LIFE: 'LifeInsurance',
  BOAT: 'Boat',
  MOTORCYCLE: 'Motorcycle',
  FLOOD: 'Flood',
  RENTERS: 'Renters',
  LANDLORDS: 'Landlords',
  BOP: 'BOP',
  WORKERS_COMP: 'WorkersComp',
  DENTAL: 'Dental',
  VISION: 'Vision',
  DISABILITY: 'DisabilityInsurance',
  UMBRELLA: 'UmbrellaInsurance',
  ANNUITY: 'Annuity',
  MEDICARE_ADVANTAGE: 'MedicareAdvantage',
  MEDICARE_SUPPLEMENT: 'MedicareSupplement',

  ACLS: 'ACLS',
  BLS: 'BLS',
  HANDS_ONLY_CPR: 'Hands Only CPR',
  AED: 'AED',
  HEART_SAVERS_FIRST_AID: 'Heart Savers First AID',
  HEIMLICH_MANEUVE: 'Heimlich Maneuve',
  EPI_PEN: 'EPI-PEN',
} as const;

export type QuoteType = typeof QUOTE_TYPES[keyof typeof QUOTE_TYPES];

// API Response Interface
export interface ApiResponse<T> {
  data: T;
  totalCount: number;
  page: number;
  pageSize: number;
}

// Vision Quote Interface
export interface VisionQuote extends BaseQuote {
  coverageType?: string;
  effectiveDate?: string;
  birthdate?: string;
  gender?: string;
  dependents?: string;
  currentVisionInsurance?: string;
  lastEyeExam?: string;
  visionHistory?: string;
  preferredProvider?: string;
  coverageNeeds?: string;
  numberOfPeople?: string;
  policyStartDate?: string;
}

// Workers Compensation Quote Interface
export interface WorkersCompQuote extends BaseQuote {
  businessName?: string;
  businessType?: string;
  numberOfEmployees?: string;
  payrollAmount?: string;
  industryClassification?: string;
  priorClaims?: string;
  safetyPrograms?: string;
  policyStartDate?: string;
}

// Pagination Interface
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}
