import { useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  equipmentCard: {
    width: '100%',
    maxWidth: 500,
  },
});

const EquipmentCard = ({ inputData }) => {
  const [equipmentData, setEquipmentData] = useState('');

  useCallback(() => {
    setEquipmentData(inputData);
  }, [setEquipmentData]);

  return (
    <>
      <Box>
        <Typography>
          {equipmentData}
        </Typography>
      </Box>
    </>
  );
};

export default EquipmentCard;
