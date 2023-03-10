import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { weaponValues1, weaponValues2, weaponValues3 } from './listingExamples';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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
    <Box width={'1200px'}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{600: 3, 900: 4}}
      >
        <Masonry columnsCount={4}>
          <EquipmentCard
              formik={formik1}
            />
          <EquipmentCard
              formik={formik2}
            />
          <EquipmentCard
              formik={formik3}
            />
          <EquipmentCard
              formik={formik1}
            />
          <EquipmentCard
              formik={formik3}
            />
          <EquipmentCard
              formik={formik1}
            />
          <EquipmentCard
              formik={formik2}
            />
          <EquipmentCard
              formik={formik2}
            />
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default EquipmentCardListingTable;