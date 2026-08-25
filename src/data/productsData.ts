import { Product, TrapType, BioToolItem, IPMProtocol } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'bactrocera-cucurbitae',
    name: 'Melon Fly Pheromone Lure (Bactrocera cucurbitae)',
    scientificName: 'Bactrocera cucurbitae (Coquillett)',
    pestCommonName: 'Melon Fly / Cucurbit Fruit Fly (MF)',
    category: 'vegetables',
    shortDescription: 'Bio-rational male attractant lure with Cue-Lure active matrix for cucurbits, gourds, and melons.',
    fullDescription: 'The Bactrocera cucurbitae Pheromone Lure is a world-class bio-rational pest management solution engineered to eliminate melon fly oviposition damage across cucurbit vines. Formulated with pure Cue-Lure semiochemical matrix embedded in UV-stabilized slow-release polymer dispensers, it creates a sustained vapor plume drawing male flies over 3 months. Male removal prevents fertilized egg laying beneath vegetable skin, stopping internal rotting, fruit distortion, and unmarketable yields.',
    fieldLife: 'Up to 90 days (3 months active vapor diffusion)',
    shelfLife: '2 years from production date (at <25°C in airtight pouch)',
    trapsPerAcre: '10–15 per acre (Mass Trapping)',
    monitoringDensity: '4–6 traps per acre',
    massTrappingDensity: '10–15 traps per acre',
    recommendedTraps: ['Fruit Fly Trap', 'Vertical Fruit Fly Trap', 'Water Trap', 'Glass Trap'],
    badge: 'High-Purity Cue-Lure',
    activeIngredient: '4-(p-Acetoxyphenyl)-2-butanone (Cue-Lure)',
    chemicalStructure: 'C12H14O3 (Synthetic Kairomone / Parapheromone)',
    casNumber: '3572-06-3',
    isomericPurity: '≥99.2% Isomerically Pure',
    dispenserType: 'High-density microporous polymer block / capillary reservoir',
    modeOfAction: 'Species-specific male parapheromone vapor trail that triggers irreversible flight-to-source behavior into inverted funnel or dome traps, disrupting the male reproductive pool.',
    economicThreshold: {
      monitoringTrigger: '>2 male flies / trap / week: Begin plot surveillance',
      massTrappingTrigger: '>5 male flies / trap / week: Increase trap density to 15 / acre',
      criticalIntervention: '>15 flies / trap / week: Deploy protein bait sprays + perimeter sticky rolls'
    },
    mrlStatus: 'Exempt from Maximum Residue Limits (MRL) — 100% Zero Chemical Residue',
    beneficialSafety: 'Zero toxicity to honeybees (Apis mellifera), predatory mites, and earthworms',
    iconName: 'Sparkles',
    imageUrl: '/images/MF .jpeg',
    trapImageUrl: '/images/Fruit Fly Trap.jpg',
    imageAlt: 'Melon Fly Pheromone Lure (MF) for Cucurbit Protection',
    targetCrops: [
      'Cucumber', 'Gherkin', 'Bottle Gourd', 'Ridge Gourd', 'Bitter Gourd', 
      'Snake Gourd', 'Sponge Gourd', 'Pumpkin', 'Zucchini', 'Watermelon', 
      'Muskmelon', 'Tomato', 'Brinjal (Eggplant)'
    ],
    targetCropDetails: {
      cucurbits: ['Cucumber', 'Gherkin', 'Bottle Gourd', 'Ridge Gourd', 'Bitter Gourd', 'Snake Gourd', 'Sponge Gourd', 'Pumpkin', 'Zucchini'],
      fruiting: ['Watermelon', 'Muskmelon', 'Other Melons'],
      additional: ['Tomato', 'Brinjal (Eggplant)', 'Soft-skinned vegetables']
    },
    applicationInstructions: [
      'Place lure inside the central basket or hanging clip of the trap housing.',
      'Distribute traps uniformly across the vine field at 10–15m intervals.',
      'Maintain trap height 1.0 meter above ground along trellis posts or shaded vine canopy.',
      'Use 1 lure per trap body.',
      'Replace lure every 90 days or when catch rates decline during peak flight seasons.'
    ],
    storageAndDisposal: [
      'Store in original hermetically sealed multi-layer aluminum foil pouch.',
      'Refrigerate at 4°C to 10°C for up to 24 months, or deep freeze (-18°C) for extended shelf life.',
      'Do not expose sealed lures to direct midday sunlight or engine compartment heat before deployment.',
      'Exhausted dispensers are non-hazardous and can be recycled or disposed of according to local agricultural waste norms.'
    ]
  },
  {
    id: 'bactrocera-dorsalis',
    name: 'Oriental Fruit Fly Pheromone Lure (Bactrocera dorsalis)',
    scientificName: 'Bactrocera dorsalis (Hendel)',
    pestCommonName: 'Oriental Fruit Fly (OFF)',
    category: 'fruits',
    shortDescription: 'High-affinity Methyl Eugenol matrix lure for mango, guava, citrus, and commercial orchards.',
    fullDescription: 'The Bactrocera dorsalis Pheromone Lure is the global industry benchmark for oriental fruit fly monitoring and mass eradication. Formulated with ultrapure Methyl Eugenol, it exhibits an extreme olfactory attraction radius. Flies follow the atmospheric concentration gradient into the trap’s inverted conical entrances, effectively breaking the mating cycle before female oviposition can puncture the fruit rind.',
    fieldLife: 'Up to 90 days (3 months continuous field release)',
    shelfLife: '2 years from production date',
    trapsPerAcre: '10–15 per acre (Mass Trapping)',
    monitoringDensity: '4–6 traps per acre',
    massTrappingDensity: '10–15 traps per acre',
    recommendedTraps: ['Fruit Fly Trap', 'Vertical Fruit Fly Trap', 'Glass Trap', 'Water Trap'],
    badge: 'Export Orchard Grade',
    activeIngredient: '4-Allyl-1,2-dimethoxybenzene (Methyl Eugenol)',
    chemicalStructure: 'C11H14O2 (Naturally Derived Phenylpropanoid / Parapheromone)',
    casNumber: '93-15-2',
    isomericPurity: '≥99.5% High Purity Grade',
    dispenserType: 'Controlled-release polymeric matrix pellet',
    modeOfAction: 'Powerful long-distance olfactory attractant inducing strong directional flight in male Bactrocera dorsalis, driving them into one-way entry trap chambers.',
    economicThreshold: {
      monitoringTrigger: '>3 male flies / trap / week: Start weekly orchard recording',
      massTrappingTrigger: '>5 flies / trap / week: Deploy full mass trapping grid 4 weeks before harvest',
      criticalIntervention: '>20 flies / trap / week: Initiate perimeter attract-and-kill bait stations'
    },
    mrlStatus: 'Zero Chemical Residue — Certified for APEDA, GlobalGAP, and Organic Exports',
    beneficialSafety: 'Non-toxic to natural pollinators, parasitoid wasps (Fopius arisanus), and beneficial beetles',
    iconName: 'Apple',
    imageUrl: '/images/OFF.jpeg',
    trapImageUrl: '/images/Fruit Fly Trap.jpg',
    imageAlt: 'Oriental Fruit Fly Lure (OFF) for Mango and Guava Orchards',
    targetCrops: ['Mango', 'Guava', 'Citrus', 'Papaya', 'Avocado', 'Passion Fruit', 'Peach', 'Plum', 'Other Fruit Crops'],
    targetCropDetails: {
      fruiting: ['Mango', 'Guava', 'Citrus', 'Papaya', 'Avocado', 'Passion Fruit'],
      other: ['Ensures high-quality, blemish-free fruit harvests and better export yields']
    },
    applicationInstructions: [
      'Position lure inside the top basket of the Fruit Fly Trap or McPhail Glass Trap.',
      'Hang traps inside the north-eastern shaded tree canopy at 1.5–2.0 meters from ground level.',
      'Deploy traps at least 30–45 days before fruit color break (ripening onset).',
      'Inspect and clear catch chambers every 7 to 10 days.',
      'Replace lures every 90 days.'
    ],
    storageAndDisposal: [
      'Store sealed foil packs in a cool, dark environment below 20°C.',
      'Long-term storage at -18°C maintains full volatility kinetics for 36 months.',
      'Bury or dispose of spent lures responsibly.'
    ]
  },
  {
    id: 'pectinophora-gossypiella',
    name: 'Pink Bollworm Pheromone Lure (Pectinophora gossypiella)',
    scientificName: 'Pectinophora gossypiella (Saunders)',
    pestCommonName: 'Pink Bollworm (PBW)',
    category: 'field_crops',
    shortDescription: 'Gossyplure-loaded rubber septa lure for cotton square and boll integrity against internal larvae.',
    fullDescription: 'The Pectinophora gossypiella Pheromone Lure incorporates pure Gossyplure — an exact 1:1 isomeric blend of (Z,Z) and (Z,E)-7,11-hexadecadienyl acetate. Pink bollworm larvae cause devastating hidden damage by tunneling directly into developing bolls, destroying seeds and staining lint (locule damage). Deploying PBW pheromone traps provides early biofix warning and mass male interception, arresting generational buildup across both Bt and non-Bt cotton.',
    fieldLife: '30–45 days active field release',
    shelfLife: '2 years under recommended refrigeration',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–5 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Funnel Trap', 'Delta Trap', 'Solar Light Trap'],
    badge: 'Gossyplure 1:1 Blend',
    activeIngredient: '(Z,Z)-7,11-Hexadecadienyl acetate & (Z,E)-7,11-Hexadecadienyl acetate (1:1 Ratio)',
    chemicalStructure: 'C18H32O2 (Synthetic Female Sex Pheromone)',
    casNumber: '53042-79-8 / 52207-00-8',
    isomericPurity: '≥99.0% Optical Isomer Blend (Gossyplure)',
    dispenserType: 'UV-stabilized red rubber septum / micro-dispenser ampoule',
    modeOfAction: 'Emits the natural calling female sex pheromone plume that prompts male flight upwind, capturing them in dry funnel sleeves or sticky delta inserts prior to copulation.',
    economicThreshold: {
      monitoringTrigger: 'Catch of >8 moths / trap / night for 3 consecutive nights indicates active brood emergence',
      massTrappingTrigger: '>5 moths / trap / night at flowering / squaring stage: Deploy 10 traps/acre',
      criticalIntervention: '>10% rosette flowers or boll entry marks: Integrate bio-larvicide / parasitoids'
    },
    mrlStatus: 'Exempt from MRL — Residue-Free Cotton Lint Protection',
    beneficialSafety: 'Completely harmless to predatory bugs (Geocoris, Chrysoperla) and honeybees',
    iconName: 'ShieldCheck',
    imageUrl: '/images/PBW.jpeg',
    trapImageUrl: '/images/Funnel Trap.png',
    imageAlt: 'Pink Bollworm Lure (PBW) for Cotton Crops',
    targetCrops: ['Cotton (Bt & Non-Bt)', 'Okra / Ladyfinger', 'Hibiscus'],
    targetCropDetails: {
      additional: ['Cotton (All hybrids & varieties)', 'Okra (Bhindi)']
    },
    applicationInstructions: [
      'Install funnel traps 45–60 days after sowing or at first square/flower initiation.',
      'Fasten trap to sturdy bamboo stakes, positioning funnel mouth 30 cm above crop canopy.',
      'Adjust stake height weekly as the cotton crop grows.',
      'Ensure collection sleeve is tied securely with cord at the bottom.',
      'Replace lure every 30 to 45 days.'
    ],
    storageAndDisposal: [
      'Keep unopened pouches in cold storage (4°C) or freezer (-18°C).',
      'Do not pierce rubber septa with pins.',
      'Dispose of spent septa in compliance with local agricultural norms.'
    ]
  },
  {
    id: 'tuta-absoluta',
    name: 'Tomato Leaf Miner Pheromone Lure (Tuta absoluta)',
    scientificName: 'Tuta absoluta (Meyrick)',
    pestCommonName: 'Tomato Leaf Miner / Pinworm (TLM)',
    category: 'vegetables',
    shortDescription: 'High-potency microlepidoptera attractant lure for tomato greenhouses and open-field crops.',
    fullDescription: 'The Tuta absoluta Pheromone Lure delivers precision control against the notoriously invasive tomato pinworm. Utilizing the major female sex pheromone component (3E,8Z,11Z)-tetradecatrien-1-yl acetate in a high-stability matrix, it draws male moths into specialized water pans or delta traps. Drastically reduces larval blotch-mining on foliage and puncture wounds on tomato fruits, preventing fungal rot and severe yield collapse.',
    fieldLife: '30–45 days active emission',
    shelfLife: '2 years if refrigerated',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–6 traps per acre',
    massTrappingDensity: '8–12 traps per acre (Open Field) | 1 trap / 100 m² (Polyhouse)',
    recommendedTraps: ['Water Trap (Tuta Edition)', 'Delta Trap', 'Funnel Trap', 'Solar Light Trap'],
    badge: 'Tuta Specialized',
    activeIngredient: '(3E,8Z,11Z)-Tetradecatrien-1-yl acetate (Major Component ~90%)',
    chemicalStructure: 'C16H26O2',
    casNumber: '116584-66-8',
    isomericPurity: '≥99.1% High-Performance Blend',
    dispenserType: 'Precision micro-capillary tube / elastomeric rubber septum',
    modeOfAction: 'Mimics calling female scent plume to attract and immobilize adult male micro-moths on water film or sticky liners before mating can occur.',
    economicThreshold: {
      monitoringTrigger: '>3 moths / trap / week: Begin nursery and field scouting for leaf pinholes',
      massTrappingTrigger: '>10 moths / trap / week: Saturate field with 10–12 water traps per acre',
      criticalIntervention: '>30 moths / trap / week: Combine mass trapping with biological Bacillus / Trichogramma releases'
    },
    mrlStatus: 'Zero MRL Residues — Perfect for Greenhouse & Fresh Market Tomatoes',
    beneficialSafety: 'Safe for Nesidiocoris tenuis and Macrolophus pygmaeus biological predators',
    iconName: 'ShieldAlert',
    imageUrl: '/images/TLM.jpeg',
    trapImageUrl: '/images/WATER TRAP Tuta.jpeg',
    imageAlt: 'Tomato Leaf Miner Lure (TLM) for Tomato & Potato Pest Management',
    targetCrops: ['Tomato', 'Potato', 'Protected Polyhouse Crops', 'Field Solanaceous Vegetables'],
    targetCropDetails: {
      cucurbits: [],
      fruiting: ['Tomato', 'Potato'],
      additional: ['Prevents destructive tunneling and leaf blotches']
    },
    applicationInstructions: [
      'Install lure in central holder of Water Trap (Tuta Special) or Delta Trap apex.',
      'In water traps, add 2–3 liters of water with 15ml light vegetable oil or surfactant to break surface tension.',
      'Mount traps 20–30 cm above crop canopy across the planting grid.',
      'Check water levels weekly; replenish evaporated water.',
      'Replace lures every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store sealed at -18°C in freezer for maximum potency up to 2 years.',
      'Handle lures with forceps or clean gloves to prevent human odor contamination.',
      'Bury or dispose of spent lures responsibly.'
    ]
  },
  {
    id: 'leucinodes-orbonalis',
    name: 'Egg Plant Borer Pheromone Lure (Leucinodes orbonalis)',
    scientificName: 'Leucinodes orbonalis (Guenée)',
    pestCommonName: 'Egg Plant Borer / Brinjal Shoot & Fruit Borer (EPB / Luci)',
    category: 'vegetables',
    shortDescription: 'Synthetic sex pheromone lure for brinjal / eggplant shoot withering and fruit boring control.',
    fullDescription: 'The Leucinodes orbonalis Pheromone Lure provides targeted defense against the Brinjal Fruit and Shoot Borer (BFSB), the primary limiting factor in eggplant cultivation. BFSB caterpillars bore into growing tender shoots causing wilting, then tunnel into developing fruits, making them unfit for sale. Utilizing high-purity (E)-11-hexadecenyl acetate, this lure captures male moths continuously, significantly suppressing field mating rates without chemical insecticide residue on harvestable fruits.',
    fieldLife: '30–45 days',
    shelfLife: '2 years if stored properly',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–6 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Water Trap (Luci Edition)', 'Funnel Trap', 'Solar Light Trap'],
    badge: 'Residue-Free Brinjal',
    activeIngredient: '(E)-11-Hexadecenyl acetate',
    chemicalStructure: 'C18H34O2 (Female Sex Pheromone)',
    casNumber: '56218-72-5',
    isomericPurity: '≥99.0% Pure Isomeric Synthesis',
    dispenserType: 'Micro-pore polymer vial / Rubber Septum',
    modeOfAction: 'Female sex attractant that draws male Leucinodes moths to water pans with yellow optical stimulus, breaking the larval infestation cycle.',
    economicThreshold: {
      monitoringTrigger: '>2 moths / trap / week: Begin shoot scouting for wilted tips',
      massTrappingTrigger: '>5 moths / trap / week: Maintain 10 water traps/acre throughout flowering',
      criticalIntervention: '>15 moths / trap / week or >5% shoot wilting: Implement biopesticide spray'
    },
    mrlStatus: 'Zero MRL Concerns — Clean Vegetable Export & Local Market Grade',
    beneficialSafety: 'Zero harm to Braconid parasitoids, spiders, and ladybird beetles',
    iconName: 'Leaf',
    imageUrl: '/images/EPB.jpeg',
    trapImageUrl: '/images/WATER TRAP LUCI.jpeg',
    imageAlt: 'Eggplant Shoot & Fruit Borer Lure (EPB / Luci)',
    targetCrops: ['Brinjal / Eggplant', 'Solanum species'],
    targetCropDetails: {
      fruiting: ['Brinjal / Eggplant (All varieties including green, purple, and striped)'],
      other: ['Protects vital growing shoots and market-grade fruits from internal boring']
    },
    applicationInstructions: [
      'Install lure in the yellow water trap clip or dry funnel trap canopy.',
      'Position trap level with the upper one-third of the brinjal canopy.',
      'Space traps 15 meters apart in a uniform diamond grid.',
      'Refill water pan and add few drops of mild soap weekly.',
      'Replace lure every 30–45 days.'
    ],
    storageAndDisposal: [
      'Keep in cold storage (2°C–8°C) until field installation.',
      'Dispose of packaging and old lures in farm refuse pits.'
    ]
  },
  {
    id: 'plutella-xylostella',
    name: 'Diamond Back Moth Pheromone Lure (Plutella xylostella)',
    scientificName: 'Plutella xylostella (Linnaeus)',
    pestCommonName: 'Diamond Back Moth (DBM / Daimond Back Moth)',
    category: 'vegetables',
    shortDescription: 'Multi-component pheromone blend for cabbage, cauliflower, broccoli, and mustard crops.',
    fullDescription: 'The Plutella xylostella Pheromone Lure addresses one of the most insecticide-resistant agricultural pests on Earth. DBM larvae cause extensive windowing of leaves and contaminate cabbage/cauliflower heads. Our calibrated blend of (Z)-11-hexadecenal, (Z)-11-hexadecenyl acetate, and (Z)-11-hexadecen-1-ol attracts male moths with ultra-high sensitivity, reducing oviposition and avoiding chemical resistance buildup.',
    fieldLife: '30–45 days active release',
    shelfLife: '2 years under refrigeration',
    trapsPerAcre: '8–12 per acre (Mass Trapping)',
    monitoringDensity: '4–6 traps per acre',
    massTrappingDensity: '8–12 traps per acre',
    recommendedTraps: ['Water Trap (DBM Edition)', 'Delta Trap', 'Sticky Sheets'],
    badge: 'Resistance Management',
    activeIngredient: '(Z)-11-Hexadecenal, (Z)-11-Hexadecenyl acetate & (Z)-11-Hexadecen-1-ol (Tri-Component Blend)',
    chemicalStructure: 'C16H30O / C18H34O2 / C16H32O',
    casNumber: '53939-28-9 / 39599-89-0',
    isomericPurity: '≥99.3% Isomerically Balanced Ratio',
    dispenserType: 'UV-resistant red rubber septum dispenser',
    modeOfAction: 'Releases a calibrated female calling pheromone plume that draws adult male DBM into low-profile water traps or sticky delta liners, arresting larval generations.',
    economicThreshold: {
      monitoringTrigger: '>5 moths / trap / week: Begin inspecting undersides of leaves for larvae',
      massTrappingTrigger: '>10 moths / trap / week: Deploy 12 traps/acre before curd formation',
      criticalIntervention: '>20 moths / trap / week: Integrate Bt kurstaki or Spinosad bio-sprays'
    },
    mrlStatus: 'Zero Chemical Residue — Safe for Residue-Tested Export Brassicas',
    beneficialSafety: 'Harmless to Diadegma semiclausum and Cotesia vestalis parasitoid wasps',
    iconName: 'Sparkles',
    imageUrl: '/images/DBM.jpeg',
    trapImageUrl: '/images/WATER TRAP DBM.jpeg',
    imageAlt: 'Diamond Back Moth Lure (DBM) for Cabbage and Cauliflower',
    targetCrops: ['Cabbage', 'Cauliflower', 'Broccoli', 'Knol Khol', 'Mustard', 'Radish', 'Chinese Cabbage'],
    targetCropDetails: {
      cucurbits: [],
      fruiting: [],
      additional: ['Cabbage', 'Cauliflower', 'Broccoli', 'Mustard'],
      other: ['Eliminates windowing leaf damage and curd contamination']
    },
    applicationInstructions: [
      'Suspend lure in water trap cage or attach to roof hook of Delta Trap.',
      'Maintain trap height 15–20 cm above cabbage/cauliflower heads.',
      'Deploy 8–12 traps per acre starting 15 days after seedling transplanting.',
      'Inspect catch weekly and clean basin.',
      'Replace lure every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store in sealed foil packs in freezer (-18°C) or refrigerator (<5°C).',
      'Dispose of used septa safely.'
    ]
  },
  {
    id: 'helicoverpa-armigera',
    name: 'Cotton Boll Worm Pheromone Lure (Helicoverpa armigera)',
    scientificName: 'Helicoverpa armigera (Hübner)',
    pestCommonName: 'Cotton Boll Worm / Gram Pod Borer (CBW)',
    category: 'field_crops',
    shortDescription: 'High-affinity multi-crop lure for cotton, chickpea, pigeonpea, maize, and tomato pod borers.',
    fullDescription: 'The Helicoverpa armigera Pheromone Lure contains the precise 97:3 ratio of (Z)-11-hexadecenal and (Z)-9-hexadecenal. Gram Pod Borer / American Bollworm is a highly destructive polyphagous pest attacking squares, flowers, and pods across cotton, pulses, and vegetables. Deploying funnel traps with this high-load lure intercepts massive numbers of nocturnal male moths before they can mate, protecting valuable pods and bolls.',
    fieldLife: '30–45 days field longevity',
    shelfLife: '2 years if stored properly',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–5 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Funnel Trap', 'Water Trap', 'Solar Light Trap'],
    badge: '97:3 Calibrated Ratio',
    activeIngredient: '(Z)-11-Hexadecenal & (Z)-9-Hexadecenal (97:3 Synthetic Blend)',
    chemicalStructure: 'C16H30O',
    casNumber: '53939-28-9 / 56219-04-6',
    isomericPurity: '≥99.4% High Isomeric Purity',
    dispenserType: 'Controlled-release rubber septum / polymer capsule',
    modeOfAction: 'Mimics female sexual attractant calling vapor, drawing male Helicoverpa moths from large distances into dry funnel collection sleeves.',
    economicThreshold: {
      monitoringTrigger: '>5 moths / trap / night for 2 consecutive nights: Begin field sampling',
      massTrappingTrigger: '>8 moths / trap / night: Deploy mass trapping grid at crop flowering',
      criticalIntervention: '>15 moths / trap / night or 1 larva/meter row: Apply HaNPV viral bio-control'
    },
    mrlStatus: 'Zero MRL Residues — Organic & APEDA Certified Compliance',
    beneficialSafety: 'Safe for Trichogramma chilonis egg parasitoids and Chrysoperla carnea',
    iconName: 'ShieldCheck',
    imageUrl: '/images/CBW.jpeg',
    trapImageUrl: '/images/Funnel Trap.png',
    imageAlt: 'Cotton Boll Worm Lure (CBW) for Cotton, Pulses and Maize',
    targetCrops: ['Cotton', 'Gram / Chickpea', 'Pigeon Pea', 'Field Pea', 'Maize', 'Sunflower', 'Chilly / Capsicum', 'Other susceptible crops'],
    targetCropDetails: {
      additional: ['Cotton (Bt and Non-Bt varieties)', 'Gram / Chickpea / Pigeon Pea / Pea', 'Maize & Sweetcorn', 'Sunflower', 'Chilly / Capsicum']
    },
    applicationInstructions: [
      'Install lure in the canopy cap holder of a standard Funnel Trap.',
      'Suspend trap on a pole 30 cm above crop canopy.',
      'Deploy 8–10 traps per acre at initiation of squaring / flowering.',
      'Empty transparent collection sleeve weekly.',
      'Replace lure every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store in cool, dark environment or refrigerator below 8°C.',
      'Dispose of exhausted dispensers in farm waste disposal.'
    ]
  },
  {
    id: 'spodoptera-litura',
    name: 'Tobacco Cut Worm Pheromone Lure (Spodoptera litura)',
    scientificName: 'Spodoptera litura (Fabricius)',
    pestCommonName: 'Tobacco Cut Worm / Armyworm (TCW)',
    category: 'field_crops',
    shortDescription: 'Dual-component female sex pheromone lure for soybean, cotton, groundnut, and vegetable armyworms.',
    fullDescription: 'The Spodoptera litura Pheromone Lure is synthesized with the high-potency synergistic blend of (Z,E)-9,11-tetradecadienyl acetate and (Z,E)-9,12-tetradecadienyl acetate. Cutworms and armyworms feed voraciously at night, skeletonizing leaves in soybean, groundnut, cotton, and vegetables. Deploying pheromone funnel traps eliminates adult male moths, crashing egg-laying clusters (egg masses) across the field.',
    fieldLife: '30–45 days',
    shelfLife: '2 years under cool storage',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–5 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Funnel Trap', 'Water Trap', 'Solar Light Trap'],
    badge: 'Dual-Isomer Synergist',
    activeIngredient: '(Z,E)-9,11-Tetradecadienyl acetate & (Z,E)-9,12-Tetradecadienyl acetate (10:1 Ratio)',
    chemicalStructure: 'C16H28O2',
    casNumber: '50767-79-8 / 31654-77-0',
    isomericPurity: '≥99.2% Chemically Pure Blend',
    dispenserType: 'Micro-porous elastomer septum / PE capsule',
    modeOfAction: 'Releases female calling scent plume triggering upwind male flight into funnel trap entrances.',
    economicThreshold: {
      monitoringTrigger: '>5 moths / trap / night: Check lower leaves for fuzzy brown egg masses',
      massTrappingTrigger: '>10 moths / trap / night: Deploy 10 traps/acre immediately across crop',
      criticalIntervention: '>25 moths / trap / night: Apply SlNPV or neem-based azadirachtin sprays'
    },
    mrlStatus: 'Zero Chemical Residue — Safe for Soybean, Cotton, and Pulse Exports',
    beneficialSafety: 'Non-toxic to predatory spiders, birds, and non-target beneficial insect fauna',
    iconName: 'Bug',
    imageUrl: '/images/TCW.jpeg',
    trapImageUrl: '/images/Funnel Trap.png',
    imageAlt: 'Tobacco Cut Worm Lure (TCW) for Soybean, Groundnut and Field Crops',
    targetCrops: ['Tobacco', 'Cotton', 'Soybean', 'Cabbage', 'Chickpea', 'Chilli', 'Groundnut', 'Beet', 'Other vegetable and field crops'],
    targetCropDetails: {
      other: ['Protects foliage and tender pods from voracious nocturnal defoliation']
    },
    applicationInstructions: [
      'Fit lure into the holder at the top of the funnel trap.',
      'Place traps 30 cm above crop canopy, moving up as plants grow.',
      'Deploy 8–10 traps per acre distributed across the parcel.',
      'Check catch sleeves weekly.',
      'Replace lures every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store in unopened foil packs in a refrigerator (4°C) or dark cool room.',
      'Dispose of used lures cleanly.'
    ]
  },
  {
    id: 'red-palm-weevil',
    name: 'Red Palm Weevil Pheromone Lure (RPW)',
    scientificName: 'Rhynchophorus ferrugineus (Olivier)',
    pestCommonName: 'Red Palm Weevil (RPW)',
    category: 'plantation',
    shortDescription: 'High-affinity aggregation pheromone (Ferrugineol) attracting both male and female weevils in palms.',
    fullDescription: 'The Red Palm Weevil Pheromone Lure utilizes Ferrugineol (4-methyl-5-nonanol + 4-methyl-5-nonanone) — the natural male aggregation pheromone that attracts both sexes. RPW is the deadliest pest of coconut, date palm, and oil palm plantations because larvae bore invisibly inside the trunk crown until the tree collapses. Mass trapping with aggregation lures + Weevil Defender synergists eliminates adult breeding populations before egg laying in wounds.',
    fieldLife: '60–90 days (2–3 months active release)',
    shelfLife: '2 years from production date',
    trapsPerAcre: '3–4 traps per acre (Plantation Grid)',
    monitoringDensity: '1–2 traps per acre',
    massTrappingDensity: '3–4 traps per acre',
    recommendedTraps: ['Palm Trap (Plam Trap / Bucket Trap)', 'Soil Trap'],
    badge: 'Aggregation Pheromone (M+F)',
    activeIngredient: '4-Methyl-5-nonanol & 4-Methyl-5-nonanone (Ferrugineol Blend)',
    chemicalStructure: 'C10H22O / C10H20O',
    casNumber: '154159-54-9',
    isomericPurity: '≥99.0% High-Potency Aggregation Formulation',
    dispenserType: 'High-volume controlled-evaporation membrane pouch',
    modeOfAction: 'Aggregation pheromone attracting both male and female adult weevils from a distance of over 100 meters into bucket traps.',
    economicThreshold: {
      monitoringTrigger: '>1 weevil / trap / fortnight: Immediate tree-by-tree visual crown inspection',
      massTrappingTrigger: '>3 weevils / trap / month: Deploy 3–4 Palm Traps per acre across grove',
      criticalIntervention: '>8 weevils / trap / month: Apply bio-repellent trunk pastes and wound sealing'
    },
    mrlStatus: 'Zero Residue in Coconut Water, Copra, or Palm Oil',
    beneficialSafety: 'Completely species-specific; harmless to birds, bees, and palm pollinators',
    iconName: 'Palmtree',
    imageUrl: '/images/RPW.jpeg',
    trapImageUrl: '/images/palm.png',
    imageAlt: 'Red Palm Weevil Lure (RPW) for Coconut and Oil Palm Gardens',
    targetCrops: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'],
    targetCropDetails: {
      other: ['Saves mature and growing palms from lethal internal stem rotting and crown collapse']
    },
    applicationInstructions: [
      'Hang the RPW lure and Weevil Defender bottle inside the Palm Trap bucket hook.',
      'Add 1 liter of water with crushed fermenting fruit (pineapple/banana) or mild detergent to the bucket floor.',
      'Hang trap 1.0–1.5 meters high on palm trunk in shaded areas, or bury bottom halfway into ground.',
      'Deploy 3–4 traps per acre.',
      'Replenish water monthly and replace lure every 60–90 days.'
    ],
    storageAndDisposal: [
      'Store sealed in a cool, dry place away from direct sunlight.',
      'Refrigerate for multi-year stability.',
      'Dispose of used pouches responsibly.'
    ]
  },
  {
    id: 'weevil-defender',
    name: 'Weevil Defender (RPW Magnet Co-Attractant Synergist)',
    scientificName: 'Ethyl Acetate Synergist Enhancer',
    pestCommonName: 'Weevil Defender / RPW Magnet Synergist',
    category: 'enhancers',
    shortDescription: 'Sealed slow-release Ethyl Acetate bottle that multiplies Red Palm Weevil lure capture rates by 300–500%.',
    fullDescription: 'Weevil Defender is a specialized kairomone synergist containing 99.8% pure Ethyl Acetate housed in a proprietary slow-diffusion bottle. In nature, weevils are drawn to fermenting palm sap volatiles in combination with aggregation pheromones. Pairing Weevil Defender alongside the RPW lure inside the Palm Trap creates a powerful synergistic scent signature, boosting trap catch rates by 3x to 5x over pheromones alone.',
    fieldLife: '60–90 days (Synchronized with RPW lure)',
    shelfLife: '2 years if sealed in cool storage',
    trapsPerAcre: '1 Weevil Defender bottle per Palm Trap (3–4 per acre)',
    monitoringDensity: '1 bottle per monitoring Palm Trap',
    massTrappingDensity: '3–4 bottles per acre (1 per trap)',
    recommendedTraps: ['Used inside Palm Trap (Plam Trap) in synergy with RPW Lure'],
    badge: '3x–5x Synergist Boost',
    activeIngredient: 'Ethyl Acetate (Volatile Plant Kairomone Co-Attractant)',
    chemicalStructure: 'CH3COOCH2CH3',
    casNumber: '141-78-6',
    isomericPurity: '≥99.8% Analytical Grade Purity',
    dispenserType: 'Patented micro-diffusion membrane sealed bottle (Zero puncture required)',
    modeOfAction: 'Releases continuous ethyl acetate vapor mimicking wounded palm sap fermentation, multiplying the olfactory attraction of Ferrugineol pheromone exponentially.',
    economicThreshold: {
      monitoringTrigger: 'Deploy inside every RPW monitoring trap for maximum sensitivity',
      massTrappingTrigger: 'Essential component in all 3–4 Palm Traps per acre in infested plantations',
      criticalIntervention: 'Combine with sanitary burning of dying palms to eliminate internal grubs'
    },
    mrlStatus: 'Zero Toxic Residue — Natural Botanical Volatile Mimic',
    beneficialSafety: 'Safe for non-target wildlife, birds, and beneficial insects',
    iconName: 'Zap',
    imageUrl: '/images/palm.png',
    trapImageUrl: '/images/RPW.jpeg',
    imageAlt: 'Weevil Defender RPW Magnet Ethyl Acetate Enhancer Bottle for Palm Protection',
    targetCrops: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'],
    applicationInstructions: [
      'Tie the Weevil Defender bottle alongside the RPW lure inside the Palm Trap.',
      'DO NOT open the cap or puncture any holes in the bottle; the vapor diffuses automatically through the permeable container walls.',
      'Use 1 bottle per Palm Trap.',
      'Replace every 60–90 days along with the RPW pheromone lure.'
    ],
    storageAndDisposal: [
      'Store in a cool, ventilated area away from heat sources and direct sunlight.',
      'Do not pierce or crush containers.',
      'Dispose of empty plastic bottles in plastic recycling.'
    ]
  },
  {
    id: 'rhinoceros-beetle',
    name: 'Rhinoceros Beetle Pheromone Lure (RB)',
    scientificName: 'Oryctes rhinoceros (Linnaeus)',
    pestCommonName: 'Rhinoceros Beetle / Black Palm Beetle (Rhinoceros Bettle)',
    category: 'plantation',
    shortDescription: 'Aggregation attractant (Ethyl 4-methyloctanoate) protecting coconut and palm fronds from bore damage.',
    fullDescription: 'The Rhinoceros Beetle Pheromone Lure is formulated with pure Ethyl 4-methyloctanoate (Oryctalure), the proven aggregation pheromone for Oryctes rhinoceros. Adult beetles bore into the central spindle of young and mature palms, cutting characteristic geometric "V-shaped" notches across fronds and weakening crowns to secondary fungal rots. Deploying PVC or bucket traps with RB lures captures both male and female beetles from surrounding compost and tree crowns.',
    fieldLife: '60–90 days active diffusion',
    shelfLife: '2 years if stored properly',
    trapsPerAcre: '3–4 traps per acre',
    monitoringDensity: '1–2 traps per acre',
    massTrappingDensity: '3–4 traps per acre',
    recommendedTraps: ['Palm Trap (Plam Trap)', 'PVC Pipe Trap', 'Bucket Trap'],
    badge: 'Frond & Crown Guard',
    activeIngredient: 'Ethyl 4-methyloctanoate (Oryctalure)',
    chemicalStructure: 'C11H22O2 (Male Aggregation Pheromone)',
    casNumber: '56196-53-3',
    isomericPurity: '≥99.0% High Isomeric Formulation',
    dispenserType: 'High-capacity sealed vapor release sachet',
    modeOfAction: 'Releases long-distance aggregation scent attracting male and female Rhinoceros beetles into textured entry trap buckets.',
    economicThreshold: {
      monitoringTrigger: '>1 beetle / trap / month: Check organic compost pits and cow dung heaps for grubs',
      massTrappingTrigger: '>3 beetles / trap / month: Deploy 3–4 traps per acre throughout monsoon/flight season',
      criticalIntervention: '>6 beetles / trap / month: Treat breeding heaps with Metarhizium anisopliae fungus'
    },
    mrlStatus: 'Zero Chemical Residue — Non-Toxic Palm Agro-Forestry Standard',
    beneficialSafety: 'Safe for beneficial plantation fauna and pollinators',
    iconName: 'Trees',
    imageUrl: '/images/RB.jpeg',
    trapImageUrl: '/images/palm.png',
    imageAlt: 'Rhinoceros Beetle Pheromone Lure (RB) for Coconut and Oil Palm',
    targetCrops: ['Coconut', 'Oil Palm', 'Date Palm'],
    targetCropDetails: {
      other: ['Prevents classic V-shaped frond cuts and crown boring in young & mature palms']
    },
    applicationInstructions: [
      'Hang the lure inside the Palm Trap bucket or top baffle of a PVC vane trap.',
      'Mount trap 1.5–2 meters above ground on palm trunks or boundary posts in shaded areas.',
      'Deploy 3–4 traps per acre.',
      'Empty beetles fortnightly.',
      'Replace lure every 60–90 days.'
    ],
    storageAndDisposal: [
      'Store in original foil package in cool dark location below 20°C.',
      'Dispose of spent lures cleanly.'
    ]
  },
  {
    id: 'scirpophaga-incertulas',
    name: 'Rice Yellow Stem Borer Pheromone Lure (Scirpophaga incertulas)',
    scientificName: 'Scirpophaga incertulas (Walker)',
    pestCommonName: 'Rice Yellow Stem Borer / Paddy Stem Borer (YSB)',
    category: 'field_crops',
    shortDescription: 'High-purity pheromone solution for paddy/rice farmers to prevent "dead hearts" and "white heads".',
    fullDescription: 'The Scirpophaga incertulas Pheromone Lure utilizes the natural 3:1 ratio of (Z)-11-hexadecenal and (Z)-9-hexadecenal. Yellow Stem Borer causes severe rice crop devastation: larvae bore into tillers producing "dead hearts" in vegetative stages and empty "white heads" at panicle emergence. Pheromone trapping provides precise biofix forecasting for egg hatch and massively reduces adult moth density, protecting high-value Basmati and non-Basmati rice fields without toxic pesticide runoff.',
    fieldLife: '30–45 days',
    shelfLife: '2 years under cool storage',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–5 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Funnel Trap', 'Water Trap', 'Solar Light Trap'],
    badge: 'Paddy Stem Protector',
    activeIngredient: '(Z)-11-Hexadecenal & (Z)-9-Hexadecenal (3:1 Ratio)',
    chemicalStructure: 'C16H30O',
    casNumber: '53939-28-9 / 56219-04-6',
    isomericPurity: '≥99.3% Isomerically Pure',
    dispenserType: 'Micro-pore polymer ampoule / Rubber Septum',
    modeOfAction: 'Releases calling female sex pheromone attracting nocturnal male stem borer moths into water or funnel traps.',
    economicThreshold: {
      monitoringTrigger: '>1 moth / trap / day or 1 egg mass / m²: Begin water management & egg parasitoid releases',
      massTrappingTrigger: '>5 moths / trap / day: Deploy 10 traps/acre across paddy tillering to panicle stage',
      criticalIntervention: '>10% dead hearts or >2% white heads: Integrate bio-formulation'
    },
    mrlStatus: 'Zero Pesticide Residue — Compliant with Strict Export MRLs (EU/US Rice Standards)',
    beneficialSafety: 'Safe for aquatic fish, frogs, spiders, and Trichogramma japonicum parasitoids',
    iconName: 'Sprout',
    imageUrl: '/images/YSB.jpeg',
    trapImageUrl: '/images/Funnel Trap.png',
    imageAlt: 'Rice Yellow Stem Borer Lure (YSB) for Paddy Rice Fields',
    targetCrops: ['Paddy / Rice', 'Basmati Rice', 'Deepwater Rice', 'Wild Rice varieties'],
    targetCropDetails: {
      other: ['Protects vegetative tillers and grain panicles from borer drying']
    },
    applicationInstructions: [
      'Install funnel or water traps 15–20 days after seedling transplanting.',
      'Maintain trap height 30 cm above water / canopy level on bamboo poles.',
      'Deploy 8–10 traps per acre uniformly across paddy bunds.',
      'Inspect catch weekly and clean sleeves.',
      'Replace lure every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store in original pouch away from heat and moisture.',
      'Dispose of spent septa responsibly.'
    ]
  },
  {
    id: 'spodoptera-frugiperda',
    name: 'Fall Army Worm Pheromone Lure (Spodoptera frugiperda)',
    scientificName: 'Spodoptera frugiperda (J.E. Smith)',
    pestCommonName: 'Fall Army Worm (FAW)',
    category: 'field_crops',
    shortDescription: 'Multi-component pheromone blend to safeguard maize, sweet corn, sorghum, and sugarcane from FAW.',
    fullDescription: 'The Spodoptera frugiperda Pheromone Lure incorporates the high-efficiency multi-component semiochemical blend of (Z)-9-tetradecenyl acetate and (Z)-7-dodecenyl acetate. Fall Armyworm is an aggressive invasive pest capable of devastating maize whorls and cobs within days. Deploying funnel traps with this species-calibrated lure ensures real-time flight tracking, early warning, and massive adult male elimination before eggs can be laid inside leaf whorls.',
    fieldLife: '30–45 days active release',
    shelfLife: '2 years under refrigeration',
    trapsPerAcre: '8–10 per acre (Mass Trapping)',
    monitoringDensity: '4–5 traps per acre',
    massTrappingDensity: '8–10 traps per acre',
    recommendedTraps: ['Funnel Trap', 'Solar Light Trap'],
    badge: 'Maize & Corn Guardian',
    activeIngredient: '(Z)-9-Tetradecenyl acetate & (Z)-7-Dodecenyl acetate (Calibrated Blend)',
    chemicalStructure: 'C16H30O2 / C14H26O2',
    casNumber: '16725-53-4 / 14959-86-5',
    isomericPurity: '≥99.1% High Chemical Purity',
    dispenserType: 'Controlled-release rubber septum / polymeric capsule',
    modeOfAction: 'Releases species-specific female sex pheromone plume that draws adult male FAW moths into dry funnel collection sleeves.',
    economicThreshold: {
      monitoringTrigger: '>3 moths / trap / week: Begin scouting maize leaf whorls for pinholes and frass',
      massTrappingTrigger: '>8 moths / trap / week: Deploy full mass trapping grid across maize vegetative stages',
      criticalIntervention: '>20 moths / trap / week or >10% whorl damage: Apply biopesticides or Bacillus thuringiensis'
    },
    mrlStatus: 'Zero Chemical Residue — Safe for Sweet Corn, Grain, and Fodder Crops',
    beneficialSafety: 'Safe for Chelonus insularis, earwigs, and Trichogramma parasitoids',
    iconName: 'Zap',
    imageUrl: '/images/FAW.jpeg',
    trapImageUrl: '/images/Funnel Trap.png',
    imageAlt: 'Fall Army Worm Lure (FAW) for Maize and Corn Protection',
    targetCrops: ['Maize / Corn', 'Sweet Corn', 'Sorghum', 'Sugarcane', 'Millets', 'Fodder Crops'],
    targetCropDetails: {
      additional: ['Prevents destructive whorl feeding and central cob damage during vegetative and reproductive stages']
    },
    applicationInstructions: [
      'Install funnel traps just above the maize crop canopy at knee-high stage.',
      'Deploy 8–10 traps per acre across the field grid.',
      'Raise trap poles as maize grows to maintain 30 cm clearance above crop top.',
      'Empty collection sleeves weekly.',
      'Replace lures every 30–45 days.'
    ],
    storageAndDisposal: [
      'Store sealed in a refrigerator (4°C) or dark cool storage below 20°C.',
      'Dispose of exhausted dispensers in compliance with local regulations.'
    ]
  }
];

