// HOOKS
import { useState, useEffect } from 'react';
// UTILITIES
// import ReactCardFlip from 'react-card-flip';

// MUI CORE
import { Button, Box, Typography, Divider } from '@mui/material';
// MUI COLORS
import { red, blue, purple, grey } from '@mui/material/colors';

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
  width: '300px',
  minHeight: '100px',
  border: 4
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
  const [headerColors, setHeaderColors] = useState(headerColorStyles.common);
  const handleClick = () => setIsFlipped(!isFlipped);
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
    handleEquipmentCardHeaderStyle(formik.values.rarity);
  }, [handleEquipmentCardHeaderStyle, formik.values.rarity]);
  
  return (
      <EquipmentCardFront
          formik={formik}
          headerColorStyles={headerColorStyles}
          handleClick={handleClick}
          headerColors={headerColors}
      />
      // <EquipmentCardBack
      //   formik={formik}
      //   handleClick={handleClick}
      //   headerColors={headerColors}
      // />
  );
};

const EquipmentCardFront = ({ formik, headerColors, handleClick }) => {
  const weaponInfo = formik.values;
  console.log(weaponInfo);
  return (
    <Button onClick={handleClick}>
      {/* Container */}
      <Box
        align='center'
        sx={{
          borderColor: colorLibrary.darkGrey,
          bgcolor: colorLibrary.darkGrey,
          width: equipmentCardStyles.width,
          minHeight: equipmentCardStyles.minHeight,
          maxHeight: (equipmentCardStyles.maxHeight+1)
        }}
        border={equipmentCardStyles.border}
      >
        {/* Styling Box for secondary border*/}
        <Box
          border={2}
          borderColor={headerColors.borderAndTextColor}
          minHeight={equipmentCardStyles.minHeight}
          maxHeight={equipmentCardStyles.maxHeight}
        > 
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <EquipmentHeader formik={weaponInfo} headerColors={headerColors} />
            <EquipmentStats formik={weaponInfo} />
            <Divider variant='middle' />
            <Divider variant='middle' /> 
            <Box sx={{ height: '20%' }}>
              <EquipmentDescription formik={weaponInfo} />
            </Box>
            <Divider variant='middle' />
            <Divider variant='middle' />
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

const EquipmentCardBack = ({ formik, headerColors, handleClick }) => {
  const weaponInfo = formik.values;
  return (
    <Button onClick={handleClick}>
      {/* Container */}
      <Box
        align='center'
        sx={{
          borderColor: colorLibrary.darkGrey,
          bgcolor: colorLibrary.darkGrey,
          width: equipmentCardStyles.width,
          minHeight: equipmentCardStyles.minHeight,
          maxHeight: (equipmentCardStyles.maxHeight+1)
        }}
        border={equipmentCardStyles.border}
      >
        {/* Styling Box for secondary border*/}
        <Box
          border={2}
          borderColor={headerColors.borderAndTextColor}
          minHeight={equipmentCardStyles.minHeight}
          maxHeight={equipmentCardStyles.maxHeight}
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

const EquipmentHeader = ({ formik, headerColors }) => {
  const weaponInfo = formik;
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
  const equipmentStats = formik;
  const [rarityInteger, setRarityInteger] = useState(0);
  const weaponBaseStats = formik.weaponBaseStats;
  const weaponBonusStats = formik.weaponBonusStats;
  const handleSetRarity = (rarityString) => {
    switch (rarityString) {
      case 'Uncommon':
        setRarityInteger(1);
        break;
      case 'Rare':
        setRarityInteger(2);
        break;
      case 'Epic':
        setRarityInteger(3);
        break;
      case 'Legendary':
        setRarityInteger(4);
        break;
      case 'Unique':
        setRarityInteger(5);
        break;
      default:
        setRarityInteger(0);
    }
  };
  useEffect(() => {
    handleSetRarity(formik.rarity);
  }, [handleSetRarity]);
  return (
    <Box sx={{ py: 0.7 }} color={colorLibrary.textGrey}> 
      {/* BASE STATS */}
      <BaseStatTextLine 
        baseStatType={equipmentStats.baseStats.statNames.statName1}
        baseStatValue={equipmentStats.baseStats.statValues.statValue1}
      />
      <BaseStatTextLine 
        baseStatType={equipmentStats.baseStats.statNames.statName2}
        baseStatValue={equipmentStats.baseStats.statValues.statValue2}
      />
      <BaseStatTextLine 
        baseStatType={equipmentStats.baseStats.statNames.statName3}
        baseStatValue={equipmentStats.baseStats.statValues.statValue3}
      />
      <BaseStatTextLine 
        baseStatType={equipmentStats.baseStats.statNames.statName4}
        baseStatValue={equipmentStats.baseStats.statValues.statValue4}
      />
      {/* BONUS STATS */}
      <Box>
        {rarityInteger > 0 ? 
          <BonusStatTextLine 
            bonusStatType={equipmentStats.bonusStats.statNames.statName1}
            bonusStatValue={equipmentStats.bonusStats.statValues.statValue1}/>
        : null} 
        {rarityInteger > 1 ? 
          <BonusStatTextLine
            bonusStatType={equipmentStats.bonusStats.statNames.statName2}
            bonusStatValue={equipmentStats.bonusStats.statValues.statValue2}/> 
        : null}
        {rarityInteger > 2 ? 
          <BonusStatTextLine 
            bonusStatType={equipmentStats.bonusStats.statNames.statName3}
            bonusStatValue={equipmentStats.bonusStats.statValues.statValue3}/>
        : null} 
        {rarityInteger > 3 ? 
          <BonusStatTextLine
            bonusStatType={equipmentStats.bonusStats.statNames.statName4}
            bonusStatValue={equipmentStats.bonusStats.statValues.statValue4}/> 
        : null} 
        {rarityInteger > 4 ? 
          <BonusStatTextLine 
            bonusStatType={equipmentStats.bonusStats.statNames.statName5}
            bonusStatValue={equipmentStats.bonusStats.statValues.statValue5}/>
        : null}
      </Box>  
    </Box>  
  );
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

const BonusStatTextLine = ({ bonusStatValue, bonusStatType }) => {
  return (
    <>
      {(bonusStatValue || bonusStatType) ? 
        <Typography component={'span'}>
        <Box sx={{ display: 'flex', justifyContent: 'center', color: colorLibrary.blu }}>
          <Typography align='left' fontSize='12px'>
            &#9900;
          </Typography>  
          <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px', width: '85%', justifyContent: 'center' }}>
            + {bonusStatValue} {bonusStatType}
          </Box>
          <Typography align='right' fontSize='12px'>
            &#9900;
          </Typography>
        </Box>
      </Typography>
      : null}
    </>
  );
};

const BaseStatTextLine = ({ baseStatValue, baseStatType }) => {
  return (
    <>
      {(baseStatValue || baseStatType) ? 
        <Typography component={'span'}>
        <Box sx={{ display: 'flex', justifyContent: 'center', color: colorLibrary.textGrey }}>
          <Typography align='left' fontSize='12px'>
            &#9900;
          </Typography>  
          <Box sx={{ textAlign: 'center', fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px', width: '85%', justifyContent: 'center' }}>
            {baseStatType} {baseStatValue}
          </Box>
          <Typography align='right' fontSize='12px'>
            &#9900;
          </Typography>
        </Box>
      </Typography>
      : null}
    </>
  );
};


export default EquipmentCard;
