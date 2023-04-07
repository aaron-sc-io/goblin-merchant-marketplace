import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useState, useEffect } from 'react';

const EquipmentCardListingTable = ({ listings }) => {
  const [listingData, setListingData] = useState([]);
  useEffect(() => {
    setListingData(listings);
  }, [listings]);
  return (
    <Box sx={{ width: '1200px' }}>
      <Box sx={{ backgroundColor: '#777777', height: '200px', m: 1 }}/> {/* banner temp for fitlers */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{600: 3, 900: 4}}
      >
        <Masonry columnsCount={4}>
          {listingData && listingData.map((listing) => (
            <EquipmentCard data={listing} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default EquipmentCardListingTable;