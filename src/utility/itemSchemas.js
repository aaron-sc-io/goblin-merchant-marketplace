///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 0003-item-schemas                                                                                                                         //
//                                                                                                                                           //
// Using the following 'equipmentSchema', create default objects with information for every item in Dark and Darker                          //
// Below equipmentSchema is an example 'armingSwordSchema', with values filled out for the minimum viable Common (White) tier Arming Sword   //
// armingSwordSchema isn't actually named, but will be referenced by the property 'name', so just copy the format of the object              //
// also, you can leave description empty for now, but will need to be filled later                                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://rankedboost.com/dark-and-darker/weapons-list/
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

// {
  //   category: '',
  //   name: '',
  //   rarity: 'Common',
  //   slotType: 'Primary Weapon Secondary Weapon',
  //   handType: 'One-Handed  Two-Handed', 
  //   description: '',
  //   requiredClass: [],
  //   baseStats: {
  //     statNames: {
  //       statName1: 'Weapon Damage',
  //       statName2: 'Movement Speed',
  //       statName3: '',
  //       statName4: ''
  //     },
  //     statValues: {
  //       statValue1: 0,
  //       statValue2: 0,  
  //       statValue3: 0,
  //       statValue4: 0
  //     }
  //   },
  //   bonusStats: {
  //     statNames: {
  //       statName1: '',
  //       statName2: '',
  //       statName3: '',
  //       statName4: '',
  //       statName5: ''
  //     },
  //     statValues: {
  //       statValue1: 0,
  //       statValue2: 0,
  //       statValue3: 0,
  //       statValue4: 0,
  //       statValue5: 0
  //     }
  //   }
  // },

