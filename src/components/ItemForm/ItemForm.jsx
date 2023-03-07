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
      case 'Dagger':
        setItemList(daggers);
        break;
      case 'Sword':
        setItemList(swords);
        break;
      case 'Axe':
        setItemList(axes);
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
    value: 'Sword',
    label: 'Sword',
  },
  {
    value: 'Mace',
    label: 'Mace',
  },
  {
    value: 'Dagger',
    label: 'Dagger',
  },
  {
    value: 'Polearm',
    label: 'Polearm',
  },
  {
    value: 'Axe',
    label: 'Axe',
  },
  {
    value: 'Bow',
    label: 'Bow',
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
  }
];

const axes = [
  {
    value: 'Felling Axe',
    label: 'Felling Axe'
  }
];

const swords = [
  {
    value: 'Two-Handed Sword',
    label: 'Two-Handed Sword'
  }
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