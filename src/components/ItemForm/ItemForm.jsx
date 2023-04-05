import { TextField, Grid, MenuItem, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { itemSchemas } from '../../utility/itemSchemas';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { colorLibrary } from '../../utility/colors';

const ItemForm = ({ formik }) => {
  return (
    <>
      <Grid container>
        <Grid item sm={6} px={1.5}>
          <ItemCategorySelector formik={formik} />
          <BaseStatSelector formik={formik} />
        </Grid>
        <Grid item sm={6} px={1.5}>
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
    <Box width='175px' pb={2}>
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
      case 'Helmet':
        setItemList(helmets);
        formik.setFieldValue('name', helmets[0].value);
        formik.setFieldValue('category', 'Helmet');
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

  const handleSetItemDefaults = () => {
    const itemDefaultObject = itemSchemas.filter(item => { return item.name === formik.values.name })[0];
    formik.setFieldValue('baseStats.statNames.statName1', itemDefaultObject.baseStats.statNames.statName1 ? itemDefaultObject.baseStats.statNames.statName1 : '');
    formik.setFieldValue('baseStats.statValues.statValue1', itemDefaultObject.baseStats.statValues.statValue1 ? itemDefaultObject.baseStats.statValues.statValue1 : 0);
    formik.setFieldValue('baseStats.statNames.statName2', itemDefaultObject.baseStats.statNames.statName2 ? itemDefaultObject.baseStats.statNames.statName2 : '');
    formik.setFieldValue('baseStats.statValues.statValue2', itemDefaultObject.baseStats.statValues.statValue2 ? itemDefaultObject.baseStats.statValues.statValue2 : 0);
    formik.setFieldValue('baseStats.statNames.statName3', itemDefaultObject.baseStats.statNames.statName3 ? itemDefaultObject.baseStats.statNames.statName3 : '');
    formik.setFieldValue('baseStats.statValues.statValue3', itemDefaultObject.baseStats.statValues.statValue3 ? itemDefaultObject.baseStats.statValues.statValue3 : 0);
    formik.setFieldValue('baseStats.statNames.statName4', itemDefaultObject.baseStats.statNames.statName4 ? itemDefaultObject.baseStats.statNames.statName4 : '');
    formik.setFieldValue('baseStats.statValues.statValue4', itemDefaultObject.baseStats.statValues.statValue4 ? itemDefaultObject.baseStats.statValues.statValue4 : 0);
    formik.setFieldValue('baseStats.statNames.statName5', itemDefaultObject.baseStats.statNames.statName5 ? itemDefaultObject.baseStats.statNames.statName5 : '');
    formik.setFieldValue('baseStats.statValues.statValue5', itemDefaultObject.baseStats.statValues.statValue5 ? itemDefaultObject.baseStats.statValues.statValue5 : 0);
    formik.setFieldValue('bonusStats.statNames.statName1', itemDefaultObject.bonusStats.statNames.statName1 ? itemDefaultObject.bonusStats.statNames.statName1 : '');
    formik.setFieldValue('bonusStats.statValues.statValue1', itemDefaultObject.bonusStats.statValues.statValue1 ? itemDefaultObject.bonusStats.statValues.statValue1 : 0);
    formik.setFieldValue('bonusStats.statNames.statName2', itemDefaultObject.bonusStats.statNames.statName2 ? itemDefaultObject.bonusStats.statNames.statName2 : '');
    formik.setFieldValue('bonusStats.statValues.statValue2', itemDefaultObject.bonusStats.statValues.statValue2 ? itemDefaultObject.bonusStats.statValues.statValue2 : 0);
    formik.setFieldValue('bonusStats.statNames.statName3', itemDefaultObject.bonusStats.statNames.statName3 ? itemDefaultObject.bonusStats.statNames.statName3 : '');
    formik.setFieldValue('bonusStats.statValues.statValue3', itemDefaultObject.bonusStats.statValues.statValue3 ? itemDefaultObject.bonusStats.statValues.statValue3 : 0);
    formik.setFieldValue('bonusStats.statNames.statName4', itemDefaultObject.bonusStats.statNames.statName4 ? itemDefaultObject.bonusStats.statNames.statName4 : '');
    formik.setFieldValue('bonusStats.statValues.statValue4', itemDefaultObject.bonusStats.statValues.statValue4 ? itemDefaultObject.bonusStats.statValues.statValue4 : 0);
    formik.setFieldValue('bonusStats.statNames.statName5', itemDefaultObject.bonusStats.statNames.statName5 ? itemDefaultObject.bonusStats.statNames.statName5 : '');
    formik.setFieldValue('bonusStats.statValues.statValue5', itemDefaultObject.bonusStats.statValues.statValue5 ? itemDefaultObject.bonusStats.statValues.statValue5 : 0);
    formik.setFieldValue('description', itemDefaultObject.description ? itemDefaultObject.description : '');
    formik.setFieldValue('handType', itemDefaultObject.handType ? itemDefaultObject.handType : '');
    formik.setFieldValue('requiredClass', itemDefaultObject.requiredClass ? itemDefaultObject.requiredClass: '');
    formik.setFieldValue('slotType', itemDefaultObject.slotType ? itemDefaultObject.slotType : '');
  };

  useEffect(() => {
    handleSetItemDefaults();
  }, [formik.values.name]);

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

const BaseStatSelector = ({ formik }) => {
  const item = formik.values;
  console.log(item);

  const isDisabled = (item.slotType === 'Primary Weapon' || item.slotType === 'Secondary Weapon' || item.slotType === 'Head');

  const StatLine1 = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2}>
        <Box sx={{ width: '250px' }} pr={1}>
          <TextField
              id='formik-textfield-base-stat-type-1'
              select
              label='Base Stat 1'
              value={item.baseStats.statNames.statName1}
              onChange={(e) => {formik.setFieldValue('baseStats.statNames.statName1', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={true}
              InputLabelProps={{ shrink: true }}
              component={'span'}
            >
              {baseStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '75px' }}>
        <TextField
          id='formik-textfield-base-stat-value-1'
          label='Value'
          value={item.baseStats.statValues.statValue1}
          onChange={(e) => {formik.setFieldValue('baseStats.statValues.statValue1', e.target.value)}}
          variant='outlined'
          type='number'
          disabled={(item.baseStats.statNames.statName1 === '' || item.baseStats.statNames.statName1 === 'Movement Speed')}
          InputLabelProps={{ shrink: true }}
          component={'span'}
        />
      </Box>
    </Box>
    );
  };
  const StatLine2 = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2} >
        <Box sx={{ width: '250px' }} pr={1}>
          <TextField
              id='formik-textfield-base-stat-type-2'
              select
              label='Base Stat 2'
              value={item.baseStats.statNames.statName2}
              onChange={(e) => {formik.setFieldValue('baseStats.statNames.statName2', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={true}
              InputLabelProps={{ shrink: true }}
              component={'span'}
            >
              {baseStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '75px' }}>
          <TextField
            id='formik-textfield-base-stat-value-2'
            label='Value'
            value={item.baseStats.statValues.statValue2}
            onChange={(e) => {formik.setFieldValue('baseStats.statValues.statValue2', e.target.value)}}
            variant='outlined'
            type='number'
            disabled={(item.baseStats.statNames.statName2 === '' || item.baseStats.statNames.statName2 === 'Movement Speed')}
            InputLabelProps={{ shrink: true }}
            component={'span'}
          />
        </Box>
      </Box>
    );
  };
  const StatLine3 = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2}>
        <Box sx={{ width: '250px' }} pr={1}>
          <TextField
              id='formik-textfield-base-stat-type-3'
              select
              label='Base Stat 3'
              value={item.baseStats.statNames.statName3}
              onChange={(e) => {formik.setFieldValue('baseStats.statNames.statName3', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={true}
              InputLabelProps={{ shrink: true }}
              component={'span'}
            >
              {baseStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '75px' }}>
          <TextField
            id='formik-textfield-base-stat-value-3'
            label='Value'
            value={item.baseStats.statValues.statValue3}
            onChange={(e) => {formik.setFieldValue('baseStats.statValues.statValue3', e.target.value)}}
            variant='outlined'
            type='number'
            disabled={(item.baseStats.statNames.statName3 === '' || item.baseStats.statNames.statName3 === 'Movement Speed')}
            InputLabelProps={{ shrink: true }}
            component={'span'}
          />
        </Box>
      </Box>
    );
  };
  const StatLine4 = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2}>
        <Box sx={{ width: '250px' }} pr={1}>
          <TextField
              id='formik-textfield-base-stat-type-4'
              select
              label='Base Stat 4'
              value={item.baseStats.statNames.statName4}
              onChange={(e) => {formik.setFieldValue('baseStats.statNames.statName4', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={true}
              InputLabelProps={{ shrink: true }}
              component={'span'}
            >
              {baseStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '75px' }}>
          <TextField
            id='formik-textfield-base-stat-value-4'
            label='Value'
            value={item.baseStats.statValues.statValue4}
            onChange={(e) => {formik.setFieldValue('baseStats.statValues.statValue4', e.target.value)}}
            variant='outlined'
            type='number'
            disabled={(item.baseStats.statNames.statName4 === '' || item.baseStats.statNames.statName4 === 'Movement Speed')}
            InputLabelProps={{ shrink: true }}
            component={'span'}
          />
        </Box>
      </Box>
    );
  }
  const StatLine5 = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }} pb={2}>
        <Box sx={{ width: '250px' }} pr={1}>
          <TextField
              id='formik-textfield-base-stat-type-5'
              select
              label='Base Stat 5'
              value={item.baseStats.statNames.statName5}
              onChange={(e) => {formik.setFieldValue('baseStats.statNames.statName5', e.target.value)}}
              fullWidth
              variant='outlined'
              disabled={true}
              InputLabelProps={{ shrink: true }}
            >
              {baseStatTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </Box>
        <Box sx={{ width: '75px' }}>
          <TextField
            id='formik-textfield-base-stat-value-5'
            label='Value'
            value={item.baseStats.statValues.statValue5}
            onChange={(e) => {formik.setFieldValue('baseStats.statValues.statValue5', e.target.value)}}
            variant='outlined'
            type='number'
            disabled={(item.baseStats.statNames.statName5 === '' || item.baseStats.statNames.statName5 === 'Movement Speed')}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box pt={2}>
      <StatLine1 />
      <StatLine2 />
      <StatLine3 />
      <StatLine4 />
      <StatLine5 />
    </Box>
  )
};

