import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, IconButton } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MenuIcon from '@mui/icons-material/Menu';
import defaultListingFilters from './defaultListingFilters';

import EquipmentCard from '../EquipmentCard/EquipmentCard';

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
      <IconButton onClick={handleExpandClick}>
        <MenuIcon />
      </IconButton>
      {expanded ?
        <Box sx={{ backgroundColor: '#777777', height: '200px', m: 1.5, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Box sx={{ width: '45%', backgroundColor: '#fff', height: '200px', my: 1.5}}>
            <div>yo</div>
          </Box>
          <Box sx={{ width: '45%', backgroundColor: '#fff', height: '150px', my: 1.5}}>
            <div>yo</div>
          </Box>
        </Box>
      : null}
    </>
  )
};

export default EquipmentCardListingTable;