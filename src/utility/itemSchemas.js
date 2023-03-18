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
    slotType: 'Primary Weapoin',
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
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 26,
        statValue2: -12,  
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
        statName1: 'Armor Rating',   
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
        statName1: 'Armor Rating',   
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
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: -7,  
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
        statName1: 'Magical Damage',    
        statName2: 'Movement Speed',
        statName3: '',             
        statName4: ''
      },
      statValues: {
        statValue1: 3,
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
        statName3: 'Magical Weapon Damage',     
        statName4: ''
      },
      statValues: {
        statValue1: 11,
        statValue2: -30,  
        statValue3: 9,              
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
        statName1: 'Magical Damage',  
        statName2: 'Movement Speed',
        statName3: '',                     
        statName4: ''
      },
      statValues: {
        statValue1: 3,
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
  //Jewelry
  { // Rat Pendant
    category: 'Jewelry',
    name: 'Rat Pendant',
    rarity: 'Uncommon',
    slotType: 'Necklace',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Resourcefulness',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Necklace of peace
    category: 'Jewelry',
    name: 'Necklace of Peace',
    rarity: 'Uncommon',
    slotType: 'Necklace',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Knowledge',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Ox Pendant
    category: 'Jewelry',
    name: 'Ox Pendant',
    rarity: 'Uncommon',
    slotType: 'Necklace',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Strength',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Badger Pendant
    category: 'Jewelry',
    name: 'Badger Pendant',
    rarity: 'Uncommon',
    slotType: 'Necklace',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Will',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Fox Pendant
    category: 'Jewelry',
    name: 'Fox Pendant',
    rarity: 'Uncommon',
    slotType: 'Necklace',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Agility',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Ring of Survival
    category: 'Jewelry',
    name: 'Ring of Survival',
    rarity: 'Uncommon',
    slotType: 'Ring',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Resourcefulness',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Ring of Courage
    category: 'Jewelry',
    name: 'Ring of Courage',
    rarity: 'Uncommon',
    slotType: 'Ring',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Strength',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Ring of Resolve
    category: 'Jewelry',
    name: 'Ring of Resolve',
    rarity: 'Uncommon',
    slotType: 'Ring',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Will',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  { // Ring of Quickness
    category: 'Jewelry',
    name: 'Ring of Quickness',
    rarity: 'Uncommon',
    slotType: 'Ring',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Agility',
        statName2: '',
        statName3: '',
        statName4: ''
      },
      statValues: {
        statValue1: 1,
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
  },
  //Armor
  //Helmets
  { //Armet
    category: 'Head',
    name: 'Armet',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: 'Magic Resistance'
      },
      statValues: {
        statValue1: 28,
        statValue2: -12,
        statValue3: 18,
        statValue4: 7,
        statValue5: -5
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
  { //Barbuta Helmet
    category: 'Head',
    name: 'Barbuta Helmet',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: ''
      },
      statValues: {
        statValue1: 22,
        statValue2: -10,
        statValue3: 12,
        statValue4: 4,
        statValue5: 0
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
  { //Chapel De Fer
    category: 'Head',
    name: 'Chapel De Fer',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 18,
        statValue2: -8,
        statValue3: 10,
        statValue4: 10,
        statValue5: 0
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
  { //Chaperon
    category: 'Head',
    name: 'Chaperon',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Chaperon'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 6,
        statValue2: -5,
        statValue3: 5,
        statValue4: 10,
        statValue5: 0
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
  { //Gjermundbu
    category: 'Head',
    name: 'Gjermundbu',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: 'Magic Resistance'
      },
      statValues: {
        statValue1: 20,
        statValue2: -8,
        statValue3: 12,
        statValue4: 4,
        statValue5: 15
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
  { //Kettle Hat
    category: 'Head',
    name: 'Kettle Hat',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: 'Magic Resistance'
      },
      statValues: {
        statValue1: 18,
        statValue2: -8,
        statValue3: 10,
        statValue4: 2,
        statValue5: 10
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
  { //Leather Cap
    category: 'Head',
    name: 'Leather Cap',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 14,
        statValue2: -5,
        statValue3: 7,
        statValue4: 0,
        statValue5: 0
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
  { //Ranger Hood
    category: 'Head',
    name: 'Ranger Hood',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Ranger'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: -5,
        statValue3: 4,
        statValue4: 0,
        statValue5: 0
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
  { //Rogue Cowl
    category: 'Head',
    name: 'Rogue Cowl',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Rogue'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 10,
        statValue2: -5,
        statValue3: 4,
        statValue4: 0,
        statValue5: 0
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
  { //Viking Helmet
    category: 'Head',
    name: 'Viking Helmet',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: 'Magic Resistance'
      },
      statValues: {
        statValue1: 22,
        statValue2: -10,
        statValue3: 12,
        statValue4: 4,
        statValue5: 10
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
  { //Visored Barbuta Helmet
    category: 'Head',
    name: 'Visored Barbuta Helmet',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Projectile Reduction',
        statName5: ''
      },
      statValues: {
        statValue1: 22,
        statValue2: -10,
        statValue3: 13,
        statValue4: 6,
        statValue5: 0
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
  { //Wizard Hat
    category: 'Head',
    name: 'Wizard Hat',
    rarity: 'Common',
    slotType: 'Head',
    handType: '',
    description: '--',
    requiredClass: ['Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 7,
        statValue2: -5,
        statValue3: 2.5,
        statValue4: 5,
        statValue5: 0
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
//Chest
  { //Dark Plate Armor
    category: 'Chest',
    name: 'Dark Plate Armor',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 52,
        statValue2: -30,
        statValue3: 12,
        statValue4: 40,
        statValue5: 0
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
  { //Doublet
    category: 'Chest',
    name: 'Doublet',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Rogue','Ranger','Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 20,
        statValue2: -8,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Fine Cuirass
    category: 'Chest',
    name: 'Fine Cuirass',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Headshot Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 65,
        statValue2: -35,
        statValue3: 12,
        statValue4: -10,
        statValue5: 0
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
  { //Frock
    category: 'Chest',
    name: 'Frock',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Wizard','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 18,
        statValue2: -5,
        statValue3: 20,
        statValue4: 0,
        statValue5: 0
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
  { //Marauder Outfit
    category: 'Chest',
    name: 'Marauder Outfit',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Fighter'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Agility',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 32,
        statValue2: -10,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  { //Mystic Vestments
    category: 'Chest',
    name: 'Mystic Vestments',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Wizard','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Will',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 28,
        statValue2: -5,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  { //Northern Full Tunic
    category: 'Chest',
    name: 'Northern Full Tunic',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Barbarian'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 48,
        statValue2: -15,
        statValue3: 20,
        statValue4: 0,
        statValue5: 0
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
  { //Oracle Robe
    category: 'Chest',
    name: 'Oracle Robe',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Wizard','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Knowledge',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 24,
        statValue2: -5,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  { //Padded Tunic
    category: 'Chest',
    name: 'Padded Tunic',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: -5,
        statValue3: 10,
        statValue4: 0,
        statValue5: 0
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
  { //Regal Gambeson
    category: 'Chest',
    name: 'Regal Gambeson',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 40,
        statValue2: -15,
        statValue3: 10,
        statValue4: 0,
        statValue5: 0
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
  { //Templar Armor
    category: 'Chest',
    name: 'Templar Armor',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 150,
        statValue2: -20,
        statValue3: 20,
        statValue4: 0,
        statValue5: 0
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
  { //Warden Outfit
    category: 'Chest',
    name: 'Warden Outfit',
    rarity: 'Common',
    slotType: 'Chest',
    handType: '',
    description: '--',
    requiredClass: ['Chest'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Agility',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 35,
        statValue2: -10,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  //Legs
  { //Cloth Pants
    category: 'Legs',
    name: 'Cloth Pants',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 10,
        statValue2: -5,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Heavy Leather Leggings
    category: 'Legs',
    name: 'Heavy Leather Leggings',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Strenth',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 22,
        statValue2: -8,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  { //Leather Leggings
    category: 'Legs',
    name: 'Leather Leggings',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 18,
        statValue2: -5,
        statValue3: 10,
        statValue4: 0,
        statValue5: 0
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
  { //Loose Trousers
    category: 'Legs',
    name: 'Cloth Pants',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: -5,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Padded Leggings
    category: 'Legs',
    name: 'Padded Leggings',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Will',
        statName4: 'Knowledge',
        statName5: ''
      },
      statValues: {
        statValue1: 14,
        statValue2: -5,
        statValue3: 1,
        statValue4: 1,
        statValue5: 0
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
  { //Plate Pants
    category: 'Legs',
    name: 'Plate Pants',
    rarity: 'Common',
    slotType: 'Legs',
    handType: '',
    description: '--',
    requiredClass: ['FIghter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Projectile Reduction',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 30,
        statValue2: -18,
        statValue3: 9,
        statValue4: -5,
        statValue5: 0
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
  //Hands
  { //Heavy Gauntlet
    category: 'Hands',
    name: 'Heavy Gauntlet',
    rarity: 'Common',
    slotType: 'Hands',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Projectile Reduciton',
        statName4: 'Magic Resistance',
        statName5: ''
      },
      statValues: {
        statValue1: 15,
        statValue2: -3,
        statValue3: 4,
        statValue4: -5,
        statValue5: 0
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
  { //Leather Gloves
    category: 'Hands',
    name: 'Leather Gloves',
    rarity: 'Common',
    slotType: 'Hands',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Agility',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 5,
        statValue2: 1,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Rawhide Gloves
    category: 'Hands',
    name: 'Rawhide Gloves',
    rarity: 'Common',
    slotType: 'Hands',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Will',
        statName3: 'Knowledge',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 5,
        statValue2: 1,
        statValue3: 1,
        statValue4: 0,
        statValue5: 0
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
  { //Reinforced Gloves
    category: 'Hands',
    name: 'Reinforced Gloves',
    rarity: 'Common',
    slotType: 'Hands',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Magic Resistance',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 8,
        statValue2: 10,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Riveted Gloves
    category: 'Hands',
    name: 'Riveted Gloves',
    rarity: 'Common',
    slotType: 'Hands',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Strength',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 8,
        statValue2: 1,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  //foot
  { //Adventurer Boots
    category: 'Foot',
    name: 'Adventurer Boots',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 8,
        statValue2: 5,
        statValue3: 5,
        statValue4: 0,
        statValue5: 0
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
  { //Heavy Boots
    category: 'Foot',
    name: 'Heavy Boots',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 12,
        statValue2: 5,
        statValue3: 5,
        statValue4: 0,
        statValue5: 0
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
  { //Laced Turnshoe
    category: 'Foot',
    name: 'Laced Turnshoe',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 7,
        statValue2: 3,
        statValue3: 5,
        statValue4: 0,
        statValue5: 0
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
  { //Lightfoot Boots
    category: 'Foot',
    name: 'Lightfoot Boots',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 5,
        statValue2: 8,   //lightfoot boots movement speed will depend on rarity
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Old Shoes
    category: 'Foot',
    name: 'Old Shoes',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: '',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 4,
        statValue2: 3,
        statValue3: 0,
        statValue4: 0,
        statValue5: 0
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
  { //Plate Boots
    category: 'Foot',
    name: 'Plate Boots',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['Fighter','Cleric'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Projectile Reduction',
        statName4: 'Magic Resistance',
        statName5: 'Strength'
      },
      statValues: {
        statValue1: 20,
        statValue2: 2,
        statValue3: 5,
        statValue4: -5,
        statValue5: 1
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
  { //Rugged Boots
    category: 'Foot',
    name: 'Rugged Boots',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['All Classes'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 8,
        statValue2: 5,
        statValue3: 10,
        statValue4: 0,
        statValue5: 0
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
  { //Wizard Shoes
    category: 'Foot',
    name: 'Wizard Shoes',
    rarity: 'Common',
    slotType: 'Foot',
    handType: '',
    description: '--',
    requiredClass: ['Wizard'],
    baseStats: {
      statNames: {
        statName1: 'Armor Rating',
        statName2: 'Movement Speed',
        statName3: 'Magic Resistance',
        statName4: '',
        statName5: ''
      },
      statValues: {
        statValue1: 3,
        statValue2: 5,
        statValue3: 10,
        statValue4: 0,
        statValue5: 0
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