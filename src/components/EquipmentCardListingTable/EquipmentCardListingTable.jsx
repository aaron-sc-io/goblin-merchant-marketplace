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
      // ...defaultListingFilters TODO
      rarity: ['Uncommon', 'Common', 'Rare', 'Epic', 'Legendary', 'Unique']
    }
  });
  const applyFilter = (data, filters) => { 
    return data.filter(obj =>
      Object.entries(filters).every(([prop, find]) => find.includes(obj[prop]))
    )
  };

  useEffect(() => {
    listings && setListingData(applyFilter(listings, formik.values));
  }, [listings, formik.values]);

  return (
    <Box sx={{ width: '1550px' }}>
      <ListingTableFilter formik={formik} />
      <Box sx={{ backgroundColor: '#777777', p: '10px', m: 1.5 }}>
        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5}}>
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

export default EquipmentCardListingTable;