export const TRAP_TYPES: TrapType[] = [
  {
    id: 'fruit-fly-trap',
    name: 'Fruit Fly Trap (Dome / Bottle Fly Trap)',
    category: 'fruit_fly_trap',
    bestFor: 'Bactrocera dorsalis (Fruit Fly) & Bactrocera cucurbitae (Melon Fly)',
    suitableLures: ['Melon Fly (MF)', 'Oriental Fruit Fly (OFF)'],
    description: 'A heavy-duty dome trap featuring inverted conical entry ports around the perimeter and a top lure basket. Flies enter easily following the pheromone vapor trail but cannot locate the exit once inside.',
    features: [
      'Inverted cone entrances allow 360-degree fly entry while preventing escape',
      'Transparent bottom reservoir for effortless catch inspection without opening',
      'Rainproof hooded canopy keeps the lure dry and potent for 3 full months',
      'Durable for multi-season reuse across mango, guava, and cucurbit gardens'
    ],
    icon: 'ShieldCheck',
    imageUrl: '/images/Fruit Fly Trap.jpg',
    fieldSetupAdvice: 'Hang inside the shaded tree canopy 1.5–2m above ground. In vegetable vines, suspend 1m above ground on bamboo poles.',
    recommendedHeight: '1.5–2.0 meters in trees | 1.0 meter in vines',
    dosagePerAcre: '10–15 Traps / Acre',
    servicingProtocol: 'Empty dead flies every 10–14 days. Wash reservoir with clean water if dust accumulates. Replace lure every 90 days.',
    aerodynamicProfile: 'Rain-shielded dome with multi-directional inverted funnels'
  },
  {
    id: 'vertical-fruit-fly-trap',
    name: 'Vertical Fruit Fly Trap (Cylindrical Hanging Trap)',
    category: 'fruit_fly_trap',
    bestFor: 'High-Density Vine Trellises, Polyhouses & Orchard Inter-Row Trapping',
    suitableLures: ['Melon Fly (MF)', 'Oriental Fruit Fly (OFF)'],
    description: 'A specialized vertical cylindrical flight-interception trap designed with lateral entry funnels along its vertical axis. Specifically engineered for vertical vegetable vine trellises (gourds, cucumber) and dense orchard tree canopies to intercept flies during vertical rising flight.',
    features: [
      'Vertical aerodynamic profile fits snugly into dense plant foliage without branch snagging',
      'Multi-tier lateral entry ports maximize catch across the full vertical canopy layer',
      'Top hanging loop with quick-twist base container for swift field emptying',
      'UV-stabilized clear polymer reservoir provides immediate catch visibility'
    ],
    icon: 'Sparkles',
    imageUrl: '/images/Fruit Fly Trap.jpg',
    fieldSetupAdvice: 'Suspend vertically along vine trellis posts or branch forks in shaded middle canopy.',
    recommendedHeight: '1.2–1.8 meters from ground',
    dosagePerAcre: '10–15 Traps / Acre',
    servicingProtocol: 'Twist-lock bottom container allows rapid emptying in under 10 seconds per trap.',
    aerodynamicProfile: 'Streamlined vertical cylinder reducing branch entanglement'
  },
  {
    id: 'funnel-trap',
    name: 'Funnel Trap (Sleeve Trap / Heli-Trap)',
    category: 'funnel_trap',
    bestFor: 'Helicoverpa armigera, Spodoptera litura, Fall Armyworm, Pink Bollworm & Stem Borer',
    suitableLures: ['Cotton Boll Worm (CBW)', 'Tobacco Cut Worm (TCW)', 'Fall Army Worm (FAW)', 'Pink Bollworm (PBW)', 'Rice Yellow Stem Borer (YSB)'],
    description: 'Consists of an umbrella canopy cap with lure housing, a smooth conical funnel entrance, and a transparent plastic collection sleeve bag underneath. Insects fly toward the lure, strike the canopy baffle, and drop down through the funnel into the sleeve.',
    features: [
      'Completely dry operation — requires no water or daily maintenance',
      'Holds hundreds of large moths per week with transparent catch visibility',
      'Reusable durable funnel body with replaceable sleeve bags',
      'Ideal for large acreage field crops (Cotton, Maize, Soybean, Pulses, Paddy)'
    ],
    icon: 'Filter',
    imageUrl: '/images/Funnel Trap.png',
    fieldSetupAdvice: 'Tie securely to a bamboo stick or stake using the top loop. Ensure the bottom sleeve is tied closed with the included cord.',
    recommendedHeight: '30–45 cm above the crop canopy',
    dosagePerAcre: '8–10 Traps / Acre',
    servicingProtocol: 'Untie bottom cord to empty accumulated moths weekly. Inspect lure placement in top cage.',
    aerodynamicProfile: 'Wide baffle canopy creating downward vortex into smooth funnel throat'
  },
  {
    id: 'water-trap-tuta',
    name: 'Water Trap (Tuta Special Edition)',
    category: 'water_trap',
    bestFor: 'Tuta absoluta (Tomato Leaf Miner / Pinworm) in Open Fields & Polyhouses',
    suitableLures: ['Tomato Leaf Miner (TLM)'],
    description: 'A specialized large-surface water pan with a central elevated lure basket and built-in drainage overflow ports. Moths drawn by the pheromone plume flutter into the water surface (with 2-3 drops of oil or soap) and are immobilized immediately.',
    features: [
      'Specially calibrated height and surface area for microlepidopteran Tuta moths',
      'Zero insecticide residue or chemical hazard',
      'High catch capacity handling thousands of moths during peak flushes',
      'Heavy-duty UV-stabilized virgin polymer resistant to sun degradation'
    ],
    icon: 'Droplet',
    imageUrl: '/images/WATER TRAP Tuta.jpeg',
    fieldSetupAdvice: 'Fill basin with clean water up to 2cm below rim. Add 10-15ml neem oil or mild detergent. Mount 20-30cm above crop canopy.',
    recommendedHeight: '20–30 cm above crop canopy',
    dosagePerAcre: '8–10 Traps / Acre',
    servicingProtocol: 'Add water weekly to offset evaporation. Skim dead moths every 5–7 days.',
    aerodynamicProfile: 'Shallow broad water basin with central lure plume dispersal'
  },
  {
    id: 'water-trap-luci',
    name: 'Water Trap (Eggplant Borer / Luci Edition)',
    category: 'water_trap',
    bestFor: 'Leucinodes orbonalis (Eggplant Fruit & Shoot Borer)',
    suitableLures: ['Egg Plant Borer (EPB / Luci)'],
    description: 'A rugged yellow-tinted water pan engineered specifically for brinjal fields. Features a secure central lure suspension clip that keeps the lure dry while maximizing omnidirectional scent dispersal across the field.',
    features: [
      'Yellow optical attraction base combined with chemical pheromone plume',
      'Robust stake bracket for rapid wooden or bamboo pole mounting',
      'Non-clogging overflow slits that maintain correct water level during rain',
      'Protects tender growing eggplant shoots from internal boring'
    ],
    icon: 'Droplet',
    imageUrl: '/images/WATER TRAP LUCI.jpeg',
    fieldSetupAdvice: 'Mount securely on bamboo poles in the field. Position traps across the grid with 15m spacing.',
    recommendedHeight: 'Level with the upper one-third of the brinjal plant',
    dosagePerAcre: '8–10 Traps / Acre',
    servicingProtocol: 'Maintain thin layer of oil or soap water to ensure instant moth knockdown.',
    aerodynamicProfile: 'Vibrant yellow pan with storm-safe overflow slots'
  },
  {
    id: 'water-trap-dbm',
    name: 'Water Trap (Diamond Back Moth Edition)',
    category: 'water_trap',
    bestFor: 'Plutella xylostella (Diamond Back Moth) in Cabbage, Cauliflower & Mustard',
    suitableLures: ['Diamond Back Moth (DBM)'],
    description: 'A low-profile water basin designed for cruciferous vegetable beds. Traps male DBM moths effectively during evening flights, interrupting egg laying on young cabbage leaves and curds.',
    features: [
      'Low aerodynamic profile that stays stable in open cabbage fields',
      'Central clip holds DBM lure precisely 2cm above the water surface',
      'Quick water drain plug for effortless washing and refilling',
      'Prevents destructive windowing leaf damage and crop loss'
    ],
    icon: 'Droplet',
    imageUrl: '/images/WATER TRAP DBM.jpeg',
    fieldSetupAdvice: 'Install 15-20 days after transplanting cabbage seedlings. Maintain water level weekly.',
    recommendedHeight: '15–20 cm above cabbage/cauliflower heads',
    dosagePerAcre: '8–12 Traps / Acre',
    servicingProtocol: 'Check and replenish water after heavy rains or dry spells.',
    aerodynamicProfile: 'Low ground-clearance basin resistant to field gusts'
  },
  {
    id: 'palm-trap',
    name: 'Palm Trap (Plam Trap / RPW & Rhinoceros Beetle Bucket Trap)',
    category: 'palm_trap',
    bestFor: 'Coconut, Arecanut, Date Palm & Oil Palm Plantations',
    suitableLures: ['Red Palm Weevil (RPW)', 'Weevil Defender (RPW Magnet Synergist)', 'Rhinoceros Beetle (RB)'],
    description: 'A rugged UV-resistant bucket trap engineered with perimeter entry openings wrapped in rough textured jute/mesh. Accommodates both the aggregation pheromone dispenser and the Weevil Defender synergist bottle.',
    features: [
      'Special textured exterior mimics palm bark so weevils climb inside effortlessly',
      'Dual hanging hook holds both RPW lure and Weevil Defender slow-release bottle',
      'Can be buried halfway into soil or hung on palm trunks at 1–1.5m height',
      'Crucial defense preventing lethal internal palm rot and trunk hollows'
    ],
    icon: 'Palmtree',
    imageUrl: '/images/palm.png',
    fieldSetupAdvice: 'Add 1 liter of water mixed with crushed pineapple/toddy or detergent inside bucket floor. Hang in shaded grove spots.',
    recommendedHeight: '1.0–1.5 meters on palm trunk or semi-buried in ground',
    dosagePerAcre: '3–4 Traps / Acre',
    servicingProtocol: 'Empty captured weevils fortnightly; replace food bait fermentation liquid monthly.',
    aerodynamicProfile: 'High-capacity bucket with textured perimeter entry funnels'
  },
  {
    id: 'glass-trap',
    name: 'Glass Trap (Glass McPhail Transparent Trap)',
    category: 'fruit_fly_trap',
    bestFor: 'Orchards, Citrus, Mango & Exotic Fruit Fly Monitoring',
    suitableLures: ['Oriental Fruit Fly (OFF)', 'Melon Fly (MF)'],
    description: 'A classic high-precision dome trap with transparent optical walls and an invaginated bottom entrance. Maximizes light entry to confuse trapped flies, ensuring rapid knockdown into the lower containment well.',
    features: [
      'Crystal clear optical transparency creates visual lure enhancement',
      'Weatherproof seal withstands tropical storms and extreme UV index',
      'Quick twist-lock base for rapid cleaning and rebaiting',
      'Preferred by organic certification inspectors and commercial orchardists'
    ],
    icon: 'Sparkles',
    imageUrl: '/images/Glass Trap.png',
    fieldSetupAdvice: 'Hang on the north-eastern or shaded inner branches of fruit trees.',
    recommendedHeight: '1.5–2.0 meters from ground',
    dosagePerAcre: '8–12 Traps / Acre',
    servicingProtocol: 'Clear insects weekly for accurate biofix data and research reporting.',
    aerodynamicProfile: 'Invaginated bottom cone optimizing light transmission and fly retention'
  },
  {
    id: 'solar-trap',
    name: 'Solar Light Trap (Solar Automatic Light & Pheromone Trap)',
    category: 'solar_trap',
    bestFor: 'Automated Nocturnal Pest Trapping in Field Crops, Vegetables & Horticulture',
    suitableLures: ['Cotton Boll Worm', 'Tobacco Cut Worm', 'Tomato Leaf Miner', 'Stem Borers', 'Fall Armyworm'],
    description: 'An advanced dual-action eco-friendly trap combining an auto-charging solar panel, intelligent dusk-to-dawn LED optical attraction frequencies, and a pheromone lure holder over a high-capacity collection basin.',
    features: [
      'Dual attraction: Specific optical wavelength LED + targeted sex pheromone',
      'Integrated solar panel with rechargeable lithium battery — zero electric cabling',
      'Automatic dusk-to-dawn photosensor switch (turns on automatically at night)',
      'High eradication volume for major night-flying moths and beetles'
    ],
    icon: 'Sun',
    imageUrl: '/images/SOLAR TRAP.jpeg',
    fieldSetupAdvice: 'Place on a sturdy central pole in the middle of the field with unshaded solar exposure.',
    recommendedHeight: '1.5 meters above ground',
    dosagePerAcre: '1–2 Solar Traps / Acre',
    servicingProtocol: 'Clean solar panel glass monthly; empty catchment container weekly.',
    aerodynamicProfile: '360-degree illuminated funnel with rainproof solar cap'
  },
  {
    id: 'delta-trap',
    name: 'Delta Trap (Triangular Prism with Sticky Liner)',
    category: 'delta_trap',
    bestFor: 'Precision Tomato Leaf Miner Monitoring, Polyhouses & Clean Room Orchards',
    suitableLures: ['Tomato Leaf Miner (TLM)', 'Diamond Back Moth (DBM)', 'Pink Bollworm (PBW)'],
    description: 'A triangular prism housing constructed of waterproof UV-resistant corrugated polypropylene with a replaceable high-tack insect glue insert on the floor and a central lure suspension wire under the roof ridge.',
    features: [
      'Protected interior prevents dust, direct rain, and wind from neutralizing glue',
      'High-tack polybutene non-drying glue holds insects securely',
      'Standard IPM scientific tool for counting and economic threshold calculation',
      'Lightweight and easy to hang in greenhouses, polyhouses, and fruit trees'
    ],
    icon: 'Triangle',
    imageUrl: '/images/Delta Trap.jpeg',
    fieldSetupAdvice: 'Fold into triangular prism, insert sticky liner face up, hang lure from roof hook, and suspend in crop row.',
    recommendedHeight: 'Greenhouse trellis height or 1m above ground',
    dosagePerAcre: '6–8 Traps / Acre (Monitoring) | 12–16 (Mass Trapping)',
    servicingProtocol: 'Replace sticky insert when 60% covered or after 4–6 weeks.',
    aerodynamicProfile: 'Triangular wind-shedding prism with internal microclimate'
  }
];

