
import { ImpactLevel, LevelData } from './types';

export const LEVELS: LevelData[] = [
  {
    id: ImpactLevel.SCHOOL,
    name: 'School Level',
    subtitle: 'King Faisal School (KFS) Initiative',
    overview: 'Educational institutions serve as micro-models for sustainability. KFS focuses on reducing its carbon footprint through localized infrastructure and behavioral change.',
    challenges: [
      { title: 'High AC Consumption', description: 'Intensive cooling systems rely heavily on fossil fuel electricity.', icon: '❄️' },
      { title: 'Lighting & Electronics', description: 'Extensive daily use of traditional lighting and digital devices.', icon: '💡' },
      { title: 'Commuter Emissions', description: 'Transportation of students and staff adds significant carbon load.', icon: '🚗' }
    ],
    solutions: [
      { id: 'school-solar', title: 'Rooftop Solar', description: 'Install PV panels on school rooftops to generate clean onsite energy.', impactScore: 40 },
      { id: 'school-led', title: 'LED & Smart Controls', description: 'Transition to LED lighting with motion-sensing smart controls.', impactScore: 25 },
      { id: 'school-transport', title: 'Green Commuting', description: 'Promote cycling, walking, and carpooling for the school community.', impactScore: 20 },
      { id: 'school-digital', title: 'Digital Workflow', description: 'Reduce paper waste by mandating digital submissions and resources.', impactScore: 15 }
    ],
    image: 'https://picsum.photos/seed/school/800/400'
  },
  {
    id: ImpactLevel.CITY,
    name: 'City Level',
    subtitle: 'Riyadh Urban Transformation',
    overview: 'Rapidly growing urban centers like Riyadh face unique challenges with energy demand and transportation heat maps.',
    challenges: [
      { title: 'Private Car Reliance', description: 'Heavy traffic and dependence on personal vehicles increase fuel use.', icon: '🚕' },
      { title: 'Urban Heat Island', description: 'Rapid urbanization raises city temperatures, increasing cooling demand.', icon: '🌡️' },
      { title: 'Air Quality', description: 'Fossil fuel emissions from industry and transport degrade local air.', icon: '🌫️' }
    ],
    solutions: [
      { id: 'city-metro', title: 'Metro & Bus Expansion', description: 'Expanding Riyadh Metro to reduce reliance on private cars.', impactScore: 45 },
      { id: 'city-smart-ac', title: 'City-Scale Smart AC', description: 'Integrating district cooling and smart energy technologies.', impactScore: 30 },
      { id: 'city-ev', title: 'EV Infrastructure', description: 'Building a city-wide network of electric vehicle charging stations.', impactScore: 25 }
    ],
    image: 'https://picsum.photos/seed/riyadh/800/400'
  },
  {
    id: ImpactLevel.COUNTRY,
    name: 'Country Level',
    subtitle: 'Saudi Vision 2030',
    overview: 'National strategies aim to diversify energy sources away from oil and gas while maintaining economic growth.',
    challenges: [
      { title: 'Economic Risk', description: 'Over-dependence on fossil fuels limits long-term economic diversification.', icon: '📉' },
      { title: 'Industrial Demand', description: 'High energy intensity in national manufacturing and industry.', icon: '🏭' },
      { title: 'Oil/Gas Reliance', description: 'Traditional dominance of fossil fuels in the national energy mix.', icon: '⛽' }
    ],
    solutions: [
      { id: 'nation-utility-solar', title: 'Utility-Scale Renewables', description: 'Massive investment in large-scale solar and wind projects.', impactScore: 50 },
      { id: 'nation-hydrogen', title: 'Green Hydrogen', description: 'Developing green hydrogen initiatives to diversify export energy.', impactScore: 30 },
      { id: 'nation-policy', title: 'Vision 2030 Policy', description: 'Implementing national mandates for sustainability and clean energy.', impactScore: 20 }
    ],
    image: 'https://picsum.photos/seed/saudi/800/400'
  },
  {
    id: ImpactLevel.CONTINENT,
    name: 'Continent Level',
    subtitle: 'Regional Cooperation in Asia',
    overview: 'As the most populous continent, Asia\'s energy transition requires cross-border technological and political collaboration.',
    challenges: [
      { title: 'Coal Reliance', description: 'High coal and oil consumption across industrializing nations.', icon: '🚂' },
      { title: 'Industrial Growth', description: 'Rapid expansion putting pressure on shared environmental resources.', icon: '📈' },
      { title: 'Public Health', description: 'Rising emissions contributing to regional ecosystem degradation.', icon: '🏥' }
    ],
    solutions: [
      { id: 'asia-coop', title: 'Regional Agreements', description: 'Sharing renewable technology and knowledge across Asian borders.', impactScore: 40 },
      { id: 'asia-inclusive', title: 'Inclusive Support', description: 'Financial/tech support for developing nations to ensure sustainable growth.', impactScore: 35 },
      { id: 'asia-green-spaces', title: 'Green Urbanization', description: 'Developing regional standards for green urban spaces and transport.', impactScore: 25 }
    ],
    image: 'https://picsum.photos/seed/asia/800/400'
  },
  {
    id: ImpactLevel.GLOBAL,
    name: 'Global Level',
    subtitle: 'Global Sustainability Goals',
    overview: 'Addressing the climate crisis requires a unified planetary response aligned with SDG 13 (Climate Action).',
    challenges: [
      { title: 'Climate Change', description: 'Extreme weather, rising sea levels, and planetary ecological risks.', icon: '🌍' },
      { title: 'Policy Gap', description: 'Need for coordinated international climate policies and agreements.', icon: '📜' },
      { title: 'Resource Imbalance', description: 'Global disparity in access to renewable energy technologies.', icon: '⚖️' }
    ],
    solutions: [
      { id: 'global-treaty', title: 'International Accords', description: 'Implementing and enforcing coordinated climate policies worldwide.', impactScore: 50 },
      { id: 'global-renew', title: 'Worldwide Renewables', description: 'Scaling solar and wind power on a truly global infrastructure level.', impactScore: 30 },
      { id: 'global-edu', title: 'Global Awareness', description: 'Educating communities globally on sustainable energy practices.', impactScore: 20 }
    ],
    image: 'https://picsum.photos/seed/global/800/400'
  }
];
