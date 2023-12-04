import { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { Box, IconButton, TextField } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import EquipmentCard from '../EquipmentCard/EquipmentCard';
import defaultListingFilters from './defaultListingFilters';

const EquipmentCardListingTable = ({ listings }) => {
  const [listingData, setListingData] = useState([]);
  const formik = useFormik({
    initialValues: {
      // ...defaultListingFilters
      rarity: ['Uncommon', 'Common', 'Rare', 'Unique']
    }
  });

  const filters = formik.values;
  
  const applyFilter = (data, filters) => { 
    return data.filter(obj =>
      Object.entries(filters).every(([prop, find]) => find.includes(obj[prop]))
    )
  };

  useEffect(() => {
    listings && setListingData(applyFilter(listings, filters));
  }, [listings, formik.values]);

  return (
    <Box sx={{ width: '1550px' }}>
      <ListingTableFilter filters={filters} />
      <Box sx={{ backgroundColor: '#777777', p: '10px', m: 1.5 }}>
        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5}}>
          <Masonry gutter='2px'>
            {listingData && listingData.map((listing) => (
              <EquipmentCard data={listing} key={listing.listingId} />
            ))}
            <>
            </>
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Box>
  );
};

const ListingTableFilter = ({ filters }) => {
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <IconButton onClick={handleExpandClick} sx={{ width: '65px', height: '50px', ml: 1, mt: 1 }}>
        {expanded
          ? <CloseIcon sx={{ width: '100%', height: 'auto' }}/>
          : <MenuIcon sx={{ width: '100%', height: 'auto' }}/>
        }
      </IconButton>
      {expanded ?
        <Box sx={{ backgroundColor: '#777777', height: '175px', m: 1.5, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Box sx={{ width: '50%', backgroundColor: '#fff', height: '165px', m: 1}}>
            {/* Rarity Checkbox Selector */}
            {/* Class Checkbox Selector */}
            <TextField>
            
            </TextField>
          </Box>
          <Box sx={{ width: '50%', backgroundColor: '#fff', height: '165px', m: 1}}>
            <div>yo</div>
          </Box>
        </Box>
      : null}
    </>
  )
};

export default EquipmentCardListingTable;