import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import EquipmentCard from '../EquipmentCard/EquipmentCard';

const EquipmentCardListingTable = ({ listings }) => {
  const [listingData, setListingData] = useState([]);
  useEffect(() => {
    setListingData(listings);
  }, [listings]);
  return (
    <Box sx={{ width: '1550px' }}>
      <Box sx={{ backgroundColor: '#777777', height: '200px', m: 1}}/> {/* banner temp for filters */}
      <Box sx={{ backgroundColor: '#777777', p: '10px', m: 1.5}}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5}}
        >
          <Masonry gutter='2px'>
            {listingData && listingData.map((listing) => (
              <EquipmentCard data={listing} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Box>
  );
};

export default EquipmentCardListingTable;