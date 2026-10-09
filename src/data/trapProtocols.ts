import type { Protocol } from '../types';

/**
 * Insect trap and sticky trap protocols, from the company's "Insect Trap new
 * Matter" sheet. `heading` shows on the card; everything else opens in the
 * protocol panel. Keyed by the trap / sticky tool id.
 */
export const TRAP_PROTOCOLS: Record<string, Protocol> = {
  'fruit-fly-trap': {
    heading: 'Effective Monitoring & Trapping of Melon Fly and Oriental Fruit Fly',
    intro: [
      'The Fruit Fly Trap is designed for effective monitoring and trapping of Melon Fly and Oriental Fruit Fly in orchards and vegetable vine crops. Its practical square-shaped design features entry openings on both sides and an internal lure holder, allowing fruit flies to be attracted and trapped efficiently.',
      'The lure releases an attractant that draws fruit flies into the trap through the side openings. Once inside, the trap design makes it difficult for the flies to escape. The transparent lower chamber provides clear visibility of the captured flies, enabling easy monitoring without opening the trap.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: ['Melon Fly (Bactrocera cucurbitae)', 'Oriental Fruit Fly (Bactrocera dorsalis)'],
      },
      { label: 'Recommended Density', paragraphs: ['10–15 traps per acre'] },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Clean/Rinse: When the catch chamber becomes full or heavily contaminated.',
          'Lure Replacement: Replace the lure every 90 days or as recommended for the specific lure.',
          'The trap can be cleaned and reused for multiple growing seasons.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Dual-side entry openings allow fruit flies to enter from different directions.',
          'Internal lure holder provides convenient and secure placement of the attractant.',
          'Efficient trapping design helps retain attracted fruit flies inside the trap.',
          'Transparent lower chamber allows quick and easy inspection of the catch.',
          'Reusable construction supports repeated use across growing seasons.',
          'Suitable for orchards and vegetable vine crops as part of an Integrated Pest Management (IPM) program.',
        ],
      },
    ],
  },

  'vertical-fruit-fly-trap': {
    heading: 'Effective Monitoring & Trapping of Melon Fly and Oriental Fruit Fly',
    intro: [
      'The Vertical Fruit Fly Trap is a practical, space-saving solution designed for effective fruit fly monitoring and trapping in fruit and vegetable crops. It is suitable for use in open fields, orchards, gardens, kitchen gardens, terrace gardens, greenhouses, and polyhouses.',
      'Its vertical hanging design features top-entry openings that allow fruit flies to enter easily. The attractant lure releases a scent that draws fruit flies into the trap, where they are effectively contained. The transparent trap body provides clear visibility of the captured flies, making monitoring quick and convenient without opening the trap.',
      'The trap is easy to install, clean, maintain, and reuse, making it suitable for repeated use across growing seasons and as part of an Integrated Pest Management (IPM) program.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: [
          'Melon Fly (Bactrocera cucurbitae)',
          'Oriental Fruit Fly (Bactrocera dorsalis)',
          'Other fruit fly species, depending on the lure used',
        ],
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Suitable for fruit and vegetable crops, including orchards, vegetable fields, gardens, kitchen/terrace gardens, greenhouses, and polyhouses.',
        ],
      },
      { label: 'Recommended Density', paragraphs: ['10–15 traps per acre'] },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Cleaning: Rinse the trap when the catch chamber becomes full or heavily contaminated.',
          'Lure Replacement: Replace the lure every 90 days or according to the recommended service life of the specific lure.',
          'Reuse: Clean and reuse the trap for subsequent crop cycles.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Vertical hanging design saves space and provides convenient placement.',
          'Top-entry openings allow fruit flies to enter easily.',
          'Effective lure-based attraction draws target fruit flies into the trap.',
          'Transparent trap body allows quick and easy monitoring of captured flies.',
          'Reusable construction supports repeated use across growing seasons.',
          'Easy to clean and maintain for convenient field use.',
          'Suitable for open fields, orchards, gardens, kitchen gardens, terrace gardens, greenhouses, and polyhouses.',
          'Supports Integrated Pest Management (IPM) and regular pest monitoring.',
        ],
      },
    ],
  },

  'glass-trap': {
    heading: 'Effective Monitoring & Trapping of Melon Fly and Oriental Fruit Fly',
    intro: [
      'The Glass Fruit Fly Trap is a transparent dome-shaped trap designed for effective fruit fly monitoring in orchards, vegetable and fruit crops. Its clear construction allows light to pass through the trap, encouraging trapped flies to move upward and away from the invaginated base entrance, reducing the likelihood of escape.',
      'The transparent design provides clear visibility of the catch, allowing growers to quickly assess fruit fly activity and maintain consistent pest records. Its durable construction is suitable for outdoor use, while the twist-lock base allows easy opening for cleaning, lure replacement, and routine maintenance.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: [
          'Oriental Fruit Fly (Bactrocera dorsalis)',
          'Melon Fly (Bactrocera cucurbitae)',
          'Other fruit fly species, depending on the lure used',
        ],
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Primarily suitable for orchards, vegetable and fruit crops where regular fruit fly monitoring is required.',
        ],
      },
      { label: 'Recommended Density', paragraphs: ['8–12 traps per acre'] },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Cleaning: Rinse the trap when the catch chamber becomes full or heavily contaminated.',
          'Lure Replacement: Replace the lure every 90 days or according to the recommended service life of the specific lure.',
          'Re-baiting: Open the twist-lock base for convenient lure replacement and cleaning.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Transparent dome design for quick and accurate catch assessment.',
          'Invaginated base entrance helps fruit flies enter while reducing escape.',
          'Light-transmitting walls encourage trapped flies to move away from the entrance.',
          'Twist-lock base enables easy cleaning and lure replacement.',
          'Weather-resistant design suitable for outdoor orchard conditions.',
          'Supports weekly pest monitoring and population tracking.',
          'Reusable design for repeated monitoring across growing seasons.',
          'Suitable for Integrated Pest Management (IPM) programs.',
        ],
      },
    ],
  },

  'water-trap': {
    heading: 'Effective Monitoring & Trapping of Moth Pests',
    intro: [
      'The Water Trap is a simple and effective lure-based trapping system designed for monitoring and reducing key moth pests in vegetable crops. Its wide water-filled pan provides a large trapping surface, while the lure is securely positioned on a central clip above the water.',
      'Moths attracted to the lure are drawn toward the trap and land on the water surface, where they are unable to take flight and are effectively trapped. The wide trapping area, simple design, and easy servicing make it suitable for routine pest monitoring as part of an Integrated Pest Management (IPM) program.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: [
          'Tomato Leaf Miner (Tuta absoluta)',
          'Brinjal Fruit & Shoot Borer (Leucinodes orbonalis)',
          'Diamondback Moth (Plutella xylostella)',
        ],
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Primarily suitable for tomato, brinjal/eggplant, cabbage, cauliflower, broccoli, and other vegetable crops, depending on the target pest and lure used.',
        ],
      },
      { label: 'Recommended Density', paragraphs: ['8–10 traps per acre'] },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Water Level: Top up the water weekly to maintain an effective trapping surface.',
          'Catch Removal: Skim or remove trapped insects every 5–7 days.',
          'Cleaning: Clean the trap regularly to maintain effective operation.',
          'Add water as required, particularly during hot or dry conditions.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Water-based trapping provides an effective and simple trapping mechanism.',
          'Wide trapping area increases the available surface for capturing moths.',
          'Central lure holder keeps the attractant securely positioned above the water.',
          'Easy pest collection allows convenient removal and counting of trapped insects.',
          'Simple to use and maintain with minimal servicing requirements.',
          'Lightweight and portable for convenient field placement.',
          'Reusable design suitable for repeated use across crop cycles.',
          'Supports regular pest monitoring and Integrated Pest Management (IPM).',
        ],
      },
    ],
  },

  'funnel-trap': {
    heading: 'Effective Monitoring & Trapping of Moth Pests',
    intro: [
      'The Funnel Trap is a dry, lure-based trapping system designed for effective monitoring of important moth pests in agricultural crops. Its practical design combines a protective canopy, smooth funnel, and transparent collection sleeve, providing efficient trapping while keeping the system simple to install and maintain.',
      'The lure is positioned securely inside the top cage. Moths attracted to the lure fly toward the trap and are directed through the funnel into the transparent collection sleeve, where they are retained. Since the trap operates without water, it requires no water filling or regular water maintenance, making it convenient for field conditions.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: [
          'Pink Bollworm (Pectinophora gossypiella)',
          'Cutworms/Bollworms',
          'Armyworms',
          'Stem Borers',
          'Tomato Leaf Miner',
          'Brinjal Fruit & Shoot Borer',
          'Diamondback Moth',
        ],
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Suitable for cotton, chickpea, pulses, maize, vegetables, and other crops, depending on the target pest and lure used.',
        ],
      },
      {
        label: 'Recommended Density',
        paragraphs: ['8–15 traps per acre, depending on the target pest and lure.'],
      },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Empty the trap: Untie the bottom cord and remove the collected insects weekly.',
          'Check the lure: Ensure the lure remains correctly positioned inside the top cage.',
          'Cleaning: Clean the funnel and collection sleeve as required.',
          'Lure Replacement: Replace the lure according to its recommended service life.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Protective canopy helps shield the lure and collection area from rain and direct sunlight.',
          'Smooth funnel design guides attracted moths into the collection sleeve.',
          'Transparent collection bag allows easy observation and counting of trapped insects.',
          'Dry trapping system requires no water filling or topping up.',
          'Easy pest monitoring supports regular population assessment.',
          'Simple cleaning and lure replacement for convenient field maintenance.',
          'Reusable and durable for repeated use across crop seasons.',
          'Easy field installation and practical for routine pest monitoring.',
          'Supports Integrated Pest Management (IPM) and informed pest-control decisions.',
        ],
      },
    ],
  },

  'palm-trap': {
    heading: 'Effective Monitoring & Trapping of Red Palm Weevil and Rhinoceros Beetle',
    intro: [
      'The Palm Trap is a durable, practical trapping solution designed for monitoring and managing major insect pests in palm plantations. Its bucket-shaped construction features a covered top and multiple entry openings, allowing target pests to enter the trap while helping protect the internal lure from environmental conditions.',
      'The pheromone lure is placed inside the trap to attract target pests. Once attracted, the insects enter through the openings and are retained inside the trap, making it easy to monitor pest activity and assess infestation levels.',
      'The trap is suitable for coconut, arecanut, date palm, and oil palm plantations and can be installed by hanging or partially burying it, depending on field requirements.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: ['Red Palm Weevil (Rhynchophorus ferrugineus)', 'Rhinoceros Beetle (Oryctes rhinoceros)'],
        note: 'Use the appropriate species-specific lure for the target pest.',
      },
      { label: 'Recommended Crops', items: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'] },
      {
        label: 'Recommended Density',
        paragraphs: ['3–4 traps per acre'],
        note: 'Trap density may be adjusted according to pest pressure, plantation conditions, and the recommended lure.',
      },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Catch Removal: Empty the trap every 2 weeks or as required based on pest activity.',
          'Bait/Liquid: Refresh the bait liquid monthly.',
          'Lure: Replace the pheromone lure according to its recommended service life.',
          'Cleaning: Clean the trap periodically to maintain effective operation.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Multiple entry openings allow pests to enter from different directions.',
          'Covered top helps protect the lure and trap interior from direct environmental exposure.',
          'Easy installation – can be hung or partially buried according to field conditions.',
          'Stable and durable construction suitable for plantation environments.',
          'Reusable design for repeated pest monitoring and management.',
          'Easy to inspect and maintain for convenient field servicing.',
          'Supports Integrated Pest Management (IPM) and regular monitoring of palm pest populations.',
        ],
      },
    ],
  },

  'delta-trap': {
    heading: 'Effective Monitoring of Moth Pests in Polyhouses & Orchards',
    intro: [
      'The Delta Trap is a compact and efficient monitoring trap designed for detecting and tracking moth pest populations in polyhouses, greenhouses, orchards, and other protected or open cultivation areas.',
      'The trap features a triangular housing made from waterproof corrugated polypropylene, with a replaceable sticky liner positioned on the base and the lure suspended from the ridge. Its enclosed design helps protect the adhesive surface from dust, rain, and other environmental conditions, helping maintain trapping efficiency.',
      'Moths attracted to the lure enter the trap and become firmly captured on the non-drying sticky liner. The visible catch makes it easy to identify, count, and record pest activity during regular crop monitoring.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: [
          'Pink Bollworm (Pectinophora gossypiella)',
          'Tomato Leaf Miner (Tuta absoluta)',
          'Diamondback Moth (Plutella xylostella)',
          'Bollworms, including Helicoverpa armigera',
          'Other moth pests, depending on the lure used',
        ],
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Suitable for cotton, tomato, vegetables, orchards, and other crops, particularly in polyhouses and protected cultivation, depending on the target pest and lure.',
        ],
      },
      {
        label: 'Recommended Density',
        paragraphs: ['6–8 traps per acre for monitoring.'],
        note: 'Trap density may be adjusted according to the target pest, crop, and monitoring requirements.',
      },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Sticky Liner: Replace when approximately two-thirds covered with insects or debris, or every 4–6 weeks.',
          'Lure: Replace according to the recommended service life of the specific lure.',
          'Cleaning: Keep the trap housing and surrounding area free from excessive dust and debris.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Triangular enclosed design helps protect the sticky surface from dust and rain.',
          'Non-drying adhesive liner securely retains captured moths.',
          'Replaceable sticky liner makes servicing simple and convenient.',
          'Easy catch counting supports regular pest monitoring and weekly records.',
          'Lightweight construction allows easy hanging at different positions within the crop.',
          'Water-resistant housing provides durability under field and protected-cultivation conditions.',
          'Reusable trap body reduces the need for frequent replacement.',
          'Supports Integrated Pest Management (IPM) through early detection and regular pest population monitoring.',
        ],
      },
    ],
  },

  'solar-trap': {
    heading: 'Solar-Powered Monitoring & Trapping of Night-Flying Pests',
    intro: [
      'The Solar Light Trap is an energy-efficient trapping solution designed for monitoring and managing night-flying insect pests in field crops, vegetable crops, horticultural crops, and plantations. It combines a solar panel, dusk-to-dawn LED light, lure holder, and collection basin in a single, convenient unit.',
      'The LED light attracts nocturnal insects after dark, while the pheromone or attractant lure can provide additional pest-specific attraction. The trap automatically switches on at dusk and off at dawn, powered by a rechargeable battery charged through the solar panel. With no mains electricity or cabling required, it can be conveniently installed in remote field locations.',
      'The large collection basin provides ample capacity for captured insects, making the trap suitable for regular pest monitoring and management as part of an Integrated Pest Management (IPM) program.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        lead: 'Suitable for night-flying and phototactic insect pests, depending on the lure and trapping configuration, including:',
        items: [
          'Helicoverpa armigera (Gram Pod Borer / American Bollworm)',
          'Spodoptera frugiperda (Fall Armyworm)',
          'Spodoptera litura (Tobacco Caterpillar)',
          'Earias spp. (Spotted/Spiny Bollworms)',
          'Stem Borers',
          'Other night-flying moths and insects attracted to light',
        ],
        note: 'Target pest performance depends on the light source, lure used, crop, and local pest population.',
      },
      {
        label: 'Recommended Crops',
        paragraphs: [
          'Suitable for cotton, maize, chickpea, pulses, vegetables, sugarcane, horticultural crops, and other field crops where night-flying pests are present.',
        ],
      },
      {
        label: 'Recommended Density',
        paragraphs: ['1–2 traps per acre'],
        note: 'Density may be adjusted according to crop, pest pressure, and monitoring or management objectives.',
      },
      {
        label: 'Servicing & Maintenance',
        items: [
          'Solar Panel: Wipe/clean the panel monthly or whenever dust accumulation reduces solar charging.',
          'Collection Basin: Empty and clean the basin weekly or more frequently during periods of heavy pest activity.',
          'Battery: Ensure the rechargeable battery and electrical components remain protected and properly connected.',
          'Lure: Replace the lure according to its recommended service life.',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Light + pheromone attraction combines two attraction methods in one trap.',
          'Solar-powered operation eliminates the need for mains electricity and external wiring.',
          'Automatic dusk-to-dawn switching provides convenient night-time operation.',
          'Rechargeable battery stores solar energy for continued operation.',
          'Large collection basin accommodates high night-time catches.',
          'Low-maintenance design suitable for field conditions.',
          'Easy installation in fields, orchards, and horticultural areas.',
          'Supports early pest detection, population monitoring, and Integrated Pest Management (IPM).',
        ],
      },
    ],
  },

  'sticky-sheets': {
    heading: 'Colour-Based Monitoring & Trapping of Sucking Pests',
    intro: [
      'Sticky Sheets are colour-attractive monitoring and trapping boards designed to complement pheromone-based traps as part of an effective Integrated Pest Management (IPM) program. They use the natural colour attraction of flying insect pests to help monitor and reduce pest populations in crops.',
      'Available in yellow and blue, these double-sided PVC sticky sheets are coated with a non-drying adhesive that remains effective under normal field conditions, including exposure to sunlight and rain.',
      'Yellow Sticky Sheets are primarily used for monitoring whiteflies, aphids, jassids, and leaf miners, while Blue Sticky Sheets are particularly effective for thrips.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: ['Whiteflies', 'Thrips', 'Aphids', 'Jassids / Leafhoppers', 'Leaf Miners'],
      },
      { label: 'Available Colours', items: ['Yellow', 'Blue'] },
      { label: 'Available Sizes', items: ['11 × 29 cm (approx.)', '22 × 29 cm (approx.)'] },
      {
        label: 'Recommended Density',
        paragraphs: ['15–20 sheets per acre'],
        note: 'Placement and density may be adjusted according to crop, pest pressure, and monitoring requirements.',
      },
      {
        label: 'Key Features',
        items: [
          'Colour-based attraction for effective monitoring of flying pests.',
          'Double-sided sticky surface increases the available trapping area.',
          'Non-drying adhesive provides long-lasting stickiness.',
          'Suitable for use under sunlight and normal field conditions.',
          'Yellow sheets are suitable for whiteflies, aphids, jassids, and leaf miners.',
          'Blue sheets are particularly suitable for thrips.',
          'Available in two practical sizes for different crop and installation requirements.',
          'Easy to install, inspect, and replace.',
          'Supports Integrated Pest Management (IPM) by enabling early detection and monitoring of pest populations.',
        ],
      },
    ],
  },

  'sticky-rolls': {
    heading: 'Continuous Sticky Strips for Extended Pest Monitoring',
    intro: [
      'Sticky Rolls are continuous, ready-to-use sticky strips designed for effective monitoring and trapping of flying insect pests in polyhouses, greenhouses, protected cultivation, and other crop production areas.',
      'The continuous roll format provides extended coverage along crop rows, greenhouse openings, boundaries, and entry points. The strips can be suspended between crop rows or installed along the perimeter to help intercept flying pests and support regular pest population monitoring.',
      'Available in yellow and blue, the colour-based attraction helps target different pest groups. The non-drying adhesive remains tacky under normal growing conditions, providing continuous trapping performance.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        items: ['Thrips', 'Whiteflies', 'Fungus Gnats', 'Flying Aphids', 'Leafhoppers / Jassids'],
      },
      {
        label: 'Available Colours',
        items: [
          'Yellow: commonly used for monitoring whiteflies, aphids, leafhoppers, and fungus gnats.',
          'Blue: particularly suitable for monitoring thrips.',
        ],
      },
      {
        label: 'Available Sizes',
        rows: [
          { label: 'Length', value: '100 m' },
          { label: 'Width', value: '15 cm, 30 cm' },
          { label: 'Colour', value: 'Yellow, Blue' },
        ],
      },
      {
        label: 'Recommended Use',
        paragraphs: ['2–3 rolls per acre'],
        note: 'Actual quantity may vary depending on crop type, protected-cultivation structure, pest pressure, and required coverage.',
      },
      {
        label: 'Applications',
        lead: 'Ideal for use along:',
        items: [
          'Polyhouse and greenhouse openings',
          'Crop-row boundaries',
          'Ventilation areas',
          'Entry points',
          'Between crop rows',
          'Perimeter areas',
        ],
      },
      {
        label: 'Key Features',
        items: [
          'Continuous roll design provides extended trapping coverage.',
          'Large coverage area compared with individual sticky sheets.',
          'Colour-based attraction targets different groups of flying pests.',
          'Non-drying adhesive provides long-lasting stickiness.',
          'Easy to cut and install according to crop and structure requirements.',
          'Suitable for polyhouses, greenhouses, nurseries, and protected cultivation.',
          'Helps with early pest detection and population monitoring.',
          'Supports Integrated Pest Management (IPM) and reduced dependence on chemical control.',
        ],
      },
    ],
  },

  'sticky-pouches': {
    heading: 'Reusable Sticky Pouches with Ready-to-Use Adhesive',
    intro: [
      'Reusable Sticky Pouches are a practical and economical pest-monitoring solution supplied with a ready-to-use sticky adhesive. Designed for easy preparation and installation, the pouches can be used in different crop environments to monitor and trap flying insect pests.',
      'One side of the pouch is open for applying the adhesive, while the other side remains sealed. Simply apply the supplied adhesive evenly to the designated surface using the convenient pour bottle, then place or hang the pouch within the crop for pest monitoring.',
      'Each pouch can be reused up to two times, making it a cost-effective option for regular pest monitoring and Integrated Pest Management (IPM) programs.',
    ],
    blocks: [
      {
        label: 'Target Pests',
        lead: 'Suitable for monitoring flying pests such as:',
        items: [
          'Whiteflies',
          'Thrips',
          'Aphids',
          'Jassids / Leafhoppers',
          'Leaf Miners',
          'Other flying pests attracted to the adhesive surface',
        ],
        note: 'Pest attraction and effectiveness may vary depending on crop, pest species, and placement.',
      },
      {
        label: 'Ready-to-Use Sticky Adhesive',
        paragraphs: [
          'The supplied sticky adhesive is formulated for easy application and effective pest retention. It can be applied directly to the pouch using the supplied pour bottle.',
        ],
      },
      {
        label: 'Glue Bottle',
        paragraphs: [
          'The adhesive is supplied in a 500 mL pour bottle designed for convenient and controlled application.',
        ],
        lead: 'Bottle Features:',
        items: [
          '500 mL capacity',
          'Convenient wide-mouth design for easy filling and handling',
          'Pour-friendly opening for controlled adhesive application',
          'Suitable for brush-on application',
          'Easy to handle during field preparation',
          'Secure closure helps minimize leakage during storage and transport',
          'Reusable bottle for convenient handling of the adhesive',
        ],
      },
      { label: 'Available Size', rows: [{ label: 'Glue Bottle', value: '500 mL' }] },
      {
        label: 'Key Features',
        items: [
          'Ready-to-use adhesive – no additional preparation required.',
          'Reusable pouch design allows each pouch to be used up to two times.',
          'Easy adhesive application using the supplied pour bottle.',
          'Economical solution for repeated pest monitoring.',
          'Simple installation – can be placed or hung within the crop.',
          'Suitable for open fields, gardens, nurseries, greenhouses, and polyhouses.',
          'Supports Integrated Pest Management (IPM) through regular pest monitoring.',
        ],
      },
    ],
  },
};
