///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 0003-item-schemas                                                                                                                         //
//                                                                                                                                           //
// Using the following 'equipmentSchema', create default objects with information for every item in Dark and Darker                          //
// Below equipmentSchema is an example 'armingSwordSchema', with values filled out for the minimum viable Common (White) tier Arming Sword   //
// armingSwordSchema isn't actually named, but will be referenced by the property 'name', so just copy the format of the object              //
// also, you can leave description empty for now, but will need to be filled later                                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://rankedboost.com/dark-and-darker/weapons-list/
//dalskfad;fl
//fffffff
export const equipmentSchema = 
{
  category: '',
  name: '',
  rarity: '',
  slotType: '',
  handType: '',
  description: '',
  requiredClass: [],
  baseStats: {
    statNames: {
      statName1: '',
      statName2: '',
      statName3: '',
      statName4: ''
    },
    statValues: {
      statValue1: 0,
      statValue2: 0,
      statValue3: 0,
      statValue4: 0
    }
  },
  bonusStats: {
    statNames: {
      statName1: '',
      statName2: '',
      statName3: '',
      statName4: '',
      statName5: ''
    },
    statValues: {
      statValue1: 0,
      statValue2: 0,
      statValue3: 0,
      statValue4: 0,
      statValue5: 0
    }
  }
  
};

export const itemSchemas = [
  {
    category: 'Sword',
    name: 'Arming Sword',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: '',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 25,
        statValue2: -10,
        statValue3: 0,
        statValue4: 0
      }
    },
    bonusStats: {
      statNames: {
        statName1: '',
        statName2: '',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 0,
        statValue2: 0,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
      }
    }
  },
  {
    category: '',
    name: '',
    rarity: '',
    slotType: '',
    handType: '',
    description: '',
    requiredClass: [],
    baseStats: {
      statNames: {
        statName1: '',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 0,
        statValue2: 0,
        statValue3: 0,
        statValue4: 0
      }
    },
    bonusStats: {
      statNames: {
        statName1: '',
        statName2: '',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 0,
        statValue2: 0,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
      }
    }
  }
];