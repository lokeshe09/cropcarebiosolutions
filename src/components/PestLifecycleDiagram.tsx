import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bug, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  Play, 
  Pause, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  FlaskConical, 
  RefreshCw,
  Zap,
  Activity,
  Layers,
  Info
} from 'lucide-react';
import { PageId } from '../types';

export interface PestLifecycleStage {
  id: 'adult' | 'egg' | 'larva' | 'pupa';
  name: string;
  scientificStage: string;
  duration: string;
  severity: 'Critical (Target Phase)' | 'High Damage' | 'Extremely High Damage' | 'Dormant Reservoir';
  damagePercent: number;
  description: string;
  cropDamageDetails: string;
  chemicalDrawback: string;
  bioTrapMechanism: string;
  trapEfficacy: string;
  farmerAction: string;
  targetIcon: string;
  positionAngle: number; // in degrees: 0 = right, 90 = bottom, 180 = left, 270 = top
}

export interface PestProfile {
  id: string;
  name: string;
  scientificName: string;
  majorCrops: string[];
  recommendedTrap: string;
  recommendedLure: string;
  lureActivePeriod: string;
  damageType: string;
  stages: PestLifecycleStage[];
}

const PEST_PROFILES: PestProfile[] = [
  {
    id: 'fruit-fly',
    name: 'Fruit Fly / Melon Fly',
    scientificName: 'Bactrocera dorsalis / cucurbitae',
    majorCrops: ['Mango', 'Guava', 'Cucumber', 'Gourds', 'Watermelon', 'Citrus'],
    recommendedTrap: 'Fruit Fly Trap (Dome / Cylinder)',
    recommendedLure: 'Methyl Eugenol / Cue-Lure Polymer Plugs',
    lureActivePeriod: '60–90 Days Continuous Vapor',
    damageType: 'Internal Pulp Rot & Oviposition Punctures',
    stages: [
      {
        id: 'adult',
        name: 'Adult Flies (Mating & Flight)',
        scientificStage: 'Imago (Mature Adult Phase)',
        duration: '15–30 Days',
        severity: 'Critical (Target Phase)',
        damagePercent: 40,
        description: 'Adult females seek ripening fruits to puncture skin and lay eggs. Males follow pheromone vapor trails for mating.',
        cropDamageDetails: 'Female oviposition punctures introduce opportunistic fungal spores and bacteria, leading to premature fruit drop.',
        chemicalDrawback: 'Adult flies are mobile and fly away during spraying; chemical contact requires toxic pesticide fogging.',
        bioTrapMechanism: 'Species-specific sex pheromone (Cue-Lure / Methyl Eugenol) attracts 95%+ of male flies into physical entry funnels where they are trapped, halting mating entirely.',
        trapEfficacy: '96–99% Male Capture & Mating Disruption',
        farmerAction: 'Hang 10–12 traps per acre at 1.5m height under shady canopy before flowering and initial fruit set.',
        targetIcon: 'Bug',
        positionAngle: 270 // Top
      },
      {
        id: 'egg',
        name: 'Egg Clutches (Sub-Cuticular)',
        scientificStage: 'Embryonic Development',
        duration: '1–2 Days',
        severity: 'High Damage',
        damagePercent: 20,
        description: 'Eggs are deposited in batches of 10–30 beneath the skin of fruits and vegetables.',
        cropDamageDetails: 'Hidden just 2–4mm beneath the epidermis, shielded from rain and external predatory insects.',
        chemicalDrawback: 'Pesticide sprays cannot penetrate the waxy fruit skin to reach eggs without leaving heavy chemical residues.',
        bioTrapMechanism: 'By eliminating adult males before mating, females lay non-viable or zero eggs, preventing the infestation before it starts.',
        trapEfficacy: 'Zero Egg Hatch via Male Depletion',
        farmerAction: 'Monitor trap count weekly. If catch exceeds 5 flies/trap/week, replenish pheromone lures immediately.',
        targetIcon: 'Sparkles',
        positionAngle: 0 // Right
      },
      {
        id: 'larva',
        name: 'Maggot / Larva (Internal Boring)',
        scientificStage: 'Instar I–III Larval Stage',
        duration: '6–10 Days',
        severity: 'Extremely High Damage',
        damagePercent: 95,
        description: 'Maggots hatch inside the pulp, feeding voraciously and causing rapid internal liquefaction and rot.',
        cropDamageDetails: 'Causes 80–100% loss of market value. Infected fruits turn mushy, develop secondary fungal decay, and drop.',
        chemicalDrawback: 'Systemic chemicals applied to kill internal maggots exceed permissible Maximum Residue Limits (MRL), causing export rejection.',
        bioTrapMechanism: '100% prevented! Zero adult reproduction means no maggots ever hatch to ruin fruit flesh.',
        trapEfficacy: 'Complete Preventative Protection',
        farmerAction: 'Remove and solarize any fallen or infested fruits to eliminate pupation into the soil.',
        targetIcon: 'Zap',
        positionAngle: 90 // Bottom
      },
      {
        id: 'pupa',
        name: 'Pupa (Soil Pupation Reservoir)',
        scientificStage: 'Puparium Phase',
        duration: '8–12 Days',
        severity: 'Dormant Reservoir',
        damagePercent: 15,
        description: 'Mature maggots exit fallen fruit and burrow 2–5cm into soil to pupate in protective shells.',
        cropDamageDetails: 'Serves as an overwintering and inter-seasonal reservoir for the next devastating outbreak.',
        chemicalDrawback: 'Soil drenching chemicals destroy beneficial soil biology, earthworms, and mycorrhizae.',
        bioTrapMechanism: 'Breaking the cycle eliminates soil pupation buildup, securing subsequent seasons from recurring attacks.',
        trapEfficacy: 'Long-Term Population Collapse',
        farmerAction: 'Combine with deep inter-row soil tillage and keep traps active continuously between seasons.',
        targetIcon: 'Layers',
        positionAngle: 180 // Left
      }
    ]
  },
  {
    id: 'fall-armyworm',
    name: 'Fall Armyworm (FAW)',
    scientificName: 'Spodoptera frugiperda',
    majorCrops: ['Maize (Corn)', 'Sweet Corn', 'Sugarcane', 'Sorghum', 'Millets'],
    recommendedTrap: 'Funnel Trap / Bucket Trap with Sleeve',
    recommendedLure: 'FAW 3-Component Pheromone Septa',
    lureActivePeriod: '45–60 Days Active Dispersion',
    damageType: 'Whorl Defoliation & Cob Borer Destruction',
    stages: [
      {
        id: 'adult',
        name: 'Adult Moth (Nocturnal Migration)',
        scientificStage: 'Adult Lepidoptera',
        duration: '10–14 Days',
        severity: 'Critical (Target Phase)',
        damagePercent: 35,
        description: 'Nocturnal moths can fly over 100km per generation. Female moths lay over 1,500 eggs across crop whorls.',
        cropDamageDetails: 'Rapid migration from neighboring fields quickly overwhelms young maize stands.',
        chemicalDrawback: 'Moths fly at night when farmers cannot spray; daytime spraying misses the active reproductive population.',
        bioTrapMechanism: 'Funnel traps loaded with high-purity FAW pheromone lures operate 24/7, intercepting nocturnal male moths during peak flight.',
        trapEfficacy: '95%+ Male Moth Trapping',
        farmerAction: 'Install 8–10 funnel traps per acre at crop canopy level starting at seedling germination.',
        targetIcon: 'Bug',
        positionAngle: 270
      },
      {
        id: 'egg',
        name: 'Egg Masses (Foliar Cottony Scales)',
        scientificStage: 'Oviposition & Incubation',
        duration: '2–4 Days',
        severity: 'High Damage',
        damagePercent: 25,
        description: 'Deposited on upper/lower leaf surfaces in clusters of 100–200 covered in protective gray scales.',
        cropDamageDetails: 'Scaly coatings protect eggs from heavy rainfall and light chemical foliar sprays.',
        chemicalDrawback: 'Chemical contact sprays wash off easily or fail to penetrate the thick protective maternal scale layer.',
        bioTrapMechanism: 'Mating disruption dramatically cuts fertile egg clusters by up to 90% across the planted acreage.',
        trapEfficacy: 'Up to 90% Reduction in Egg Batches',
        farmerAction: 'Scout weekly for egg masses. Early pheromone trap presence prevents exponential cluster explosion.',
        targetIcon: 'Sparkles',
        positionAngle: 0
      },
      {
        id: 'larva',
        name: 'Voracious Caterpillar (Whorl Eater)',
        scientificStage: 'Instar I–VI Whorl & Cob Borer',
        duration: '14–22 Days',
        severity: 'Extremely High Damage',
        damagePercent: 98,
        description: 'Caterpillars bore deep into the central maize whorl, feeding protected inside thick frass.',
        cropDamageDetails: 'Devours central growing leaves (shot-hole appearance), cuts tassels, and bores into mature cobs.',
        chemicalDrawback: 'Caterpillars hidden deep inside the central whorl are inaccessible to surface spray droplets.',
        bioTrapMechanism: 'Pre-emptive adult mass trapping prevents caterpillar emergence entirely, protecting central shoots.',
        trapEfficacy: 'Preventative Cob Protection',
        farmerAction: 'Maintain trap height as maize grows, elevating funnel traps to match upper leaf canopy.',
        targetIcon: 'Zap',
        positionAngle: 90
      },
      {
        id: 'pupa',
        name: 'Pupa (Soil Cocoon)',
        scientificStage: 'Pupation Phase in Soil',
        duration: '8–14 Days',
        severity: 'Dormant Reservoir',
        damagePercent: 10,
        description: 'Caterpillar burrows 2–8cm into soil, spinning a loose silk cocoon to undergo metamorphosis.',
        cropDamageDetails: 'Builds a dense soil seedbank enabling up to 4–6 generations in a single agricultural year.',
        chemicalDrawback: 'Repeated soil chemical applications cause beneficial microbial mortality and groundwater runoff.',
        bioTrapMechanism: 'Continuous multi-season pheromone monitoring suppresses successive generational emergence.',
        trapEfficacy: 'Multi-Generational Collapse',
        farmerAction: 'Deep summer plowing exposes pupae to natural sun desiccation and predatory birds.',
        targetIcon: 'Layers',
        positionAngle: 180
      }
    ]
  },
  {
    id: 'brinjal-borer',
    name: 'Brinjal Shoot & Fruit Borer (BSFB)',
    scientificName: 'Leucinodes orbonalis',
    majorCrops: ['Brinjal (Eggplant)', 'Tomato', 'Potato', 'Solanaceous Crops'],
    recommendedTrap: 'Water Trap / Delta Sticky Trap',
    recommendedLure: 'Lucinlure (E-11-hexadecenyl acetate)',
    lureActivePeriod: '45–60 Days Active Release',
    damageType: 'Wilted Terminal Shoots & Bored Fruit Excreta',
    stages: [
      {
        id: 'adult',
        name: 'Adult Moth (Nocturnal Mating)',
        scientificStage: 'Adult Micro-Lepidoptera',
        duration: '5–8 Days',
        severity: 'Critical (Target Phase)',
        damagePercent: 30,
        description: 'Small white moths with pinkish-brown spots, flying actively in the early evening and night.',
        cropDamageDetails: 'Deposits eggs on tender apical buds, flower calyxes, and young developing fruit surfaces.',
        chemicalDrawback: 'Farmers often spray 30–60 times per season with hazardous insecticides trying to kill adults, causing extreme resistance.',
        bioTrapMechanism: 'Lucinlure synthetic pheromone specifically lures male moths onto water trap soapy surfaces, breaking the mating chain with 0 pesticide sprays.',
        trapEfficacy: 'Over 92% Male Moth Entrapment',
        farmerAction: 'Deploy 12–15 water traps per acre at 0.5–1.0m height 2 weeks after transplanting.',
        targetIcon: 'Bug',
        positionAngle: 270
      },
      {
        id: 'egg',
        name: 'Eggs (Single / Paired on Buds)',
        scientificStage: 'Oviposition on Calyx & Shoots',
        duration: '3–5 Days',
        severity: 'High Damage',
        damagePercent: 15,
        description: 'Microscopic creamy white eggs laid singly on shoot tips and flower stalks.',
        cropDamageDetails: 'Fast hatching allows tiny larvae to immediately enter tender shoot tissue within hours.',
        chemicalDrawback: 'Contact window is less than 3 hours before larvae drill deep into plant stems.',
        bioTrapMechanism: 'Unfertilized females produce zero viable eggs, keeping stem tissue clean and robust.',
        trapEfficacy: 'Stops Stem Entry at Source',
        farmerAction: 'Keep soapy water in water traps fresh; add a few drops of vegetable oil on water surface.',
        targetIcon: 'Sparkles',
        positionAngle: 0
      },
      {
        id: 'larva',
        name: 'Larva (Stem & Fruit Borer)',
        scientificStage: 'Pinkish Caterpillar Inside Stem/Fruit',
        duration: '12–15 Days',
        severity: 'Extremely High Damage',
        damagePercent: 95,
        description: 'Pinkish caterpillar bores into tender shoots causing top wilting (drooping), and drills into fruits.',
        cropDamageDetails: 'Leaves boreholes plugged with insect excreta, making brinjals completely unfit for human consumption.',
        chemicalDrawback: 'Larvae live completely protected inside the fruit pulp; surface chemical spraying does not reach them.',
        bioTrapMechanism: 'Preventative mass trapping stops larval presence, saving up to 80% more marketable yield.',
        trapEfficacy: 'Zero Fruit Boreholes',
        farmerAction: 'Clip and destroy any early drooping shoot tips to eliminate rogue initial caterpillars.',
        targetIcon: 'Zap',
        positionAngle: 90
      },
      {
        id: 'pupa',
        name: 'Pupa (Tough Boat-Shaped Cocoon)',
        scientificStage: 'Pupation in Dried Leaves / Stem Base',
        duration: '7–10 Days',
        severity: 'Dormant Reservoir',
        damagePercent: 10,
        description: 'Spins a tough, dark brown boat-shaped cocoon on dried leaves or ground debris.',
        cropDamageDetails: 'Provides continuous year-round generational carryover in tropical solanaceous fields.',
        chemicalDrawback: 'Cocoon wall is impermeable to water-based synthetic insecticide sprays.',
        bioTrapMechanism: 'Elimination of mating collapses generational carryover between vegetable harvest seasons.',
        trapEfficacy: 'Continuous Crop Cycle Cleanliness',
        farmerAction: 'Field sanitation and clean crop residues between plantings alongside active pheromone traps.',
        targetIcon: 'Layers',
        positionAngle: 180
      }
    ]
  },
  {
    id: 'pink-bollworm',
    name: 'Pink Bollworm (PBW)',
    scientificName: 'Pectinophora gossypiella',
    majorCrops: ['Cotton (Bt & Non-Bt)', 'Okra', 'Hibiscus'],
    recommendedTrap: 'Funnel Trap / Delta Trap',
    recommendedLure: 'Gossyplure (ZZ/ZE-7,11-hexadecadienyl acetate)',
    lureActivePeriod: '60–90 Days Active Dispersion',
    damageType: 'Rosetted Flowers & Internal Boll Staining',
    stages: [
      {
        id: 'adult',
        name: 'Adult Moth (Gossyplure Attracted)',
        scientificStage: 'Adult PBW Moth',
        duration: '10–14 Days',
        severity: 'Critical (Target Phase)',
        damagePercent: 30,
        description: 'Small grayish-brown moths that mate during night hours in cotton fields.',
        cropDamageDetails: 'Lays eggs on squares, flowers, and tender young cotton bolls.',
        chemicalDrawback: 'Adults are highly resistant to standard pyrethroids and organophosphates.',
        bioTrapMechanism: 'Gossyplure pheromone lures create a powerful scent trail that directs males directly into funnel traps.',
        trapEfficacy: '96%+ Male PBW Interception',
        farmerAction: 'Install 8–10 funnel traps per acre at 45 days after sowing (squaring stage).',
        targetIcon: 'Bug',
        positionAngle: 270
      },
      {
        id: 'egg',
        name: 'Eggs (Laid on Cotton Bolls)',
        scientificStage: 'Foliar & Bract Oviposition',
        duration: '3–5 Days',
        severity: 'High Damage',
        damagePercent: 20,
        description: 'Laid under the calyx of green cotton bolls and leaf veins.',
        cropDamageDetails: 'Hatching larvae enter green bolls through tiny pinhole apertures that quickly heal over.',
        chemicalDrawback: 'Entry pinholes heal in 24 hours, locking the pest safely inside the boll where no chemical can touch it.',
        bioTrapMechanism: 'Mating suppression prevents female fertilization before cotton bolls reach susceptible size.',
        trapEfficacy: '90%+ Oviposition Prevention',
        farmerAction: 'Scout rosetted flowers (intertwined petals) to detect early threshold triggers.',
        targetIcon: 'Sparkles',
        positionAngle: 0
      },
      {
        id: 'larva',
        name: 'Pink Caterpillar (Lint & Seed Eater)',
        scientificStage: 'Internal Boll Caterpillar',
        duration: '10–14 Days',
        severity: 'Extremely High Damage',
        damagePercent: 96,
        description: 'Bright pink caterpillars eat internal cotton seeds, destroying the lint fiber structure.',
        cropDamageDetails: 'Causes "locule damage", stained unmarketable lint, and premature boll opening (cotton lock).',
        chemicalDrawback: 'Insecticide sprays cannot reach caterpillars inside sealed bolls; causes heavy farmer expenditure with 0 result.',
        bioTrapMechanism: 'Pheromone traps completely avert internal boll destruction, preserving premium long-staple cotton quality.',
        trapEfficacy: 'Protects White Gold Cotton Lint',
        farmerAction: 'Maintain trap line height with cotton canopy growth; replace lure every 60 days.',
        targetIcon: 'Zap',
        positionAngle: 90
      },
      {
        id: 'pupa',
        name: 'Pupa (Overwintering Diapause)',
        scientificStage: 'Diapausing Pupa in Seed Residues',
        duration: '8–12 Days (or Diapause for Months)',
        severity: 'Dormant Reservoir',
        damagePercent: 15,
        description: 'Caterpillar forms a cocoon inside double cotton seeds, diapausing throughout the dry winter.',
        cropDamageDetails: 'Survives ginning and storage to infest the following spring crop in massive numbers.',
        chemicalDrawback: 'Diapausing pupae inside stored cotton seeds are impervious to field sprays.',
        bioTrapMechanism: 'Breaking the seasonal summer breeding cycle stops diapause formation in ginning sheds.',
        trapEfficacy: 'Eradicates Off-Season Reservoir',
        farmerAction: 'Proper ginning waste destruction and off-season pheromone trap monitoring in seed godowns.',
        targetIcon: 'Layers',
        positionAngle: 180
      }
    ]
  }
];

