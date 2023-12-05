import { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import Checkbox from '@mui/material/Checkbox';
import { Box, IconButton, Typography } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

import { colorLibrary } from '../../utility/colors';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import defaultListingFilters from './defaultListingFilters';

const EquipmentCardListingTable = ({ listings }) => {
  const [listingData, setListingData] = useState([]);
  const formik = useFormik({
    initialValues: {
      requiredClass: ['Wizard', 'Bard', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Warlock', 'Cleric'],
      rarity: ['Uncommon', 'Common', 'Rare', 'Epic', 'Legendary', 'Unique']
    }
  });

  console.log(formik.values);

  const applyFilter = (data, filters) => { 
    return data.filter(obj =>
      Object.entries(filters).every(([prop, find]) => {
        if (Array.isArray(obj[prop])) {
          return find.some(value => obj[prop].includes(value));  // Check if any element in the array matches the filter values
        } else {
          return find.includes(obj[prop]); // Check if the property matches any of the filter values
        }
      })
    );
  };

  useEffect(() => {
    listings && setListingData(applyFilter(listings, formik.values));
  }, [listings, formik.values]);

  return (
    <Box sx={{ width: '1550px' }}>
      <ListingTableFilter formik={formik} />
      <Box sx={{ backgroundColor: '#777777', p: '10px', m: 1.5 }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}>
          <Masonry gutter='2px'>
            {listingData
            ? listingData.map((listing) => (
              <EquipmentCard data={listing} key={listing.listingId} />
            ))
            : null }
            <>
            </>
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Box>
  );
};

const ListingTableFilter = ({ formik }) => {
  // Move Rarity Filter
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <IconButton onClick={handleExpandClick} sx={{ width: '65px', height: '50px', ml: 1, mt: 1 }}>
        <Tooltip title='Filters' placement="right">
          {expanded
            ? <CloseIcon sx={{ width: '100%', height: 'auto' }}/>
            : <MenuIcon sx={{ width: '100%', height: 'auto' }}/>
          }
        </Tooltip>
      </IconButton>
      {expanded ?
        <Box sx={{ backgroundColor: '#777777', height: '175px', m: 1.5, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Box sx={{ width: '50%', backgroundColor: '#fff', height: '165px', m: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ pl: 0.8 }}>
              <strong>Rarities:  </strong>
            </Typography>
            <RarityFilter formik={formik} />
            <RequiredClassFilter formik={formik} />
          </Box>
          <Box sx={{ width: '50%', backgroundColor: '#fff', height: '165px', m: 1}}>
            <div>yo</div>
          </Box>
        </Box>
      : null}
    </>
  );
};

const RarityFilter = ({ formik }) => {
  const rarityFilters = new Set(formik.values.rarity);
  const handleRarityUpdate = (checkboxIsChecked, rarity) => {
    checkboxIsChecked
    ? rarityFilters.delete(rarity)
    : rarityFilters.add(rarity);
    formik.setFieldValue('rarity', Array.from(rarityFilters));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <RarityCheckbox 
        rarity='Common'
        color={colorLibrary.grey}
        handleRarityUpdate={handleRarityUpdate} />
      <RarityCheckbox 
        rarity='Uncommon'
        color={colorLibrary.neonGreen}
        handleRarityUpdate={handleRarityUpdate} />
      <RarityCheckbox
        rarity='Rare'
        color={colorLibrary.neonBlu} 
        handleRarityUpdate={handleRarityUpdate} />
      <RarityCheckbox 
        rarity='Epic'
        color={colorLibrary.lightPurple}
        handleRarityUpdate={handleRarityUpdate} />
      <RarityCheckbox 
        rarity='Legendary' 
        color={colorLibrary.amber}
        handleRarityUpdate={handleRarityUpdate} />
      <RarityCheckbox 
        rarity='Unique'
        color={colorLibrary.amberBrown}
        handleRarityUpdate={handleRarityUpdate} />
    </Box>
  )
};

const RarityCheckbox = ({ rarity, handleRarityUpdate, color }) => {
  const [checked, setChecked] = useState(true)
  const handleCheckChange = () => {
    handleRarityUpdate(checked, rarity);
    setChecked(!checked);
  };
  return (
    <Tooltip title={rarity} followCursor>
      <Checkbox
        sx={{
          m: -0.8,
          color: color,
          '&.Mui-checked': {
            color: color,
          },
          '& .MuiSvgIcon-root': { fontSize: 28 },
        }}
        checked={checked}
        onChange={handleCheckChange}  
      />
    </Tooltip>
  )
};

const RequiredClassFilter = ({ formik }) => {
  const requiredClassFilters = new Set(formik.values.requiredClass);
  const handleClassUpdate = (checkboxIsChecked, requiredClass) => {
    checkboxIsChecked
    ? requiredClassFilters.delete(requiredClass)
    : requiredClassFilters.add(requiredClass);
    formik.setFieldValue('requiredClass', Array.from(requiredClassFilters));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <RequiredClassCheckbox 
        requiredClass='Fighter'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Bard'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Wizard'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Rogue'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Warlock'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Ranger'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        requiredClass='Cleric'
        handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox 
        requiredClass='Barbarian'
        handleClassUpdate={handleClassUpdate} />
    </Box>
  );
};

const RequiredClassCheckbox = ({ requiredClass, handleClassUpdate }) => {
  const [checked, setChecked] = useState(true)
  const handleCheckChange = () => {
    handleClassUpdate(checked, requiredClass);
    setChecked(!checked);
  };
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          sx={{
            m: -0.8,
            '& .MuiSvgIcon-root': { fontSize: 26 },
          }}
          checked={checked}
          onChange={handleCheckChange}  
        />
        <Typography>{requiredClass}</Typography>
      </Box>
      
  )
};

export default EquipmentCardListingTable;