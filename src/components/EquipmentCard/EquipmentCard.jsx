import { useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const equipmentCardStyles = {
    width: '100px',
    border: 1,
    m: 1
};

/**
  * MUI COLOR LIBRARY
  * 
  * 
  * 
**/

const EquipmentCard = ({ inputData }) => {
  const [equipmentData, setEquipmentData] = useState(inputData);

  useCallback(() => {
    setEquipmentData(inputData);
  }, [setEquipmentData]);

  return (
    <div>
      <Box 
        display='flex'
        justifyContent='center'
        bgcolor='text.secondary'
        px={0.5}
        py={0.5}
        border={3}
        borderColor='text.primary'
        width='275px'
        height='400px'
      >
        <Box
          bgcolor='primary.main'
          color='primary.contrastText'
          p={0.9}
          height='5%'
          width='100%'
        >
          <Box>
            <Typography align='center'>
              {equipmentData}
            </Typography>
          </Box>
          
        </Box>
      </Box>
      
    </div>
  );
};

export default EquipmentCard;
