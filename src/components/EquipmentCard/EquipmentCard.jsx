// HOOKS
import { useState, useEffect } from 'react';
// UTILITIES
import ReactCardFlip from 'react-card-flip';

// MUI CORE
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// MUI COLORS
import { red, blue, purple, grey } from '@material-ui/core/colors';

////////////////////////////////////////////////////////////////////////////

const colorLibrary = {
  blu: blue[500],
  darkBlu: blue[900],
  neonBlu: '#00e5ff',
  red: red[500],
  lightPurple: purple[300],
  darkPurple: purple[900],
  white: grey[50],
  lightGrey: grey[200],
  textGrey: grey[400],
  grey: grey[500],
  grey2: grey[600],
  darkGrey: grey[800],
  neonGreen: '#76ff03',
  green: '#2e7d32',
  amber: '#ffc107',
  amberBrown: '#994d00'
};

const equipmentCardStyles = {
  width: '275px',
  height: '425px',
  border: 3
};

const headerColorStyles = {
  common: {
    backGroundColor: colorLibrary.grey2,
    borderAndTextColor: colorLibrary.white
  },
  uncommon: {
    backGroundColor: colorLibrary.green,
    borderAndTextColor: colorLibrary.neonGreen
  },
  rare: {
    backGroundColor: colorLibrary.darkBlu,
    borderAndTextColor: colorLibrary.neonBlu
  },
  epic: {
    backGroundColor: colorLibrary.darkPurple,
    borderAndTextColor: colorLibrary.lightPurple
  },
  legendary: {
    backGroundColor: colorLibrary.amberBrown,
    borderAndTextColor: colorLibrary.amber
  },
  default: {
    backGroundColor: colorLibrary.darkPurple,
    borderAndTextColor: colorLibrary.lightPurple
  },
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
        headerColorStyles={headerColorStyles}
        handleClick={handleClick}
      />
      <EquipmentCardBack
        formik={formik}
        handleClick={handleClick}
      />
    </ReactCardFlip>
  );
};

const EquipmentCardFront = ({ formik, headerColorStyles, handleClick }) => {
  const weaponInfo = formik.values;
  console.log(weaponInfo);
  return (
    <Button onClick={handleClick}>
      {/* Container */}
      <Box
        align='center'
        bgcolor={colorLibrary.darkGrey}
        borderColor={colorLibrary.darkGrey}
        border={equipmentCardStyles.border}
        width={equipmentCardStyles.width}
        height={equipmentCardStyles.height}
      >
        {/* Styling Box */}
        <Box
          border={1}
          borderColor={colorLibrary.grey}
          borderBottom={1}
          height='99%'
        > 
          <Box>
            <EquipmentHeader formik={weaponInfo} headerColorStyles={headerColorStyles} />
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
  );
};

const EquipmentCardBack = ({ formik, handleClick }) => {
  const weaponInfo = formik.values;
  return (
    <Button onClick={handleClick}>
      {/* Container */}
      <Box
        align='center'
        bgcolor={colorLibrary.darkGrey}
        borderColor={colorLibrary.darkGrey}
        border={equipmentCardStyles.border}
        width={equipmentCardStyles.width}
        height={equipmentCardStyles.height}
      >
        {/* Styling Box */}
        <Box
          border={1}
          borderColor={colorLibrary.grey}
          borderBottom={1}
          height='99%'
        > 
          <Box>
            <ContactHeader formik={weaponInfo} />
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

const ContactHeader = ({ formik }) => {
  const weaponInfo = formik;
  return (
    <Box
      bgcolor={colorLibrary.darkPurple}
      color={colorLibrary.lightPurple}
      borderBottom={1}
      borderColor={colorLibrary.lightPurple}
      width='100%'
      pt={1}
    >
      <Box>
        <Typography component={'span'}>
          <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '23px', pb: 0.7 }}>
            {'Discord: {}'}
          </Box>
        </Typography>
      </Box>
    </Box>
  )
};


const EquipmentHeader = ({ formik }) => {
  const weaponInfo = formik;
  const [headerColors, setHeaderColors] = useState(headerColorStyles.common);
  const handleEquipmentCardHeaderStyle = (rarity) => {
    switch (rarity) {
      case 'Common':
        setHeaderColors(headerColorStyles.common);
        break;
      case 'Uncommon':
        setHeaderColors(headerColorStyles.uncommon);
        break;
      case 'Rare':
        setHeaderColors(headerColorStyles.rare);
        break;
      case 'Epic':
        setHeaderColors(headerColorStyles.epic);
        break;
      case 'Legendary':
        setHeaderColors(headerColorStyles.legendary);
        break;
      default:
        setHeaderColors(headerColorStyles.common);
        break;
    };
  };
  useEffect(() => {
    handleEquipmentCardHeaderStyle(weaponInfo.rarity);
  }, [handleEquipmentCardHeaderStyle, weaponInfo]);
  return (
    <Box
      bgcolor={headerColors.backGroundColor}
      color={headerColors.borderAndTextColor}
      borderColor={headerColors.borderAndTextColor}
      borderBottom={1}
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
      color={colorLibrary.textGrey}
    > 
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px' }}>
          Weapon Damage {weaponBaseStats.weaponDmg}
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px' }}>
          Move Speed {weaponBaseStats.weaponMoveSpd}
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.blu }}>
          +{weaponBonusStats.bonusPhysDmg} Additional Physical Damage
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.blu }}>
          +{weaponBonusStats.bonusMgcDmg} Additional Magical Damage
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.blu }}>
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
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.red }}>
          Required Class:
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.red }}>
          {weaponInfo.weaponType}
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.textGrey }}>
          Slot Type: {weaponInfo.weaponSlotType}
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.textGrey }}>
          Hand Type: {weaponInfo.weaponHandType}
        </Box>
      </Typography>
      <Typography component={'span'}>
        <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '17px', color: colorLibrary.textGrey }}>
          Weapon Type: {weaponInfo.weaponType}
        </Box>
      </Typography>
    </Box>
  );
};



export default EquipmentCard;
