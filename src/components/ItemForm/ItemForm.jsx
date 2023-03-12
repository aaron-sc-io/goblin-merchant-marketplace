import { TextField, Grid, MenuItem, Box,  } from '@mui/material';
import { useState, useEffect } from 'react';

const ItemForm = ({ formik }) => {
  console.log('form', formik.values);
 
  return (
    <>
      <Grid container>
        <Grid item sm={6}>
          <ItemCategorySelector formik={formik} />
          <BaseStatSelector formik={formik} />
        </Grid>
        <Grid item sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <RaritySelector formik={formik} />
            <BonusStatSelector formik={formik} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const RaritySelector = ({ formik }) => {
  const handleChange = (e) => {
    formik.setFieldValue('rarity', e.target.value);
  };
  return (
    <Box width='150px' pb={2}>
      <TextField
        id='formik-textfield-rarity'
        select
        label='Rarity'
        value={formik.values.rarity}
        onChange={handleChange}
        fullWidth
        variant='outlined'
        InputLabelProps={{ shrink: true }}
      >
        {rarities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

const ItemCategorySelector = ({ formik }) => {

  const [itemList, setItemList] = useState(swords);
  const [itemCategory, setItemCategory] = useState('All Items');

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
    handleItemListChange(e.target.value);
  };
  const handleItemChange = (e) => {
    formik.setFieldValue('name', e.target.value);
    // handle item default value changes here
  };
  const handleItemListChange = (category) => {
    switch (category) {
      // define in global statics w/ enums(potentially)
      //method should be, setItemBaseStatDefaults(itemType)
      case ('Sword'):
        setItemList(swords);
        formik.setFieldValue('name', swords[0].value);
        formik.setFieldValue('category', 'Sword');
        break;
      case 'Mace':
        setItemList(maces);
        formik.setFieldValue('name', maces[0].value);
        formik.setFieldValue('category', 'Mace');
        break;
      case 'Dagger':
        setItemList(daggers);
        formik.setFieldValue('name', daggers[0].value);
        formik.setFieldValue('category', 'Dagger');
        break;
      case 'Polearm':
        setItemList(polearms);
        formik.setFieldValue('name', polearms[0].value);
        formik.setFieldValue('category', 'Polearm');
        break;  
      case 'Axe':
        setItemList(axes);
        formik.setFieldValue('name', axes[0].value);
        formik.setFieldValue('category', 'Axe');
        break;
      case 'Bow':
        setItemList(bows);
        formik.setFieldValue('name', bows[0].value);
        formik.setFieldValue('category', 'Bow');
        break;
      case 'Magical Weapon':
        setItemList(magicalWeapons);
        formik.setFieldValue('name', magicalWeapons[0].value);
        formik.setFieldValue('category', 'Magical Weapon');
        break;
      case 'Shield':
        setItemList(shields);
        formik.setFieldValue('name', shields[0].value);
        formik.setFieldValue('category', 'Shield');
        break;
      case 'Jewelry':
        setItemList(jewelry);
        formik.setFieldValue('name', jewelry[0].value);
        formik.setFieldValue('category', 'Jewelry');
        break;
      case 'All Items':
        setItemList(allItems);
        formik.setFieldValue('name', allItems[0].value);
        break;
      default:
        setItemList(allItems);
        formik.setFieldValue('name', allItems[0].value);
    }
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'horizontal'}} >
      <Box width='150px' pb={2} pr={1}>
        <TextField
            id='formik-textfield-category'
            select
            label='Item Category'
            value={itemCategory}
            onChange={handleCategoryChange}
            fullWidth
            variant='outlined'
            InputLabelProps={{ shrink: true }}
          >
            {itemClasses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      </Box>
      <Box width='175px' pb={2}>
      <TextField
          id='formik-textfield-item'
          select
          label='Item'
          value={formik.values.name}
          onChange={handleItemChange}
          fullWidth
          variant='outlined'
          InputLabelProps={{ shrink: true }}
        >
          {itemList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  </Box>
  );
};

const BonusStatSelector = ({ formik }) => {

  const [rarityInteger, setRarityInteger] = useState(0);
  const item = formik.values;

  const handleSetRarity = (rarityString) => {
    switch (rarityString) {
      case 'Common':
        setRarityInteger(0);
        break;
      case 'Uncommon':
        setRarityInteger(1);
        break;
      case 'Rare':
        setRarityInteger(2);
        break;
      case 'Epic':
        setRarityInteger(3);
        break;
      case 'Legendary':
        setRarityInteger(4);
        break;
      case 'Unique':
        setRarityInteger(5);
        break;
      default:
        setRarityInteger(0);
    }
  };

  useEffect(() => {
    handleSetRarity(item.rarity);
  }, [handleSetRarity]);

  const StatLine1 = ({ isDisabled }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2}>
        <Box sx={{ width: '200px' }} pr={1}>
          <TextField
              id='formik-textfield-bonus-stat-type-1'
              select
              label='Enchantment 1'
              value={item.bonusStats.statNames.statName1}
              onChange={(e) => {formik.setFieldValue('bonusStats.statNames.statName1', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={isDisabled}
              InputLabelProps={{ shrink: true }}
            >
              {bonusStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '100px' }}>
        <TextField
          id='formik-textfield-bonus-stat-value-1'
          label='Value'
          value={item.bonusStats.statValues.statValue1}
          onChange={(e) => {formik.setFieldValue('bonusStats.statValues.statValue1', e.target.value)}}
          variant='outlined'
          type='number'
          disabled={isDisabled}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
    </Box>
    );
  };
  const StatLine2 = ({ isDisabled }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2} >
        <Box sx={{ width: '200px' }} pr={1} >
          <TextField
              id='formik-textfield-bonus-stat-type-2'
              select
              label='Enchantment 2'
              value={item.bonusStats.statNames.statName2}
              onChange={(e) => {formik.setFieldValue('bonusStats.statNames.statName2', e.target.value)}}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              disabled={isDisabled}
            >
              {bonusStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '100px' }}>
        <TextField
          id='formik-textfield-bonus-stat-value-2'
          label='Value'
          value={item.bonusStats.statValues.statValue2}
          onChange={(e) => {formik.setFieldValue('bonusStats.statValues.statValue2', e.target.value)}}
          variant='outlined'
          type='number'
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
      </Box>
    </Box>
    );
  };
  const StatLine3 = ({ isDisabled }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2} >
        <Box sx={{ width: '200px'}} pr={1} >
          <TextField
              id='formik-textfield-bonus-stat-type-3'
              select
              label='Enchantment 3'
              value={item.bonusStats.statValues.statName3}
              onChange={(e) => {formik.setFieldValue('bonusStats.statNames.statName3', e.target.value)}}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              disabled={isDisabled}
            >
              {bonusStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '100px' }}>
        <TextField
          id='formik-textfield-bonus-stat-value-3'
          label='Value'
          value={item.bonusStats.statValues.statValue3}
          onChange={(e) => {formik.setFieldValue('bonusStats.statValues.statValue3', e.target.value)}}
          variant='outlined'
          type='number'
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
      </Box>
    </Box>
    );
  };
  const StatLine4 = ({ isDisabled }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2} >
        <Box sx={{ width: '200px'}} pr={1} >
          <TextField
              id='formik-textfield-bonus-stat-type-4'
              select
              label='Enchantment 3'
              value={item.bonusStats.statNames.statName4}
              onChange={(e) => {formik.setFieldValue('bonusStats.statNames.statName4', e.target.value)}}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              disabled={isDisabled}
            >
              {bonusStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '100px' }}>
        <TextField
          id='formik-textfield-bonus-stat-value-4'
          label='Value'
          value={item.bonusStats.statValues.statValue4}
          onChange={(e) => {formik.setFieldValue('bonusStats.statValues.statValue4', e.target.value)}}
          variant='outlined'
          type='number'
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
      </Box>
    </Box>
    );
  };
  const StatLine5 = ({ isDisabled }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2} >
        <Box sx={{ width: '200px' }} pr={1}>
          <TextField
              id='formik-textfield-bonus-stat-type-5'
              select
              label='Enchantment 5'
              value={item.bonusStats.statNames.statName5}
              onChange={(e) => {formik.setFieldValue('bonusStats.statNames.statName5', e.target.value)}}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              disabled={isDisabled}
            >
              {bonusStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '100px' }}>
        <TextField
          id='formik-textfield-bonus-stat-value-5'
          label='Value'
          value={item.bonusStats.statValues.statValue5}
          onChange={(e) => {formik.setFieldValue('bonusStats.statValues.statValue5', e.target.value)}}
          variant='outlined'
          type='number'
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
      </Box>
    </Box>
    );
  };

  return (
    <Box pt={2}>
      <StatLine1 isDisabled={!(rarityInteger > 0)}/> 
      <StatLine2 isDisabled={!(rarityInteger > 1)}/> 
      <StatLine3 isDisabled={!(rarityInteger > 2)}/>
      <StatLine4 isDisabled={!(rarityInteger > 3)}/> 
      <StatLine5 isDisabled={!(rarityInteger > 4)}/> 
    </Box>
  );
  
};

