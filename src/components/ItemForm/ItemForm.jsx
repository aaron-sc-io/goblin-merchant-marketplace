import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const ItemForm = () => {
  const formik = useFormik({
    initialValues: {
      itemClasses: '',
      weapon: '',
      rarity: ''
    }
  });
  console.log('Values: ', formik.values);
  return (
    <Grid container>
      <Grid item xs={4}>
        <ItemClassSelector formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <RaritySelector formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <RaritySelector formik={formik} />
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
  const handleChange = (e) => {
    formik.setFieldValue('itemType', e.target.value);
  };
  return (
    <Box width='300px' pb={2}>
      <TextField
          id="formik-textfield-item"
          select
          label="Item"
          value={formik.values.itemType}
          onChange={handleChange}
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
]

export default ItemForm;