export const BIO_TOOLS_DATA: BioToolItem[] = [
  {
    id: 'sticky-sheets',
    name: 'Dual-Color Sticky Trapping Sheets (Yellow & Blue)',
    category: 'sticky_sheets',
    tagline: 'High-tack, UV-resistant sticky sheets for sucking pest mass trapping and monitoring',
    description: 'Premium quality non-drying sticky sheets formulated with specific optical light-reflecting pigments (Yellow for Whiteflies, Aphids, Leafminers; Blue for Thrips). Coated on both sides with high-tack, non-toxic, drip-free insect glue that stays sticky even under direct sun and rain.',
    targetPests: ['Whiteflies', 'Thrips', 'Aphids', 'Jassids', 'Leafminers', 'Fruit Gnats'],
    suitableCrops: ['Greenhouses & Polyhouses', 'Tomato & Capsicum', 'Chilli & Onion', 'Floriculture', 'Nurseries', 'Open Fields'],
    specs: {
      color: 'Bright Yellow / Vivid Blue (Dual Available)',
      dimensions: '15 cm x 20 cm / 20 cm x 30 cm',
      life: '45–60 days active field tackiness',
      applicationRate: '15–20 sheets per acre (Open Field) | 1 sheet per 50 sq.m (Polyhouse)'
    },
    imageUrl: '/images/Sticky Sheets.png',
    highlights: [
      'Dual-side high-tack glue coverage',
      'Non-drying, non-toxic, and rainproof',
      'Rapidly reduces sucking pest populations and virus transmission',
      'Easy hanging with pre-punched holes and ties included'
    ]
  },
  {
    id: 'sticky-rolls',
    name: 'Continuous Sticky Barrier Rolls (Yellow & Blue Ribbons)',
    category: 'sticky_rolls',
    tagline: 'Perimeter defense and row-length sticky barriers for polyhouses and orchards',
    description: 'Long continuous ribbon rolls of high-tack sticky film designed to be unfurled along greenhouse ventilation sides, polyhouse boundaries, or between orchard tree rows. Creates an inescapable sticky perimeter barrier that captures incoming flying pest swarms before they reach crops.',
    targetPests: ['Thrips', 'Whiteflies', 'Fungus Gnats', 'Flying Aphids', 'Leafhopper Swarms'],
    suitableCrops: ['Hi-Tech Polyhouses', 'Net Houses', 'Orchards', 'Vegetable Tunnels', 'Hydroponic Farms'],
    specs: {
      color: 'Vibrant Insect-Attractant Yellow & Royal Blue',
      dimensions: '100 meters / 150 meters length x 15cm / 30cm width',
      life: 'Full crop cycle (60–90 days)',
      applicationRate: 'Install along greenhouse perimeter vents and entrance bays'
    },
    imageUrl: '/images/Sticky Rolls.png',
    highlights: [
      'Continuous unbroken perimeter protection',
      'High tensile polymer that does not tear in wind',
      'Reduces need for synthetic foliar sprays by up to 60%',
      'Massive surface area capturing millions of sucking insects'
    ]
  },
  {
    id: 'sticky-pouches',
    name: 'Pre-Packed Sticky Trap Pouches & Ready Liners',
    category: 'sticky_pouches',
    tagline: 'Convenient, peel-and-hang moisture-barrier packed sticky traps for swift farm setup',
    description: 'Hermetically sealed individual sticky trap pouches designed for quick deployment by farmers. Simply tear open the protective barrier, peel the release paper, and hang immediately in the field without getting sticky fingers.',
    targetPests: ['Whitefly', 'Thrips', 'Fruit Flies', 'Leafminers', 'Moths'],
    suitableCrops: ['Vegetables', 'Flowers', 'Kitchen Gardens', 'Commercial Plantations'],
    specs: {
      color: 'Custom Attractant Colors',
      dimensions: 'Standard Farmer Field Packets',
      life: '2 Years shelf life sealed | 60 days in field',
      applicationRate: '15–25 packs per acre'
    },
    imageUrl: '/images/Sticky Pouches.png',
    highlights: [
      'Moisture-sealed for prolonged shelf life',
      'Zero-mess peelable release film',
      'Convenient retail & dealer packaging',
      'Ideal for smallholders and large farming clusters alike'
    ]
  },
  {
    id: 'eco-glue-bottle',
    name: 'Eco Insect Trapping Adhesive & Glue Bottle',
    category: 'glue',
    tagline: 'Brush-on, non-drying bio-adhesive for custom traps, yellow boards, and tree trunk bands',
    description: 'A specially formulated brush-on polybutene sticky adhesive in convenient applicator bottles. Can be applied onto recycled plastic bottles, yellow buckets, plastic sheets, or directly as a sticky barrier ring around fruit tree trunks to stop crawling insects, ants, and mealybugs.',
    targetPests: ['Crawling Insects', 'Mealybug Crawlers', 'Ants', 'Whiteflies', 'Thrips on painted boards'],
    suitableCrops: ['Fruit Orchards (Mango, Citrus, Guava)', 'Coconut & Palm Groves', 'Custom Farm Traps'],
    specs: {
      color: 'Clear / Translucent viscous formula',
      dimensions: '500 ml / 1000 ml Easy-Pour Bottles',
      life: 'Up to 3 months active on surfaces',
      applicationRate: '1 Bottle covers 40–50 custom trap boards or 60+ tree trunk barrier rings'
    },
    imageUrl: '/images/Glue Bottle.png',
    highlights: [
      'Brush-on or roller application',
      'Resistant to rain wash-off and high tropical temperatures',
      'Non-hazardous, non-poisonous, and safe for organic farming',
      'Cost-effective for custom DIY on-farm trapping projects'
    ]
  }
];

