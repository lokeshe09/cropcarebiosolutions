export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'traps'
  | 'crop-solutions'
  | 'contact';

export type ProductFamily =
  | 'fruit-flies'
  | 'moths-borers'
  | 'palm-weevils'
  | 'synergist';

/**
 * A pheromone lure. Every field here comes from the client's product sheet —
 * nothing is inferred. Optional fields are omitted when the sheet does not
 * state a value rather than filled with a plausible guess.
 */
export interface Product {
  id: string;
  /** Short catalogue name, e.g. "Melon Fly Lure". */
  name: string;
  /** Latin binomial, italicised wherever it is rendered. */
  scientificName?: string;
  /** How farmers refer to the pest. */
  pestCommonName: string;
  /** Two-to-four letter trade code, e.g. "MF". */
  code: string;
  family: ProductFamily;
  /** The full product description, exactly as supplied. Cards show the
   *  opening paragraph rather than a separate marketing line. */
  description: string[];
  fieldLife?: string;
  shelfLife?: string;
  trapsPerAcre?: string;
  /** Flat list, used for chips and crop search. */
  targetCrops: string[];
  /** Grouped presentation where the sheet groups them. */
  cropGroups?: { label: string; crops: string[] }[];
  /** Free-text note shown under the crop list. */
  cropNote?: string;
  application: string[];
  storage: string[];
  recommendedTraps: string[];
  /** Only set where the client has confirmed the compound. */
  activeIngredient?: string;
  modeOfAction?: string;
  imageUrl: string;
  imageAlt: string;
  trapImageUrl?: string;
  /** Marks a companion product rather than a standalone lure. */
  companionTo?: string;
}

export type TrapFamily =
  | 'fruit-fly'
  | 'funnel'
  | 'water'
  | 'delta'
  | 'palm'
  | 'solar';

export interface TrapType {
  id: string;
  name: string;
  family: TrapFamily;
  bestFor: string;
  suitableLures: string[];
  description: string;
  features: string[];
  imageUrl: string;
  setupAdvice?: string;
  recommendedHeight?: string;
  trapsPerAcre?: string;
  servicing?: string;
}

export interface BioToolItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetPests: string[];
  suitableCrops: string[];
  specs: { label: string; value: string }[];
  imageUrl: string;
  highlights: string[];
}

/** A crop family on the Crop Solutions page. */
export interface CropSolution {
  id: string;
  name: string;
  crops: string[];
  threat: string;
  symptoms: string;
  lureIds: string[];
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  location: string;
  enquirerType: string;
  product: string;
  acreage: string;
  message: string;
}
