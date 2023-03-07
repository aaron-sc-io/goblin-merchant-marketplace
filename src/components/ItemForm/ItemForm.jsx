import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const ItemForm = () => {
  const formik = useFormik({
    initialValues: {
      rarity: 'Uncommon',
      category: 'Sword',
      item: ''
    }
  });
  console.log(formik);
  return (
    <Grid container>
      <Grid item sm={12}>
        <RaritySelector formik={formik} />
      </Grid>
      <Grid item sm={12}>
        <ItemClassSelector formik={formik} />
      </Grid>
    </Grid>
  );
};

const RaritySelector = ({ formik }) => {
  const handleChange = (e) => {
    formik.setFieldValue('rarity', e.target.value);
  };
  return (
    <Box width='300px' pb={2}>
      <TextField
          id="formik-textfield-rarity"
          select
          label="Rarity"
          value={formik.values.rarity}
          onChange={handleChange}
          fullWidth
          variant="outlined"
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

const ItemClassSelector = ({ formik }) => {
  const [itemList, setItemList] = useState(allItems);
  const handleCategoryChange = (e) => {
    formik.setFieldValue('category', e.target.value);
    handleItemListChange(e.target.value);
  };
  const handleItemChange = (e) => {
    formik.setFieldValue('item', e.target.value);
  };
  const handleItemListChange = (category) => {
    switch (category) {
      // define in global statics w/ enums(potentially)
      case 'Swords':
        setItemList(swords);
        break;
      case 'Maces':
        setItemList(maces);
        break;
      case 'Daggers':
        setItemList(daggers);
        break;
      case 'Polearms':
          setItemList(polearms);
          break;  
      case 'Axes':
        setItemList(axes);
        break;
      case 'Bows':
        setItemList(bows);
        break;
      case 'Magical Weapons':
        setItemList(magicalWeapons);
        break;
      case 'Shields':
        setItemList(shields);
        break;
      case 'Jewelry':
        setItemList(jewelry);
        break;
      default:
        setItemList(allItems);
    }
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'horizontal'}} >
      <Box width='300px' pb={2} pr={2}>
        <TextField
            id="formik-textfield-category"
            select
            label="Item Category"
            value={formik.values.category}
            onChange={handleCategoryChange}
            fullWidth
            variant="outlined"
          >
            {itemClasses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      </Box>
      <Box width='300px' pb={2}>
      <TextField
          id="formik-textfield-item"
          select
          label="Item"
          value={formik.values.item}
          onChange={handleItemChange}
          fullWidth
          variant="outlined"
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


const itemClasses = [
  {
    value: 'Swords',
    label: 'Swords',
  },
  {
    value: 'Maces',
    label: 'Maces',
  },
  {
    value: 'Daggers',
    label: 'Daggers',
  },
  {
    value: 'Polearms',
    label: 'Polearms',
  },
  {
    value: 'Axes',
    label: 'Axes',
  },
  {
    value: 'Bows',
    label: 'Bows',
  },
  {
    value: 'Magical Weapons',
    label: 'Magical Weapons',
  },
  {
    value: 'Shields',
    label: 'Shields',
  },
  {
    value: 'Jewelry',
    label: 'Jewelry',
  }
];

const rarities = [
  {
    value: 'Uncommon',
    label: 'Uncommon',
  },
  {
    value: 'Rare',
    label: 'Rare',
  },
  {
    value: 'Epic',
    label: 'Epic',
  },
  {
    value: 'Legendary',
    label: 'Legendary',
  },
  {
    value: 'Unique',
    label: 'Unique',
  }
];

const statBonusTypes = [
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