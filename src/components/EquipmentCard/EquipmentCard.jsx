import { useState, useEffect } from 'react';
import { Button, Box, Typography, Divider } from '@mui/material';
import { colorLibrary } from '../../utility/colors';
import coinsMini from './coinsMini.png';

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
  unique: {
    backGroundColor: colorLibrary.darkYellow,
    borderAndTextColor: colorLibrary.lightYellow
  },
  default: {
    backGroundColor: colorLibrary.darkPurple,
    borderAndTextColor: colorLibrary.lightPurple
  },
};


// TODO LOADING animation when form and table are loading
const EquipmentCard = ({ data, isDisabled, handleClick }) => {
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
      case 'Unique':
        setHeaderColors(headerColorStyles.unique);
        break;
      default:
        setHeaderColors(headerColorStyles.common);
        break;
    };
  };

  useEffect(() => {
    handleEquipmentCardHeaderStyle(data.rarity);
  }, [data.rarity]);

  return (
    <EquipmentCardFront
      data={data}
      handleClick={handleClick}
      headerColors={headerColors}
      isDisabled={isDisabled}
    />
  );
};

const EquipmentCardFront = ({ data, headerColors, handleClick, isDisabled }) => {
  const equipmentCardStyles = {
    width: '300px',
    minHeight: '100px',
    border: 4
  };
  
  const itemImgString = data.name.replace(/ /g,"_") + '_' + data.rarity;
  const itemImgPath = `/itemImages/${itemImgString}.png`;
  // console.log(itemImgPath);

  return (
    <Button onClick={handleClick} disabled={isDisabled}>
      {/* Container */}
      <Box
        align='center'
        sx={{
          borderColor: colorLibrary.darkGrey,
          bgcolor: colorLibrary.darkestGrey,
          width: equipmentCardStyles.width,
          minHeight: equipmentCardStyles.minHeight,
          maxHeight: (equipmentCardStyles.maxHeight+1),
          boxShadow: 10
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
            <EquipmentHeader data={data} headerColors={headerColors} />
            <Box sx={{ display: 'flex', alignSelf: 'center', flexDirection: 'column', alignItems: 'center', py: 0.5, mr: -0.5 }} >
              <img src={itemImgPath}/>
            </Box>
            <EquipmentStats data={data} />
            <Divider variant="middle"  />
            <Divider variant="middle"  />
            <Box>
              <EquipmentDescription data={data} />
            </Box>
            <Divider variant="middle" />
            <Divider variant="middle" />
            <Box>
              <ListingDescription data={data} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

const EquipmentHeader = ({ data, headerColors }) => {
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
            {data.name}
          </Box>
        </Typography>
      </Box>
    </Box>
  )
};

const EquipmentStats = ({ data }) => {
  const [rarityInteger, setRarityInteger] = useState(0);
  
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
    handleSetRarity(data.rarity);
  }, [data.rarity]);
  return (
    <Box sx={{ py: 0.7 }} color={colorLibrary.textGrey}> 
      {/* BASE STATS */}
      <BaseStatTextLine 
        baseStatType={data.baseStats.statNames.statName1}
        baseStatValue={data.baseStats.statValues.statValue1}
      />
      <BaseStatTextLine 
        baseStatType={data.baseStats.statNames.statName2}
        baseStatValue={data.baseStats.statValues.statValue2}
      />
      <BaseStatTextLine 
        baseStatType={data.baseStats.statNames.statName3}
        baseStatValue={data.baseStats.statValues.statValue3}
      />
      <BaseStatTextLine 
        baseStatType={data.baseStats.statNames.statName4}
        baseStatValue={data.baseStats.statValues.statValue4}
      />
      <BaseStatTextLine 
        baseStatType={data.baseStats.statNames.statName5}
        baseStatValue={data.baseStats.statValues.statValue5}
      />
      {/* BONUS STATS */}
      <Box>
        {rarityInteger > 0 ? 
          <BonusStatTextLine 
            bonusStatType={data.bonusStats.statNames.statName1}
            bonusStatValue={data.bonusStats.statValues.statValue1}/>
        : null} 
        {rarityInteger > 1 ? 
          <BonusStatTextLine
            bonusStatType={data.bonusStats.statNames.statName2}
            bonusStatValue={data.bonusStats.statValues.statValue2}/> 
        : null}
        {rarityInteger > 2 ? 
          <BonusStatTextLine 
            bonusStatType={data.bonusStats.statNames.statName3}
            bonusStatValue={data.bonusStats.statValues.statValue3}/>
        : null} 
        {rarityInteger > 3 ? 
          <BonusStatTextLine
            bonusStatType={data.bonusStats.statNames.statName4}
            bonusStatValue={data.bonusStats.statValues.statValue4}/> 
        : null} 
        {rarityInteger > 4 ? 
          <BonusStatTextLine 
            bonusStatType={data.bonusStats.statNames.statName5}
            bonusStatValue={data.bonusStats.statValues.statValue5}/>
        : null}
      </Box>  
    </Box>  
  );
};

const EquipmentDescription = ({ data }) => {
  return (
    <Box sx={{ py: 0.7 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component={'span'} sx={{ color: colorLibrary.textGrey, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          Required Class:&nbsp;
        </Typography>
        <Typography component={'span'} sx={{ color: colorLibrary.textBrown, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data.requiredClass.join(', ')}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component={'span'} sx={{ color: colorLibrary.textGrey, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
        {data.slotType !== '' ? 'Slot Type: ' : ''}
        </Typography>
        <Typography component={'span'} sx={{ color: colorLibrary.textBrown, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data.slotType}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component={'span'} sx={{ color: colorLibrary.textGrey, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data.handType !== '' ? 'Hand Type: ' : ''}
        </Typography>
        <Typography component={'span'} sx={{ color: colorLibrary.textBrown, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data.handType}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component={'span'} sx={{ color: colorLibrary.textGrey, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          Weapon Type:&nbsp;
        </Typography>
        <Typography component={'span'} sx={{ color: colorLibrary.textBrown, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data.category}
        </Typography>
      </Box>
    </Box>
  );
};

const BonusStatTextLine = ({ bonusStatValue, bonusStatType }) => {
  return (
    <Box>
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
    </Box>
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
            {baseStatType}: {baseStatValue}
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

const ListingDescription = ({ data }) => {
  return (
    <Box sx={{ py: 1.2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' , width: '30%', pl: 2 }}>
        <img src={coinsMini} width='40%' height='40%' />
        <Typography component={'span'} sx={{ color: colorLibrary.white, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          {data?.listingPrice ? data.listingPrice : 0}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'left', width: '80%' }}>
        <Typography component={'span'} sx={{ color: colorLibrary.textGrey, fontFamily: 'Helvetica Neue', textTransform: 'capitalize', fontSize: '16px' }}>
          Discord:&nbsp;
        </Typography>
        <Typography component={'span'} sx={{ color: colorLibrary.white, fontFamily: 'Helvetica Neue', fontSize: '16px', textTransform: 'capitalize' }}>
          {data.contactInfo}
        </Typography>
      </Box>
    </Box>
  );
};


export default EquipmentCard;