const BonusStatSelector = ({ formik }) => {

  const [rarityInteger, setRarityInteger] = useState(0);
  const item = formik.values;

  const handleSetRarity = (rarityString) => {
    switch (rarityString) {
      case 'Common':
        setRarityInteger(0);
        formik.setFieldValue('bonusStats.statNames.statName1', '');
        formik.setFieldValue('bonusStats.statNames.statName2', '');
        formik.setFieldValue('bonusStats.statNames.statName3', '');
        formik.setFieldValue('bonusStats.statNames.statName4', '');
        formik.setFieldValue('bonusStats.statNames.statName5', '');
        break;
      case 'Uncommon':
        setRarityInteger(1);
        formik.setFieldValue('bonusStats.statNames.statName2', '');
        formik.setFieldValue('bonusStats.statNames.statName3', '');
        formik.setFieldValue('bonusStats.statNames.statName4', '');
        formik.setFieldValue('bonusStats.statNames.statName5', '');
        break;
      case 'Rare':
        setRarityInteger(2);
        formik.setFieldValue('bonusStats.statNames.statName3', '');
        formik.setFieldValue('bonusStats.statNames.statName4', '');
        formik.setFieldValue('bonusStats.statNames.statName5', '');
        break;
      case 'Epic':
        setRarityInteger(3);
        formik.setFieldValue('bonusStats.statNames.statName4', '');
        formik.setFieldValue('bonusStats.statNames.statName5', '');
        break;
      case 'Legendary':
        setRarityInteger(4);
        formik.setFieldValue('bonusStats.statNames.statName5', '');
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
    item.bonusStats.statNames.statName1 === '' && formik.setFieldValue('bonusStats.statValues.statValue1', 0);
    item.bonusStats.statNames.statName2 === '' && formik.setFieldValue('bonusStats.statValues.statValue2', 0);
    item.bonusStats.statNames.statName3 === '' && formik.setFieldValue('bonusStats.statValues.statValue3', 0);
    item.bonusStats.statNames.statName4 === '' && formik.setFieldValue('bonusStats.statValues.statValue4', 0);
    item.bonusStats.statNames.statName5 === '' && formik.setFieldValue('bonusStats.statValues.statValue5', 0);
  }, [item.rarity]);

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
              value={item.bonusStats.statNames.statName3}
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


// MOVE TO itemFormUtilies.js and add imports to top
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
  },
  {
    value: 'Helmet',
    label: 'Helmets'
  }
];

