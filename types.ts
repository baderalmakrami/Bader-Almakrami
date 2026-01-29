
export enum ImpactLevel {
  SCHOOL = 'school',
  CITY = 'city',
  COUNTRY = 'country',
  CONTINENT = 'continent',
  GLOBAL = 'global'
}

export interface Challenge {
  title: string;
  description: string;
  icon: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  impactScore: number;
}

export interface LevelData {
  id: ImpactLevel;
  name: string;
  subtitle: string;
  overview: string;
  challenges: Challenge[];
  solutions: Solution[];
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
