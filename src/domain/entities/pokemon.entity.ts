import { nanoid } from 'nanoid';

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IAncientTrait {
  name: string;
  text: string;
}

export interface IAttack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface IResistance {
  type: string;
  value: string;
}

export class Pokemon {
  _id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  flavorText?: string;
  active?: boolean;

  constructor(params) {
    this._id = params._id || nanoid().toString();
    this.name = params.name || null;
    this.supertype = params.supertype || null;
    this.subtypes = params.subtypes || [];
    this.hp = params.hp || null;
    this.types = params.types || [];
    this.evolvesFrom = params.evolvesFrom || [];
    this.evolvesTo = params.evolvesFrom || [];
    this.rules = params.rules || [];
    this.ancientTrait = params.ancientTrait || [];
    this.abilities = params.abilities || [];
    this.attacks = params.attacks || [];
    this.weaknesses = params.weaknesses || [];
    this.resistances = params.resistances || [];
    this.retreatCost = params.retreatCost || [];
    this.convertedRetreatCost = params.convertedRetreatCost || [];
    this.flavorText = params.flavorText || [];
    this.active = params.active || true;
  }

  deactive() {
    this.active = false;
  }
}
