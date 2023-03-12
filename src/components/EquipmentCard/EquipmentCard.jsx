// HOOKS
import { useState, useEffect } from 'react';
// UTILITIES
import ReactCardFlip from 'react-card-flip';

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
  const armingsworddesc = {
    weaponname: 'Arming Sword',
    speedpenalty: '-20',
    requiredClass: 'Fighter, Ranger',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Sword',
    weaponBlurb: 'A thin blade with leather bindings, supporting a firm grip for hasty attacks that feel light to the hand.'
  };
  const falchiondesc = {
    weaponname: 'Falchion',
    speedpenalty: '-25',
    requiredClass: 'Fighter',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Sword',
    weaponBlurb: 'A curved iron blade and broad hilt, the curvature of the blade is foreign and enigmatic.'
  };
  const longsworddesc = {
    weaponname: 'Longsword',
    speedpenalty: '-40',
    requiredClass: 'Fighter',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Sword',
    weaponBlurb: 'A very long blade crafted from durable metal with a staunch hilt, heavy yet still feels nimble in your grasp.'
  };
  const rapierdesc = {
    weaponname: 'Rapier',
    speedpenalty: '-17',
    requiredClass: 'Ranger, Rogue',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Sword',
    weaponBlurb: 'A slender but sharp blade crafted with a protective hand guard. Effective at both cutting and thrusting.'
  };
  const shortsworddesc = {
    weaponname: 'Short Sword',
    speedpenalty: '-10',
    requiredClass: 'Ranger, Rogue',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Sword',
    weaponBlurb: "A short and broad blade melded to a fine point with a round pommel at it's base."   //single quote inside double quote to avoid error
  };
  const zweihanderdesc = {
    weaponname: 'Zweihander',
    speedpenalty: '-50',
    requiredClass: 'Barbarian, Fighter',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Sword',
    weaponBlurb: 'The sheer weight and length of this mighty double-edge blade can be felt pulling on you as you swing.'
  };
  const flangedmacedesc = {
    weaponname: 'Flanged Mace',
    speedpenalty: '-25',
    requiredClass: 'Cleric, Fighter',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Mace',
    weaponBlurb: 'A slow and heavy mace designed with crown-shaped blunt edges, supporting even reckless swings.'
  };
  const morningstardesc = {
    weaponname: 'Morning Star',
    speedpenalty: '-25',
    requiredClass: 'Cleric',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Mace',
    weaponBlurb: 'Heavy to the hand, the sharpened spikes of this morningstar are perfect for bludgeoning attacks.'
  };
  const quarterstaffdesc = {
    weaponname: 'Quarterstaff',
    speedpenalty: '-10',
    requiredClass: 'Fighter, Cleric',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Mace',
    weaponBlurb: '--'
  };
  const castillondaggerdesc = {
    weaponname: 'Castillon Dagger',
    speedpenalty: '-10',
    requiredClass: 'Fighter, Rogue',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Dagger',
    weaponBlurb: '--'
  };
  const krisdaggerdesc = {
    weaponname: 'Kris Dagger',
    speedpenalty: '-10',
    requiredClass: 'Rogue',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Dagger',
    weaponBlurb: '--'
  };
  const rondeldaggerdesc = {
    weaponname: 'Rondel Dagger',
    speedpenalty: '-10',
    requiredClass: 'Rogue, Wizard',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Dagger',
    weaponBlurb: '--'
  };
  const stilettodaggerdesc = {
    weaponname: 'Stiletto Dagger',
    speedpenalty: '-10',
    requiredClass: 'Rogue',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Dagger',
    weaponBlurb: '--'
  };
  const bardichedesc = {
    weaponname: 'Bardiche',
    speedpenalty: '-50',
    requiredClass: 'Barbarian',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Polearm',
    weaponBlurb: '--'
  };
  const halberddesc = {
    weaponname: 'Halberd',
    speedpenalty: '-50',
    requiredClass: 'Fighter',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Polearm',
    weaponBlurb: '--'
  };
  const speardesc = {
    weaponname: 'Spear',
    speedpenalty: '-40',
    requiredClass: 'Fighter',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Polearm',
    weaponBlurb: '--'
  };
  const battleaxedesc = {
    weaponname: 'Battle Axe',
    speedpenalty: '-45',
    requiredClass: 'Barbarian, Fighter',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Axe',
    weaponBlurb: '--'
  };
  const doubleaxedesc = {
    weaponname: 'Double Axe',
    speedpenalty: '-45',
    requiredClass: 'Barbarian',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Axe',
    weaponBlurb: '--'
  };
  const fellingaxedesc = {
    weaponname: 'Felling Axe',
    speedpenalty: '-40',
    requiredClass: 'Barbarian',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Axe',
    weaponBlurb: '--'
  };
  const hatchetdesc = {
    weaponname: 'Hatchet',
    speedpenalty: '-25',
    requiredClass: 'Barbarian, Fighter',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Axe',
    weaponBlurb: '--'
  };
  const horsemansaxedesc = {
    weaponname: 'Horsemans Axe',
    speedpenalty: '-30',
    requiredClass: 'Barbarian, Fighter',
    slotType: 'Primary Weapon',
    handType: 'One-Handed',
    weapontype: 'Axe',
    weaponBlurb: '--'
  };
  const longbowdesc = {
    weaponname: 'Longbow',
    speedpenalty: '-50',
    requiredClass: 'Ranger',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Bow',
    weaponBlurb: '--'
  };
  const recurvebowdesc = {
    weaponname: 'Recurve Bow',
    speedpenalty: '-40',
    requiredClass: 'Ranger',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Bow',
    weaponBlurb: '--'
  };
  const survivalbowdesc = {
    weaponname: 'Survival Bow',
    speedpenalty: '-40',
    requiredClass: 'Ranger',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Bow',
    weaponBlurb: '--'
  };
  const crossbowdesc = {
    weaponname: 'Crossbow',
    speedpenalty: '-40',
    requiredClass: 'Fighter, Ranger, Wizard',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Crossbow',
    weaponBlurb: '--'
  };
  const windlasscrossbowdesc = {
    weaponname: 'Windlass Crossbow',
    speedpenalty: '-40',
    requiredClass: 'Ranger',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Crossbow',
    weaponBlurb: '--'
  };
  const crystalballdesc = {
    weaponname: 'Crystal Ball',
    speedpenalty: '-25',
    requiredClass: 'Wizard',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Magical Weapon',
    weaponBlurb: '--'
  };
  const crystalsworddesc = {
    weaponname: 'Crystal Sword',
    speedpenalty: '-30',
    requiredClass: 'Wizard',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Magical Weapon',
    weaponBlurb: '--'
  };
  const spellbookdesc = {
    weaponname: 'Spellbook',
    speedpenalty: '-10',
    requiredClass: 'Cleric, Wizard',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Magical Weapon',
    weaponBlurb: '--'
  };
  const wizardstaffdesc = {
    weaponname: 'Wizard Staff',
    speedpenalty: '-20',
    requiredClass: 'Cleric, Wizard',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Magical Weapon',
    weaponBlurb: '--'
  };
  const bucklerdesc = {
    weaponname: 'Buckler',
    speedpenalty: '-7',
    requiredClass: 'Cleric, Fighter',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Shield',
    weaponBlurb: '--'
  };
  const heatershielddesc = {
    weaponname: 'Heater Shield',
    speedpenalty: '-15',
    requiredClass: 'Cleric, Fighter',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Shield',
    weaponBlurb: '--'
  };
  const pavisedesc = {
    weaponname: 'Pavise',
    speedpenalty: '-65',
    requiredClass: 'Fighter, Ranger',
    slotType: 'Primary Weapon',
    handType: 'Two-Handed',
    weapontype: 'Shield',
    weaponBlurb: '--'
  };
  const roundshielddesc = {
    weaponname: 'Round Shield',
    speedpenalty: '-12',
    requiredClass: 'Cleric, Fighter',
    slotType: 'Secondary Weapon',
    handType: 'One-Handed',
    weapontype: 'Shield',
    weaponBlurb: '--'
  };
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
