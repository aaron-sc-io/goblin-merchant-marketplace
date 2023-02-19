// MUI CORE
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// MUI COLORS
import { red, blue, purple, grey } from '@material-ui/core/colors';

const equipmentCardStyles = {
  width: '275px',
  height: '375px',
  border: 3
};

const equipmentCardHeaderColors = {
  blu: blue[500],
  red: red[500],
  lightGrey: grey[200],
  textGrey: grey[400],
  grey: grey[500],
  darkGrey: grey[800],
  lightPurple: purple[300],
  darkPurple: purple[900]
};

const EquipmentCard = ({ formik, handleClick }) => {
  const weaponInfo = formik.values;
  console.log(weaponInfo);

  return (
    <>
      <Button onClick={handleClick}>
        {/* Container */}
        <Box
          align='center'
          bgcolor={equipmentCardHeaderColors.darkGrey}
          borderColor={equipmentCardHeaderColors.darkGrey}
          border={equipmentCardStyles.border}
          width={equipmentCardStyles.width}
          height={equipmentCardStyles.height}
        >
          {/* Styling Box */}
          <Box
            border={1}
            borderColor={equipmentCardHeaderColors.grey}
            borderBottom={1}
            height='99%'
          > 
            <Box>
              <EquipmentHeader formik={weaponInfo} />
              <EquipmentStats formik={weaponInfo} />
              <Divider variant="middle" />
              <EquipmentStats formik={weaponInfo} />
              <Divider variant="middle" />
            </Box>
          </Box>
        </Box>
      </Button>
    </>
  );
};

const EquipmentStats = ({ formik }) => {
  const weaponBaseStats = formik.weaponBaseStats;
  const weaponBonusStats = formik.weaponBonusStats;

  return (
    <Box
      color={equipmentCardHeaderColors.textGrey}
    > 
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px' }}>
          Weapon Damage {weaponBaseStats.weaponDmg}
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px' }}>
          Move Speed {weaponBaseStats.weaponMoveSpd}
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.blu }}>
          +{weaponBonusStats.bonusPhysDmg} Additional Physical Damage
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.blu }}>
          +{weaponBonusStats.bonusMgcDmg} Additional Magical Damage
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.blu }}>
          +{weaponBonusStats.bonusMoveSpd} Additional Move Speed
        </Box>
      </Typography>


    </Box>  
  )
};

const EquipmentHeader = ({ formik }) => {
  const weaponInfo = formik;
  return (
    <Box
      bgcolor={equipmentCardHeaderColors.darkPurple}
      color={equipmentCardHeaderColors.lightPurple}
      borderBottom={1}
      borderColor={equipmentCardHeaderColors.lightPurple}
      width='100%'
      pt={1}
    >
      <Box>
        <Typography component={'span'}>
          <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '23px' }}>
            {weaponInfo.weaponName}
          </Box>
        </Typography>
      </Box>
    </Box>
  )
};

export default EquipmentCard;
