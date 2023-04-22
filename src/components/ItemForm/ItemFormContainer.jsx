import ItemForm from './ItemForm'
import { useFormik } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ItemFormContainer = () => {
  const formik = useFormik({
    initialValues: {
      category: 'Sword',
      name: 'Arming Sword',
      rarity: 'Common',
      slotType: 'Secondary Weapon',
      handType: 'One-Handed',
      description: '',
      requiredClass: ['Fighter'],
      baseStats: {
        statNames: {
          statName1: 'Weapon Damage',
          statName2: 'Movement Speed',
          statName3: '',
          statName4: '',
          statName5: ''
        },
        statValues: {
          statValue1: 25,
          statValue2: -10,
          statValue3: 0,
          statValue4: 0,
          statValue5: 0
        }
      },
      bonusStats: {
        statNames: {
          statName1: '',
          statName2: '',
          statName3: '',
          statName4: '',
          statName5: ''
        },
        statValues: {
          statValue1: 0,
          statValue2: 0,
          statValue3: 0,
          statValue4: 0,
          statValue5: 0
        }
      },
    listingPrice: '',
    finalSellingPrice: '',
    listingId: '',
    contactInfo: ''
  }});
  const navigate = useNavigate();
  const listingsRef = collection(db, 'listings');
  const handleSubmitListing = async () => {
    try {
      const listing = await addDoc(listingsRef, formik.values);
      const listingId = listing._key.path.segments[1];
      console.log(listingId);
      navigate(`/listing/${listingId}`);
    } catch (e) {
      console.log(e);
    }

    console.log('submitted');
    //try catch navigate to listing
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: '1000px', alignItems: 'center', py: 2, mx: 5, margin: 'auto' }}>
      <ItemForm formik={formik}/>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography> ITEM PREVIEW </Typography>
        <EquipmentCard data={formik.values} isDisabled={true} />
        <Button onClick={handleSubmitListing} variant='contained'>
          Submit Listing
        </Button>
      </Box>
    </Box>
  )
}

export default ItemFormContainer