const BaseStatSelector = ({ formik }) => {
  const item = formik.values;
  useEffect(() => {
    console.log(item.name);
    //handleSetDefaults(item.name);
  }, [item.name])
  return (
    <>
      ${item.name}
    </>
  )
};

///////////////// ------- UTITILIES ------- /////////////////
const itemClasses = [
  {
    value: '',
    label: ''
  },
  {
    value: 'All Items',
    label: 'All Items',
  },
  {
    value: 'Sword',
    label: 'Swords',
  },
  {
    value: 'Mace',
    label: 'Maces',
  },
  {
    value: 'Dagger',
    label: 'Daggers',
  },
  {
    value: 'Polearm',
    label: 'Polearms',
  },
  {
    value: 'Axe',
    label: 'Axes',
  },
  {
    value: 'Bow',
    label: 'Bows',
  },
  {
    value: 'Magical Weapon',
    label: 'Magical Weapons',
  },
  {
    value: 'Shield',
    label: 'Shields',
  },
  {
    value: 'Jewelry',
    label: 'Jewelry',
  }
];

const rarities = [
  {
    value: 'Common',
    label: 'Common'
  },
  {
    value: 'Uncommon',
    label: 'Uncommon'
  },
  {
    value: 'Rare',
    label: 'Rare'
  },
  {
    value: 'Epic',
    label: 'Epic'
  },
  {
    value: 'Legendary',
    label: 'Legendary'
  },
  {
    value: 'Unique',
    label: 'Unique'
  }
];