export const IPM_PROTOCOLS: IPMProtocol[] = [
  {
    id: 'monitoring-biofix',
    title: 'Phase 1: Early Biofix Monitoring',
    subtitle: '4–6 Traps / Acre',
    step: '01',
    description: 'Deploy low-density monitoring traps across the perimeter and field interior at seedling emergence or early vegetative stage. Tracks the exact date of first adult male emergence (Biofix) to forecast egg laying and larval hatch 7–14 days in advance.',
    keyAction: 'Inspect traps weekly, log catches in field record book, and determine pest population trajectory.',
    standard: 'Suterra & Koppert Standard Biofix Protocols'
  },
  {
    id: 'mass-trapping',
    title: 'Phase 2: Mass Trapping & Population Crash',
    subtitle: '8–15 Traps / Acre',
    step: '02',
    description: 'When monitoring thresholds are crossed (>3–5 moths/trap/week), deploy the full mass trapping grid. By continuously removing 80–95% of reproductive adult males, female fertilization rates drop drastically, arresting egg deposition on leaves and fruits.',
    keyAction: 'Maintain clean traps and ensure uninterrupted lure pheromone vapor release throughout flowering and fruiting.',
    standard: 'Russell IPM Mass Trapping Field Guidelines'
  },
  {
    id: 'synergy-disruption',
    title: 'Phase 3: Synergistic Attract-and-Kill & Disruption',
    subtitle: 'High-Affinity Synergists',
    step: '03',
    description: 'In corporate plantations and high-pressure orchards, combine species aggregation pheromones with natural plant kairomone synergists (e.g. Weevil Defender Ethyl Acetate) or continuous optical perimeter sticky barriers to prevent pest migration.',
    keyAction: 'Dual-target aggregation + food volatiles to pull both male and female pests from over 100 meters away.',
    standard: 'International Pheromone Systems & Biobest Standards'
  }
];

