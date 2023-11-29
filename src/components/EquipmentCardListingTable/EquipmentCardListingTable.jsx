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
    <Box sx={{ width: '1500px' }}>
      <Box sx={{ backgroundColor: '#777777', height: '200px', m: 1 }}/> {/* banner temp for fitlers */}
      <Box sx={{ backgroundColor: '#777777', m: 1 }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{900: 3, 1200: 4, 1500: 5}}
        >
          <Masonry>
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