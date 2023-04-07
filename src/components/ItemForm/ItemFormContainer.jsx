import ItemForm from './ItemForm'
import { useFormik } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

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
  const listingsRef = collection(db, 'listings');
  const handleSubmitListing = async () => {
    await addDoc(listingsRef, formik.values);
    console.log('submitted');
  };
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '1000px' }}>
        <ItemForm formik={formik}/>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>//// -------- ITEM PREVIEW  --------  ////</Typography>
          <EquipmentCard data={formik.values} isDisabled={true} />
          <Button onClick={handleSubmitListing}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default ItemFormContainer