const bonusStatTypes = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Attack Damage',
    label: 'Attack Damage'
  },
  {
    value: 'Armor',
    label: 'Armor'
  },
  {
    value: 'All Attributes',
    label: 'All Attributes'
  },
  {
    value: 'Movement Speed',
    label: 'Movement Speed'
  }
];

const baseStatTypes = [
  {
    value: 'Attack Damage',
    label: 'Attack Damage'
  },
  {
    value: 'Armor',
    label: 'Armor'
  },
];

const daggers = [
  {
    value: 'Rondel Dagger',
    label: 'Rondel Dagger'
  },
  {
    value: 'Stiletto Dagger',
    label: 'Stiletto Dagger'
  },
  {
    value: 'Kris Dagger',
    label: 'Kris Dagger'
  },
  {
    value: 'Castillion Dagger',
    label: 'Castillion Dagger'
  }
];

const axes = [
  {
    value: 'Battle Axe',
    label: 'Battle Axe'
  },
  {
    value: 'Double Axe',
    label: 'Double Axe'
  },
  {
    value: 'Felling Axe',
    label: 'Felling Axe'
  },
  {
    value: 'Hatchet',
    label: 'Hatchet'
  },
  {
    value: 'Horsemans Axe',
    label: 'Horsemans Axe'
  }
];

const swords = [
  {
    value: 'Arming Sword',
    label: 'Arming Sword'
  },
  {
    value: 'Falchion',
    label: 'Falchion'
  },
  {
    value: 'Longsword',
    label: 'Longsword'
  },
  {
    value: 'Rapier',
    label: 'Rapier'
  },
  {
    value: 'Short Sword',
    label: 'Short Sword'
  },
  {
    value: 'Zweihander',
    label: 'Zweihander'
  }
];

const maces = [
{
  value: 'Flanged Mace',
  label: 'Flanged Mace'
},
{
  value: 'Morning Star',
  label: 'Morning Star'
},
{
  value: 'Quarterstaff',
  label: 'Quarterstaff'
},
{
  value: 'War Maul',
  label: 'War Maul'
}
];

const polearms = [
  {
    value: 'Bardiche',
    label: 'Bardiche'
  },
  {
    value: 'Halberd',
    label: 'Halberd'
  },
  {
    value: 'Spear',
    label: 'Spear'
  },
];

const bows = [
  {
    value: 'Longbow',
    label: 'Longbow'
  },
  {
    value: 'Recurve Bow',
    label: 'Recurve Bow'
  },
  {
    value: 'Survival Bow',
    label: 'Survival Bow'
  },
  {
    value: 'Crossbow',
    label: 'Crossbow'
  },
  {
    value: 'Windlass Crossbow',
    label: 'Windlass Crossbow'
  }
];

const magicalWeapons = [
  {
    value: 'Crystal Ball',
    label: 'Crystal Ball'
  },
  {
    value: 'Crystal Sword',
    label: 'Crystal Sword'
  },
  {
    value: 'Spellbook',
    label: 'Spellbook'
  },
  {
    value: 'Wizard Staff',
    label: 'Wizard Staff'
  }
];

const shields = [
  {
    value: 'Buckler',
    label: 'Buckler'
  },
  {
    value: 'Heater Shield',
    label: 'Heater Shield'
  },
  {
    value: 'Pavise',
    label: 'Pavise'
  },
  {
    value: 'Round Shield',
    label: 'Round Shield'
  }
];

const jewelry = [
  {
    value: 'Rat Pendant',
    label: 'Rat Pendant'
  },
  {
    value: 'Necklace of Peace',
    label: 'Necklace of Peace'
  },
  {
    value: 'Ox Pendant',
    label: 'Ox Pendant'
  },
  {
    value: 'Badger Pendant',
    label: 'Badger Pendant'
  },
  {
    value: 'Fox Pendant',
    label: 'Fox Pendant'
  },
  {
    value: 'Ring of Survival',
    label: 'Ring of Survival'
  },
  {
    value: 'Ring of Courage',
    label: 'Ring of Courage'
  },
  {
    value: 'Ring of Resolve',
    label: 'Ring of Resolve'
  },
  {
    value: 'Ring of Quickness',
    label: 'Ring of Quickness'
  },
];

const allItems = [
  {
    value: 'Felling Axe',
    label: 'Felling Axe'
  },
  {
    value: 'Rondel Dagger',
    label: 'Rondel Dagger'
  }
];

export default ItemForm;