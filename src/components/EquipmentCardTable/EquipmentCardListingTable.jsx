import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { weaponValues1, weaponValues2, weaponValues3 } from './listingExamples';

const EquipmentCardListingTable = () => {
  const formik1 = useFormik({
    initialValues: weaponValues1
  });
  const formik2 = useFormik({
    initialValues: weaponValues2
  });
  const formik3 = useFormik({
    initialValues: weaponValues3
  });
  // const handleUpdate = async() => {try() catch(e) loge};
  return (
    <>
      <Grid container>
        {/* Populate with */}
        <Grid item xs={3}>
          <EquipmentCard
              formik={formik1}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard
              formik={formik2}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard
              formik={formik3}
            />
        </Grid>
        <Grid item xs={3}>
          <EquipmentCard
              formik={formik2}
            />
        </Grid>
      </Grid>
    </>
  );
};

export default EquipmentCardListingTable;