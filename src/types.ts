export type PageId = 
  | 'home'
  | 'why-us'
  | 'about'
  | 'products'
  | 'pest-finder'
  | 'trap-guide'
  | 'calculator'
  | 'contact';

export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  pestCommonName: string;
  category: 'vegetables' | 'fruits' | 'plantation' | 'field_crops' | 'enhancers';
  shortDescription: string;
  fullDescription: string;
  fieldLife: string;
  shelfLife: string;
  targetCrops: string[];
  targetCropDetails?: {
    cucurbits?: string[];
    fruiting?: string[];
    additional?: string[];
    other?: string[];
  };
  applicationInstructions: string[];
  storageAndDisposal: string[];
  trapsPerAcre: string;
  monitoringDensity?: string;
  massTrappingDensity?: string;
  recommendedTraps: string[];
  activeIngredient?: string;
  chemicalStructure?: string;
  casNumber?: string;
  isomericPurity?: string;
  dispenserType?: string;
  modeOfAction?: string;
  economicThreshold?: {
    monitoringTrigger: string;
    massTrappingTrigger: string;
    criticalIntervention: string;
  };
  mrlStatus?: string;
  beneficialSafety?: string;
  badge?: string;
  imageAlt: string;
  iconName: string;
  imageUrl?: string;
  trapImageUrl?: string;
  trapTypeRef?: string;
}

export interface TrapType {
  id: string;
  name: string;
  category?: 'water_trap' | 'funnel_trap' | 'delta_trap' | 'fruit_fly_trap' | 'solar_trap' | 'sticky_trap' | 'bio_glue' | 'palm_trap';
  bestFor: string;
  suitableLures: string[];
  description: string;
  features: string[];
  icon: string;
  imageUrl: string;
  fieldSetupAdvice?: string;
  recommendedHeight?: string;
  dimensions?: string;
  dosagePerAcre?: string;
  servicingProtocol?: string;
  aerodynamicProfile?: string;
}

export interface BioToolItem {
  id: string;
  name: string;
  category: 'sticky_sheets' | 'sticky_rolls' | 'sticky_pouches' | 'glue' | 'solar' | 'traps';
  tagline: string;
  description: string;
  targetPests: string[];
  suitableCrops: string[];
  specs: {
    color?: string;
    dimensions?: string;
    life?: string;
    applicationRate?: string;
  };
  imageUrl: string;
  highlights: string[];
}

export interface CalculationResult {
  acres: number;
  productId: string;
  monitoringTrapsNeeded: number;
  massTrapsNeeded: number;
  trapsNeeded: number;
  luresPerSeason: number;
  recommendedTrap: string;
  replacementSchedule: string;
  estimatedChemicalSavingsPercent: number;
}

export interface IPMProtocol {
  id: string;
  title: string;
  subtitle: string;
  step: string;
  description: string;
  keyAction: string;
  standard: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  stateOrRegion: string;
  farmerType: 'individual_farmer' | 'dealer_distributor' | 'plantation_owner' | 'fpo_cooperative' | 'other';
  selectedProduct: string;
  acreage: string;
  message: string;
}