const rarities = [
  {
    value: 'Common',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon sx={{ color: colorLibrary.grey }}/> 
              &nbsp;Common
            </Box>
  },
  {
    value: 'Uncommon',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon sx={{ color: colorLibrary.neonGreen }}/> 
              &nbsp;Uncommon
            </Box>
  },
  {
    value: 'Rare',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon sx={{ color: colorLibrary.neonBlu }}/>  
              &nbsp;Rare
            </Box>
  },
  {
    value: 'Epic',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon sx={{ color: colorLibrary.lightPurple }}/> 
              &nbsp;Epic
            </Box>
  },
  {
    value: 'Legendary',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon sx={{ color: colorLibrary.amber }}/> 
              &nbsp;Legendary
            </Box>
  },
  {
    value: 'Unique',
    label:  <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CropSquareIcon/> 
              &nbsp;Unique
            </Box>
  }
];

const bonusStatTypes = [
  {
    value: '',
    label: 'No Stat'
  },
  {
    value: 'Attack Damage',
    label: 'Attack Damage'
  },
  {
    value: 'Armor Rating',
    label: 'Armor Rating'
  },
  {
    value: 'All Attributes',
    label: 'All Attributes'
  },
  {
    value: 'Movement Speed',
    label: 'Movement Speed'
  },
  {
    value: 'Headshot Reduction',
    label: 'Headshot Reduction'
  },
  {
    value: 'Movement Speed',
    label: 'Movement Speed'
  },
  {
    value: 'Magic Resistance',
    label: 'Magic Resistance'
  },
  {
    value: 'Strength',
    label: 'Strength'
  },
  {
    value: 'Agility',
    label: 'Agility'
  },
  {
    value: 'Resourcefulness',
    label: 'Resourcefulness'
  },
  {
    value: 'Will',
    label: 'Will'
  },
  {
    value: 'Knowledge',
    label: 'Knowledge'
  }
];