interface PestLifecycleDiagramProps {
  onNavigate?: (page: PageId) => void;
  onExploreProducts?: () => void;
}

export const PestLifecycleDiagram: React.FC<PestLifecycleDiagramProps> = ({
  onNavigate,
  onExploreProducts
}) => {
  const [selectedPestId, setSelectedPestId] = useState<string>('fruit-fly');
  const [selectedStageId, setSelectedStageId] = useState<'adult' | 'egg' | 'larva' | 'pupa'>('adult');
  const [isPlayingSimulation, setIsPlayingSimulation] = useState<boolean>(false);
  const [showBioTrapDisruption, setShowBioTrapDisruption] = useState<boolean>(true);

  const currentPest = PEST_PROFILES.find(p => p.id === selectedPestId) || PEST_PROFILES[0];
  const currentStage = currentPest.stages.find(s => s.id === selectedStageId) || currentPest.stages[0];

  const stagesOrder: ('adult' | 'egg' | 'larva' | 'pupa')[] = ['adult', 'egg', 'larva', 'pupa'];

  // Automated simulation timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlayingSimulation) {
      interval = setInterval(() => {
        setSelectedStageId(prev => {
          const currentIndex = stagesOrder.indexOf(prev);
          const nextIndex = (currentIndex + 1) % stagesOrder.length;
          return stagesOrder[nextIndex];
        });
      }, 3500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlayingSimulation]);

  const handlePestSelect = (pestId: string) => {
    setSelectedPestId(pestId);
    setSelectedStageId('adult');
  };

  // Node coordinate calculations on a 400x400 SVG canvas
  const centerX = 200;
  const centerY = 200;
  const radius = 130;

  const getNodeCoordinates = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad)
    };
  };

  return (
    <div className="rounded-3xl glass-refract-card p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl space-y-10">
      
      {/* Background ambient light effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10 border-b border-gray-200/60 pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5E9]/90 backdrop-blur-md text-[#2E7D32] text-xs font-bold uppercase tracking-wider border border-[#C8E6C9]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Biocontrol Science</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#164E24] tracking-tight">
            Pest Lifecycle & Mating Disruption Engine
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Explore how species-specific pheromone traps intercept pest reproduction at the critical <strong className="text-[#164E24]">Adult Stage</strong>, halting egg deposition and eliminating 100% of internal fruit damage before it begins.
          </p>
        </div>

        {/* Action Controls: Live Simulation & Mode Toggle */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setShowBioTrapDisruption(!showBioTrapDisruption)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
              showBioTrapDisruption
                ? 'bg-gradient-to-r from-[#164E24] to-[#2E7D32] text-white shadow-emerald-900/20'
                : 'bg-white/80 text-[#374151] hover:bg-white border border-gray-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{showBioTrapDisruption ? 'Bio Trap Interception Active' : 'Natural Unchecked Infestation'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPlayingSimulation(!isPlayingSimulation)}
            className="px-4 py-2 rounded-2xl text-xs font-bold bg-white/90 hover:bg-white text-[#164E24] border border-emerald-200 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            {isPlayingSimulation ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-600" />
                <span>Pause Cycle</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Simulate Cycle</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Target Pest Selector Tabs */}
      <div className="space-y-2 relative z-10">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B7280]">
          Select Agricultural Pest Profile:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {PEST_PROFILES.map((pest) => {
            const isSelected = pest.id === selectedPestId;
            return (
              <button
                key={pest.id}
                type="button"
                onClick={() => handlePestSelect(pest.id)}
                className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#164E24] to-[#1E6B30] text-white shadow-lg shadow-emerald-950/20 border border-emerald-500/40'
                    : 'bg-white/70 hover:bg-white/95 text-[#374151] border border-white/80 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#164E24]'}`}>
                      {pest.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                    )}
                  </div>
                  <p className={`text-[11px] italic line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-[#6B7280]'}`}>
                    {pest.scientificName}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <span className={isSelected ? 'text-lime-300 font-semibold' : 'text-[#2E7D32] font-semibold'}>
                    {pest.recommendedTrap.split(' ')[0]} Trap
                  </span>
                  <span className={isSelected ? 'text-white/80' : 'text-[#6B7280]'}>
                    4 Stages
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Diagram & Diagnostic Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Interactive SVG Lifecycle Engine (7 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/90 shadow-inner relative">
          
          {/* Quick status banner */}
          <div className="w-full flex items-center justify-between text-xs mb-3 px-2">
            <div className="flex items-center gap-1.5 font-bold text-[#164E24]">
              <Activity className="w-4 h-4 text-[#2E7D32]" />
              <span>Interactive Orbital Cycle (Click Node to Inspect)</span>
            </div>
            <div className="text-[11px] text-[#6B7280] font-medium bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9] text-[#164E24]">
              Active: <span className="font-bold">{currentStage.name.split(' ')[0]}</span>
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
            
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-sm select-none"
            >
              <defs>
                {/* Gradient for standard flow circle */}
                <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E7D32" />
                  <stop offset="50%" stopColor="#84CC16" />
                  <stop offset="100%" stopColor="#2E7D32" />
                </linearGradient>

                {/* Broken cycle red warning gradient */}
                <linearGradient id="brokenCycleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#164E24" stopOpacity="0.9" />
                </linearGradient>

                {/* Glow filter for active nodes */}
                <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* Pheromone Cloud Pattern */}
                <radialGradient id="pheromoneCloud" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A3E635" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#22C55E" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#164E24" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background circular track */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="6"
                strokeDasharray="6 6"
              />

              {/* Animated Orbiting Flow Path */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke={showBioTrapDisruption ? 'url(#brokenCycleGrad)' : 'url(#orbitalGrad)'}
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 0 }}
                animate={{
                  strokeDasharray: showBioTrapDisruption ? '600 200' : '820 0',
                  strokeDashoffset: isPlayingSimulation ? [0, -820] : 0
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: 'linear'
                }}
              />

              {/* Connecting Flow Arrows / Direction Markers */}
              {[45, 135, 225, 315].map((angle, idx) => {
                const coord = getNodeCoordinates(angle);
                return (
                  <g key={`arrow-${idx}`} transform={`translate(${coord.x}, ${coord.y}) rotate(${angle + 90})`}>
                    <path
                      d="M-4 -6 L4 0 L-4 6"
                      fill="none"
                      stroke="#164E24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                  </g>
                );
              })}

              {/* Center Biocontrol Interception Core */}
              <g transform={`translate(${centerX}, ${centerY})`}>
                <circle
                  r="62"
                  fill="url(#pheromoneCloud)"
                  className="animate-pulse"
                />
                <circle
                  r="52"
                  fill="#FFFFFF"
                  stroke={showBioTrapDisruption ? '#2E7D32' : '#9CA3AF'}
                  strokeWidth="2"
                  filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))"
                />
                
                {showBioTrapDisruption ? (
                  <>
                    <motion.circle
                      r="48"
                      fill="none"
                      stroke="#84CC16"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    />
                    <text
                      textAnchor="middle"
                      y="-12"
                      className="fill-[#164E24] text-[11px] font-extrabold uppercase tracking-wider"
                    >
                      PHEROMONE
                    </text>
                    <text
                      textAnchor="middle"
                      y="4"
                      className="fill-[#2E7D32] text-[10px] font-bold"
                    >
                      TRAP INTERCEPT
                    </text>
                    <text
                      textAnchor="middle"
                      y="20"
                      className="fill-[#65A30D] text-[9px] font-semibold"
                    >
                      98.4% Disrupted
                    </text>
                  </>
                ) : (
                  <>
                    <text
                      textAnchor="middle"
                      y="-8"
                      className="fill-[#DC2626] text-[10px] font-extrabold uppercase tracking-wider"
                    >
                      UNCHECKED
                    </text>
                    <text
                      textAnchor="middle"
                      y="8"
                      className="fill-[#4B5563] text-[9px] font-medium"
                    >
                      Cycle Repeats
                    </text>
                    <text
                      textAnchor="middle"
                      y="22"
                      className="fill-[#DC2626] text-[8px] font-bold"
                    >
                      100% Crop Loss
                    </text>
                  </>
                )}
              </g>

              {/* Bio Trap Disruption Laser / Barrier at Adult Phase (Angle 270) */}
              {showBioTrapDisruption && (
                <g>
                  {/* Glowing Disruption Beam */}
                  <motion.line
                    x1={centerX - 50}
                    y1={centerY - radius + 10}
                    x2={centerX + 50}
                    y2={centerY - radius + 10}
                    stroke="#84CC16"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <g transform={`translate(${centerX}, ${centerY - radius - 36})`}>
                    <rect
                      x="-55"
                      y="-12"
                      width="110"
                      height="24"
                      rx="12"
                      fill="#164E24"
                      filter="drop-shadow(0 2px 6px rgba(22, 78, 36, 0.4))"
                    />
                    <text
                      textAnchor="middle"
                      y="4"
                      className="fill-white text-[9px] font-extrabold uppercase tracking-wider"
                    >
                      TRAP TARGET ZONE
                    </text>
                  </g>
                </g>
              )}

              {/* 4 Interactive Stage Nodes */}
              {currentPest.stages.map((stage) => {
                const coords = getNodeCoordinates(stage.positionAngle);
                const isSelected = stage.id === selectedStageId;
                const isAdult = stage.id === 'adult';

                return (
                  <g
                    key={stage.id}
                    transform={`translate(${coords.x}, ${coords.y})`}
                    onClick={() => setSelectedStageId(stage.id)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring on selected node */}
                    {isSelected && (
                      <motion.circle
                        r="32"
                        fill="none"
                        stroke={isAdult ? '#84CC16' : '#2E7D32'}
                        strokeWidth="3"
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Outer Circle Ring */}
                    <circle
                      r="24"
                      fill={
                        isSelected 
                          ? (isAdult ? '#164E24' : '#2E7D32') 
                          : '#FFFFFF'
                      }
                      stroke={
                        isSelected 
                          ? '#84CC16' 
                          : (isAdult && showBioTrapDisruption ? '#2E7D32' : '#CBD5E1')
                      }
                      strokeWidth={isSelected ? 3 : 2}
                      filter={isSelected ? 'url(#glowFilter)' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))'}
                      className="transition-all duration-300 group-hover:stroke-[#2E7D32]"
                    />

                    {/* Stage Number / Indicator */}
                    <text
                      textAnchor="middle"
                      y="5"
                      className={`text-xs font-bold pointer-events-none ${
                        isSelected ? 'fill-white' : 'fill-[#164E24]'
                      }`}
                    >
                      {stage.id === 'adult' ? '1. 🦟' : stage.id === 'egg' ? '2. 🥚' : stage.id === 'larva' ? '3. 🐛' : '4. 🪺'}
                    </text>

                    {/* Label Tag below/above the node */}
                    <g transform={`translate(0, ${stage.positionAngle === 270 ? -32 : stage.positionAngle === 90 ? 36 : stage.positionAngle === 0 ? 32 : 32})`}>
                      <rect
                        x="-48"
                        y="-10"
                        width="96"
                        height="20"
                        rx="10"
                        fill={isSelected ? '#164E24' : 'rgba(255,255,255,0.92)'}
                        stroke={isSelected ? '#84CC16' : '#E2E8F0'}
                        strokeWidth="1"
                        className="transition-all"
                      />
                      <text
                        textAnchor="middle"
                        y="4"
                        className={`text-[10px] font-bold ${
                          isSelected ? 'fill-white font-extrabold' : 'fill-[#374151]'
                        }`}
                      >
                        {stage.name.split(' ')[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

          </div>

          {/* Quick Stage Slider / Navigator buttons below SVG */}
          <div className="w-full flex items-center justify-between gap-1 mt-4 pt-4 border-t border-gray-200/60">
            {currentPest.stages.map((stage, idx) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`flex-1 py-1.5 px-1 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#164E24] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-[#4B5563]'
                  }`}
                >
                  <span className="opacity-70 text-[9px] mr-1">#{idx + 1}</span>
                  <span>{stage.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: In-Depth Agronomic Stage Analysis (5 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedPestId}-${selectedStageId}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-white/90 backdrop-blur-2xl border border-white p-6 sm:p-7 space-y-5 shadow-xl shadow-emerald-950/5"
            >
              {/* Stage Header & Tags */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#E8F5E9] text-[#164E24] text-xs font-extrabold uppercase">
                      Stage {stagesOrder.indexOf(selectedStageId) + 1} of 4
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2E7D32]" />
                      {currentStage.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#164E24] mt-1">
                    {currentStage.name}
                  </h3>
                  <p className="text-xs italic text-[#6B7280]">
                    {currentStage.scientificStage}
                  </p>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  currentStage.id === 'adult'
                    ? 'bg-emerald-100 text-[#164E24] border border-emerald-300'
                    : currentStage.id === 'larva'
                    ? 'bg-red-100 text-red-700 border border-red-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {currentStage.severity}
                </div>
              </div>

              {/* Stage Overview Description */}
              <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                {currentStage.description}
              </p>

              {/* Damage & Biological Threat Breakdown */}
              <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-amber-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Direct Crop Damage & Symptoms</span>
                  </div>
                  <span className="text-[11px] text-amber-700">
                    Loss Risk: {currentStage.damagePercent}%
                  </span>
                </div>
                <p className="text-xs text-amber-950/80 leading-relaxed font-normal">
                  {currentStage.cropDamageDetails}
                </p>
              </div>

              {/* Side-by-Side: Chemical Sprays vs Pheromone Biocontrol */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Conventional Chemical Failure */}
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Conventional Spray Flaw</span>
                  </div>
                  <p className="text-[11px] text-rose-950/80 leading-relaxed">
                    {currentStage.chemicalDrawback}
                  </p>
                </div>

                {/* Crop Care Bio Solution Efficacy */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Bio Trap Action</span>
                  </div>
                  <p className="text-[11px] text-emerald-950/80 leading-relaxed font-medium">
                    {currentStage.bioTrapMechanism}
                  </p>
                </div>
              </div>

              {/* Farmer Field Application Directive */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F4FAF3] to-white border border-emerald-100 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#164E24]">
                  <Leaf className="w-4 h-4 text-[#2E7D32]" />
                  <span>Agronomist Field Protocol & Installation Timing</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {currentStage.farmerAction}
                </p>
              </div>

              {/* Recommended Lure & Trap Footer Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100 text-xs">
                <div className="space-y-0.5 text-left w-full sm:w-auto">
                  <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                    Recommended Biocontrol Kit:
                  </div>
                  <div className="font-bold text-[#164E24]">
                    {currentPest.recommendedLure} + {currentPest.recommendedTrap}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {onNavigate && (
                    <button
                      type="button"
                      onClick={() => onNavigate('calculator')}
                      className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-bold bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#164E24] transition-colors cursor-pointer text-center"
                    >
                      Dose Calculator
                    </button>
                  )}
                  {onExploreProducts && (
                    <button
                      type="button"
                      onClick={onExploreProducts}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold bg-[#164E24] hover:bg-[#0E3517] text-white transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* 4 Scientific Impact Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200/60">
        
        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#164E24] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-[#164E24]">96–99%</div>
            <div className="text-[11px] text-[#6B7280] font-medium">Male Mating Disruption</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lime-100 text-lime-800 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-[#164E24]">0 ppm</div>
            <div className="text-[11px] text-[#6B7280] font-medium">Harmful Chemical Residue</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#164E24] flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-[#164E24]">60–90 Days</div>
            <div className="text-[11px] text-[#6B7280] font-medium">Continuous Plume Diffusion</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-[#164E24]">100% Safe</div>
            <div className="text-[11px] text-[#6B7280] font-medium">For Honeybees & Earthworms</div>
          </div>
        </div>

      </div>

    </div>
  );
};