export const PILLARS_DATA = [
  {
    icon: '🌿',
    title: 'Eco-Friendly & Zero Residue',
    subtitle: 'Zero MRL concerns, protecting food safety and export value.',
    detail: '100% species-specific semiochemicals that leave zero synthetic chemical residue on harvestable crops, fulfilling GlobalGAP, APEDA, and USDA NOP requirements.'
  },
  {
    icon: '💧',
    title: 'Farmer Economics & High ROI',
    subtitle: 'Solutions made for every grower, slashing spray expenditures.',
    detail: 'Reduces pesticide spray cycles by 40% to 70%, conserving water, machinery fuel, and labor while preventing pest resistance resurgence.'
  },
  {
    icon: '⚙️',
    title: 'Precision Bio-Rational Engineering',
    subtitle: 'Isomer-pure compounds with calibrated release matrices.',
    detail: 'Targeted synthetic pheromone blends with ≥99% isomeric purity, housed in UV-stabilized microporous dispensers for uninterrupted 30–90 day field performance.'
  },
  {
    icon: '🤝',
    title: 'Preserves Beneficial Ecology',
    subtitle: 'Non-toxic to pollinators, parasitoids, and soil biology.',
    detail: 'Completely safe for honeybees (Apis mellifera), Trichogramma parasitoids, Chrysoperla, and ladybird predators that maintain natural biological balance.'
  }
];

export const WE_STAND_FOR_PILLARS = [
  {
    icon: '💚',
    title: 'Crop Care Bio Solutions',
    description: 'Caring for Farmers. Caring for Nature.'
  },
  {
    icon: '🌱',
    title: 'Farmer First',
    description: 'Every decision begins with the farmer’s field reality and ends with their economic and harvest success.'
  },
  {
    icon: '🌿',
    title: 'Care for Nature',
    description: 'Dedicated to working in complete harmony with natural predator balances, biodiversity, and soil ecosystems.'
  },
  {
    icon: '🪲',
    title: 'Bio-Rational Innovation',
    description: 'World-class semiochemical synthesis, controlled-release dispensers, and sustainable trapping engineering.'
  },
  {
    icon: '🤝',
    title: 'Global Quality Standards',
    description: 'Benchmarked alongside world leaders in biological crop protection (Suterra, Koppert, Russell IPM, Biobest).'
  }
];