export const itemSchemas = [

  // SWORDS
  { // Arming Sword
    category: 'Sword',
    name: 'Arming Sword',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: 'A thin blade with leather bindings, supporting a firm grip for hasty attacks that feel light to the hand.',
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
  { // Falchion
    category: 'Sword',
    name: 'Falchion',
    rarity: '',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: 'A curved iron blade and broad hilt, the curvature of the blade is foreign and enigmatic.',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 36,
        statValue2: -25,
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
  { // Rapier
    category: 'Sword',
    name: 'Rapier',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: 'A slender but sharp blade crafted with a protective hand guard. Effective at both cutting and thrusting.',
    requiredClass: ['Ranger', 'Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 18,
        statValue2: -17,
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
  { // Short Sword
    category: 'Sword',
    name: 'Short Sword',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: "A short and broad blade melded to a fine point with a round pommel at it's base.",
    requiredClass: ['Ranger', 'Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 20,
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
  { // Longsword
    category: 'Sword',
    name: 'Longsword',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: 'A very long blade crafted from durable metal with a staunch hilt, heavy yet still feels nimble in your grasp.',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 35,
        statValue2: -40,
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
  { // Zweihander
    category: 'Sword',
    name: 'Zweihander',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: 'The sheer weight and length of this mighty double-edge blade can be felt pulling on you as you swing.',
    requiredClass: ['Barbarian', 'Figher'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 40,
        statValue2: -50,
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

   ////////////// MACES
  { // Flanged Mace
    category: 'Mace',
    name: 'Flanged Mace',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: 'A slow and heavy mace designed with crown-shaped blunt edges, supporting even reckless swings.',
    requiredClass: ['Cleric', 'Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 32,
        statValue2: -25,
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
  { // War Maul
    category: 'Mace',
    name: 'War Maul',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: '--',
    requiredClass: ['Cleric','Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 53,
        statValue2: -25,
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
  { // Morning Star
    category: 'Mace',
    name: 'Morning Star',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: 'Heavy to the hand, the sharpened spikes of this morningstar are perfect for bludgeoning attacks.',
    requiredClass: ['Cleric','FIghter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 34,
        statValue2: -25,
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
  { // Quarterstaff
    category: 'Mace',
    name: 'Quarterstaff',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: '--',
    requiredClass: ['Fighter', 'Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 30,
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


  ////////////// SHIELDS
  { // Round Shield
    category: 'Shield',
    name: 'Round Shield',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed', 
    description: '--',
    requiredClass: ['Cleric','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',    //change to 'Armor Rating'?
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 26,
        statValue2: -12,  //
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
  { // Pavise
    category: 'Shield',
    name: 'Pavise',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Fighter','Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',     //change to 'Armor Rating'?
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 48,
        statValue2: -65, 
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
  { // Heater Shield
    category: 'Shield',
    name: 'Heater Shield',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed', 
    description: '--',
    requiredClass: [],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',    //change to 'Armor Rating'?
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 30,
        statValue2: -15,  
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
  { // Buckler
    category: 'Shield',
    name: 'Buckler',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed', 
    description: '--',
    requiredClass: ['Cleric','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',      //change to 'Armor Rating'?
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: -7,  //
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



  ////////////// MAGICAL WEAPONS
  { // Wizard Staff
    category: 'Magical Weapon',
    name: 'Wizard Staff',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Cleric','Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 24,
        statValue2: -20,
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
  { // Spellbook
    category: 'Magical Weapon',
    name: 'Spellbook',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Cleric','Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',     //no weapon damage
        statName2: 'Movement Speed',
        statName3: '',                   //magical damage?
        statName4: ''
      },
      statValues: {
        statValue1: 0,
        statValue2: -10, 
        statValue3: 0,                   //magical damage for common = 3
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
  { // Crystal Sword
    category: 'Magical Weapon',
    name: 'Crystal Sword',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',                  //magical weapon damage as a separate stat?
        statName4: ''
      },
      statValues: {
        statValue1: 11,
        statValue2: -30,  
        statValue3: 0,                      //commone magical weapon damage would be 9
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
  { // Crystal Ball
    category: 'Magical Weapon',
    name: 'Crystal Ball',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',           //no weapon damage
        statName2: 'Movement Speed',
        statName3: '',                        //add 'Magical Damage'? would = 3 for common
        statName4: ''
      },
      statValues: {
        statValue1: 0,
        statValue2: -25, 
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



  ////////////// BOWS
  { // Windlass Crossbow
    category: 'Bow',
    name: 'Windlass Crossbow',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 52,
        statValue2: -40, 
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
  { // Crossbow
    category: 'Bow',
    name: 'Crossbow',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Fighter','Ranger','Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 46,
        statValue2: -40, 
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
  { // Survival Bow
    category: 'Bow',
    name: 'Survival Bow',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 16,
        statValue2: -30, 
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
  { // Recurve Bow
    category: 'Bow',
    name: 'Recurve Bow',
    rarity: 'Common',
    slotType: 'Primary Weapon', 
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 30,
        statValue2: -40, 
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
  { // Longbow
    category: 'Bow',
    name: 'Longbow',
    rarity: 'Common',
    slotType: 'Primary Weapon', 
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 37,
        statValue2: -50,  
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



  ////////////// AXES
  { // Horsemans Axe
    category: 'Axe',
    name: 'Horsemans Axe',
    rarity: 'Common',
    slotType: 'Primary Weapon', 
    handType: 'One-Handed', 
    description: '--',
    requiredClass: ['Barbarian','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 24,
        statValue2: -30, 
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
  { // Hatchet
    category: 'Axe',
    name: 'Hatchet',
    rarity: 'Common',
    slotType: 'Secondary Weapon', 
    handType: 'One-Handed',
    description: '--',
    requiredClass: ['Barbarian','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 20,
        statValue2: -25,  
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
  { // Felling Axe
    category: 'Axe',
    name: 'Felling Axe',
    rarity: 'Common',
    slotType: 'Primary Weapon', 
    handType: 'Two-Handed', 
    description: '',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 40,
        statValue2: -40,
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
  { // Double Axe
    category: 'Axe',
    name: 'Double Axe',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 48,
        statValue2: -45,  
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
  { // Battle Axe
    category: 'Axe',
    name: 'Battle Axe',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Barbarian','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 42,
        statValue2: -45, 
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



  ////////////// POLEARMS
  { // Spear
    category: 'Polearm',
    name: 'Spear',
    rarity: 'Common',
    slotType: 'Primary Weapon', 
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 35,
        statValue2: -40,  
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
  { // Halberd
    category: 'Polearm',
    name: 'Halberd',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 44,
        statValue2: -50,
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
  { // Bardiche
    category: 'Polearm',
    name: 'Bardiche',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed', 
    description: '--',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 46,
        statValue2: -50,  
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



  ////////////// DAGGERS
  { // Stiletto Dagger
    category: 'Dagger',
    name: 'Stiletto Dagger',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    description: '--',
    requiredClass: ['Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 20,
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
  { // Rondel Dagger
    category: 'Dagger',
    name: 'Rondel Dagger',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: '--',
    requiredClass: ['Rogue','Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 19,
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
  { // Kris Dagger
    category: 'Dagger',
    name: 'Kris Dagger',
    rarity: 'Common',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    description: '--',
    requiredClass: ['Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 19,
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
  { // Castillon Dagger
    category: 'Dagger',
    name: 'Castillon Dagger',
    rarity: 'Common',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    description: '--',
    requiredClass: ['Fighter','Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Weapon Damage',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 21,
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
  
];