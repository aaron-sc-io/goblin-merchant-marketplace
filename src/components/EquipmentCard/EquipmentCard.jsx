import { useState, useCallback } from 'react';

// MUI CORE
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// MUI COLORS
import { red, blue, purple, grey } from '@material-ui/core/colors';

const equipmentCardStyles = {
  width: '275px',
  height: '375px',
  border: 3
};

const equipmentCardHeaderColors = {
  red: red[500],
  lightGrey: grey[200],
  grey: grey[500],
  darkGrey: grey[800],
  lightPurple: purple[300],
  darkPurple: purple[900]
};

const EquipmentCard = ({ inputData, handleClick }) => {
  const [equipmentData, setEquipmentData] = useState(inputData);

  useCallback(() => {
    setEquipmentData(inputData);
  }, [setEquipmentData]);


  return (
    <div>
      <Button onClick={handleClick}>
        <Box
          align
          bgcolor={equipmentCardHeaderColors.darkGrey}
          borderColor={equipmentCardHeaderColors.darkGrey}
          border={equipmentCardStyles.border}
          width={equipmentCardStyles.width}
          height={equipmentCardStyles.height}
        >
          <Box
            border={1}
            borderColor={equipmentCardHeaderColors.grey}
            borderBottom={1}
            height='99%'
          >
            <Box
              bgcolor={equipmentCardHeaderColors.darkPurple}
              color={equipmentCardHeaderColors.lightPurple}
              borderBottom={1}
              borderColor={equipmentCardHeaderColors.lightPurple}
              height='8%'
              width='100%'
            >
              <Box>
                <Typography>
                  <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '20px' }}>
                    {equipmentData}
                  </Box>
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Button>
    </div>
  );
};

/**
  * MUI COLOR LIBRARY
  * 
  * 
  * 
**/


export default EquipmentCard;
