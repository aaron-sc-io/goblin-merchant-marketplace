import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';


const EquipmentCardListingTable = () => {
  const handleClick = async() => alert('will be redirected to {weaponPage}');
  const formik = useFormik({
    initialValues: {
      weaponType: 'Dagger',
      weaponName: 'Example Dagger',
      rarity: 'Rare',
      weaponSlotType: 'Secondary Weapon',
      weaponHandType: 'One-Handed',
      baseStats: {
        statNames: {
          statName1: 'Weapon Damage',
          statName2: 'Movement Speed',
          statName3: null,
          statName4: null
        },
        statValues: {
          statValue1: 20,
          statValue2: -10,
          statValue3: null,
          statValue4: null
        }
      },
      bonusStats: {
        statNames: {
          statName1: 'All Attributes',
          statName2: 'Movement Speed',
          statName3: null,
          statName4: null,
          statName5: null
        },
        statValues: {
          statValue1: 2,
          statValue2: 2,
          statValue3: null,
          statValue4: null,
          statValue5: null
        }
      },
    equipmentDescription: {
      weaponSlotType: 'Secondary Weapon',
      weaponHandType: 'One-Handed',
      weaponDesc: 'Info'
    }
  }});
  // const handleUpdate = async() => {try() catch(e) loge};
  return (
    <>
      <Grid container>
        {/* Populate with */}
        <Grid item xs={3}>
          <EquipmentCard 
              handleClick={handleClick}
              formik={formik}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard 
              handleClick={handleClick}
              formik={formik}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard 
              handleClick={handleClick}
              formik={formik}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard 
              handleClick={handleClick}
              formik={formik}
            />
        </Grid>
      </Grid>
    </>
  );
};

export default EquipmentCardListingTable;