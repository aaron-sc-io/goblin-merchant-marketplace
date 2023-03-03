import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Grid } from '@material-ui/core';


const EquipmentCardTable = ({ formik }) => {
  const handleClick = async() => alert('will be redirected to {weaponPage}');
  // const handleUpdate = async() => {try() catch(e) loge};
  return (
    <>
      <Grid>
        <EquipmentCard 
            handleClick={handleClick}
            formik={formik}
          />
      </Grid>
    </>
  );
};

export default EquipmentCardTable;