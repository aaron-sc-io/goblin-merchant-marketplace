import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';


const EquipmentCardListingTable = () => {
  const handleClick = async() => alert('will be redirected to {weaponPage}');
  const formik = useFormik({
    initialValues: {
      weaponType: 'Dagger',
      weaponName: 'Example Dagger',
      weaponBaseStats: {
        weaponDmg: 30,
        weaponMoveSpd: -10
      },
      weaponBonusStats: {
        bonusPhysDmg: 2,
        bonusMgcDmg: 2,
        bonusMoveSpd: 2
      },
      weaponSlotType: 'Secondary Weapon',
      weaponHandType: 'One-Handed'
    }
  });
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
      </Grid>
    </>
  );
};

export default EquipmentCardListingTable;