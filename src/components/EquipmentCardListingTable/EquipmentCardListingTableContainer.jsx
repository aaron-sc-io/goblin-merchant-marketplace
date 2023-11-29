import EquipmentCardListingTable from './EquipmentCardListingTable';
import { Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect, useState } from 'react';

const EquipmentCardListingTableContainer = () => {
  const [listings, setListings] = useState();
  const listingsRef = collection(db, 'listings');
  const getListings = async () => {
    await getDocs(listingsRef).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({...doc.data(), listingId: doc.id }));
      setListings(data);
    });
  };
  useEffect(() => {
    getListings();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <EquipmentCardListingTable listings={listings} />
    </Box>
  )
}

export default EquipmentCardListingTableContainer