const baseStatTypes = [
  {
    value: '',
    label: 'No Stat'
  },
  {
    value: 'Attack Damage',
    label: 'Attack Damage'
  },
  {
    value: 'Armor Rating',
    label: 'Armor Rating'
  },
  {
    value: 'All Attributes',
    label: 'All Attributes'
  },
  {
    value: 'Movement Speed',
    label: 'Movement Speed'
  },
  {
    value: 'Headshot Reduction',
    label: 'Headshot Reduction'
  },
  {
    value: 'Projectile Reduction',
    label: 'Projectile Reduction'
  },
  {
    value: 'Weapon Damage',
    label: 'Weapon Damage'
  },
  {
    value: 'Magic Resistance',
    label: 'Magic Resistance'
  },
  {
    value: 'Strength',
    label: 'Strength'
  },
  {
    value: 'Agility',
    label: 'Agility'
  },
  {
    value: 'Resourcefulness',
    label: 'Resourcefulness'
  },
  {
    value: 'Will',
    label: 'Will'
  },
  {
    value: 'Knowledge',
    label: 'Knowledge'
  }
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
    value: 'Castillon Dagger',
    label: 'Castillon Dagger'
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
    value: 'Ox Pendant',
    label: 'Ox Pendant'
  },
  {
    value: 'Rat Pendant',
    label: 'Rat Pendant'
  },
  {
    value: 'Fox Pendant',
    label: 'Fox Pendant'
  },
  {
    value: 'Badger Pendant',
    label: 'Badger Pendant'
  },
  {
    value: 'Necklace of Peace',
    label: 'Necklace of Peace'
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

const helmets = [
  {
    value: 'Armet',
    label: 'Armet'
  },
  {
    value: 'Barbuta Helmet',
    label: 'Barbuta Helmet'
  },
  {
    value: 'Gjermundbu',
    label: 'Gjermundbu'
  },
  {
    value: 'Viking Helmet',
    label: 'Viking Helmet'
  },
  {
    value: 'Visored Barbuta Helmet',
    label: 'Visored Barbuta Helmet'
  },
  {
    value: 'Kettle Hat',
    label: 'Kettle Hat'
  },
  {
    value: 'Leather Cap',
    label: 'Leather Cap'
  },
  {
    value: 'Ranger Hood',
    label: 'Ranger Hood'
  },
  {
    value: 'Rogue Cowl',
    label: 'Rogue Cowl'
  },
  {
    value: 'Chapel De Fer',
    label: 'Chapel De Fer'
  },
  {
    value: 'Chaperon',
    label: 'Chaperon'
  },
  {
    value: 'Wizard Hat',
    label: 'Wizard Hat'
  },


]

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