// HOOKS
import { useState } from 'react';
// UTILITIES
import { defaultItem } from '../../utility/defaultItem';
import ReactCardFlip from 'react-card-flip';

// MUI CORE
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// MUI COLORS
import { red, blue, purple, grey } from '@material-ui/core/colors';

////////////////////////////////////////////////////////////////////////////

const equipmentCardStyles = {
  width: '275px',
  height: '425px',
  border: 3
};

const EquipmentCard = ({ formik }) => {
  const [isFlipped, setIsFlipped]= useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={0.8}
      flipSpeedFrontToBack={0.8}
    >
      <EquipmentCardFront 
        formik={formik}
        handleClick={handleClick}
      />
      <EquipmentCardBack
        formik={formik}
        handleClick={handleClick}
      />
    </ReactCardFlip>
  );
};

const EquipmentCardFront = ({ formik, handleClick }) => {
  const weaponInfo = formik.values;
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
              <Divider variant="middle" />
              <EquipmentDescription formik={weaponInfo} />
              <Divider variant="middle" />
              <Divider variant="middle" />
            </Box>
          </Box>
        </Box>
      </Button>
    </>
  );
};

const EquipmentCardBack = ({ formik, handleClick }) => {
  const weaponInfo = formik.values;
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
              
            </Box>
          </Box>
        </Box>
      </Button>
    </>
  );
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
          <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '23px', pb: 0.7 }}>
            {weaponInfo.weaponName}
          </Box>
        </Typography>
      </Box>
    </Box>
  )
};

const EquipmentStats = ({ formik }) => {
  const weaponBaseStats = formik.weaponBaseStats;
  const weaponBonusStats = formik.weaponBonusStats;
  return (
    <Box
      sx={{ py: 0.7 }}
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

const EquipmentDescription = ({ formik }) => {
  const [weaponInfo, setWeaponInfo] = useState(formik);
  // const daggerDesc = {
  //   requiredClass: 'Rogue, Fighter',
  //   slotType: 'Secondary Weapon',
  //   handType: 'One-Handed',
  //   weaponBlurb: 'Crafted with a fine blade narrowing to a sharp point. The hilts riveted design ensuring a firm grip.'
  // };

  // let weaponDesc = {
  //   requiredClass: '',
  //   slotType: '',
  //   handType: '',
  //   weaponBlurb: ''
  // };

  const handleSetDescription = (weaponInfo) => {
    
  };

  return (
    <Box sx={{ py: 0.7 }}>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.red }}>
          Required Class:
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.red }}>
          {weaponInfo.weaponType}
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.textGrey }}>
          Slot Type: {weaponInfo.weaponSlotType}
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.textGrey }}>
          Hand Type: {weaponInfo.weaponHandType}
        </Box>
      </Typography>
      <Typography>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: equipmentCardHeaderColors.textGrey }}>
          Weapon Type: {weaponInfo.weaponType}
        </Box>
      </Typography>
    </Box>
  );
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

const ContactHeader = ({ formik }) => {

};


export default EquipmentCard;
