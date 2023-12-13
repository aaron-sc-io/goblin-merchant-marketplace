import { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import Checkbox from '@mui/material/Checkbox';
import { Box, IconButton, Typography } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

import { colorLibrary } from '../../utility/colors';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import defaultListingFilters from './defaultListingFilters';
import DropdownMenu from './DropdownMenus/DropdownMenu';

const EquipmentCardListingTable = ({ listings }) => {
  const [listingData, setListingData] = useState([]);
  const formik = useFormik({
    initialValues: {
      requiredClass: ['Wizard', 'Bard', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Warlock', 'Cleric'],
      rarity: ['Uncommon', 'Common', 'Rare', 'Epic', 'Legendary', 'Unique']
    }
  });

  console.log('formik', formik.values);

  const applyFilter = (data, filters) => { 
    return data.filter(obj =>
      Object.entries(filters).every(([prop, find]) => {
        if (Array.isArray(obj[prop])) {
          return find.some(value => obj[prop].includes(value));  // Check if any element in the array matches the filter values
        } else {
          return find.includes(obj[prop]); // Check if the property matches any of the filter values
        }
      })
    );
  };

  useEffect(() => {
    listings && setListingData(applyFilter(listings, formik.values));
  }, [listings, formik.values]);

  return (
    <Box sx={{ width: '1550px' }}>
      <ListingTableFilter formik={formik} />
      <Box sx={{ backgroundColor: '#777777', p: '10px', m: 1.5 }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}>
          <Masonry gutter='2px'>
            {listingData
            ? listingData.map((listing) => (
              <EquipmentCard data={listing} key={listing.listingId} />
            ))
            : null }
            <>
            </>
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Box>
  );
};

const ListingTableFilter = ({ formik }) => {
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const requiredClassFilters = new Set(formik.values.requiredClass);

  return (
    <>
      <IconButton onClick={handleExpandClick} sx={{ width: '55px', height: '45px', ml: 1, mt: 1 }}>
        <Tooltip title='Filters' placement="right">
          {expanded
            ? <CloseIcon sx={{ width: '100%', height: 'auto' }}/>
            : <MenuIcon sx={{ width: '100%', height: 'auto' }}/>
          }
        </Tooltip>
      </IconButton>
      {expanded ?
        <Box sx={{ backgroundColor: '#777777', height: '400px', m: 1.5, display: 'flex', justifyContent: 'space-evenly', justifyContent: 'flex-start' }}>
          <Box sx={{ width: '20%', backgroundColor: '#fff', height: '385px', m: 1, display: 'flex', flexDirection: 'column' }}>
            <RarityFilter
              formik={formik}
              />
            <RequiredClassFilter
              formik={formik}
              requiredClassFilters={requiredClassFilters}
              />
          </Box>
          <Box>
            <DropdownMenu />
            <DropdownMenu />
          </Box>
        </Box>
      : null}
    </>
  );
};

const RarityFilter = ({ formik }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const rarityFilters = new Set(formik.values.rarity);
  const handleRarityUpdate = (checkboxIsChecked, rarity) => {
    checkboxIsChecked
    ? rarityFilters.delete(rarity)
    : rarityFilters.add(rarity);
    formik.setFieldValue('rarity', Array.from(rarityFilters));
  };

  const dropdownStyles = {
    maxHeight: isExpanded ? '300px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.2s ease-out',
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleExpanded}> 
          Rarities
        </button>
      </Box>
      <div style={dropdownStyles}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'left', width: '50px' }}>
          <RarityCheckbox 
            rarity='Common'
            color={colorLibrary.grey}
            handleRarityUpdate={handleRarityUpdate} />
          <RarityCheckbox 
            rarity='Uncommon'
            color={colorLibrary.neonGreen}
            handleRarityUpdate={handleRarityUpdate} />
          <RarityCheckbox
            rarity='Rare'
            color={colorLibrary.neonBlu} 
            handleRarityUpdate={handleRarityUpdate} />
          <RarityCheckbox 
            rarity='Epic'
            color={colorLibrary.lightPurple}
            handleRarityUpdate={handleRarityUpdate} />
          <RarityCheckbox 
            rarity='Legendary' 
            color={colorLibrary.amber}
            handleRarityUpdate={handleRarityUpdate} />
          <RarityCheckbox 
            rarity='Unique'
            color={colorLibrary.amberBrown}
            handleRarityUpdate={handleRarityUpdate} />
        </Box>
      </div>  
    </Box>  
  )
};

const RarityCheckbox = ({ rarity, handleRarityUpdate, color }) => {
  const [checked, setChecked] = useState(true)
  const handleCheckChange = () => {
    handleRarityUpdate(checked, rarity);
    setChecked(!checked);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}> 
      <Checkbox
        sx={{
          m: -0.8,
          color: color,
          '&.Mui-checked': {
            color: color,
          },
          '& .MuiSvgIcon-root': { fontSize: 28 },
        }}
        checked={checked}
        onChange={handleCheckChange}  
      />
      <Typography> {rarity} </Typography>
    </Box>
  )
};

const RequiredClassFilter = ({ formik, requiredClassFilters }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [allChecked, setAllChecked] = useState(requiredClassFilters.length === 8); // magic number TODO
  const [rogueChecked, setRogueChecked] = useState(requiredClassFilters.has('Rogue'));
  const [fighterChecked, setFighterChecked] = useState(requiredClassFilters.has('Fighter'));
  const [barbarianChecked, setBarbarianChecked] = useState(requiredClassFilters.has('Barbarian'));
  const [clericChecked, setClericChecked] = useState(requiredClassFilters.has('Cleric'));
  const [rangerChecked, setRangerChecked] = useState(requiredClassFilters.has('Ranger'));
  const [warlockChecked, setWarlockChecked] = useState(requiredClassFilters.has('Warlock'));
  const [wizardChecked, setWizardChecked] = useState(requiredClassFilters.has('Wizard'));
  const [bardChecked, setBardChecked] = useState(requiredClassFilters.has('Bard'));

  const handleClassUpdate = (checkboxIsChecked, requiredClass) => {
    checkboxIsChecked
    ? requiredClassFilters.delete(requiredClass)
    : requiredClassFilters.add(requiredClass);
    formik.setFieldValue('requiredClass', Array.from(requiredClassFilters));
  };
  
  const handleSetAll = (bool) => {
    setRogueChecked(bool);
    setFighterChecked(bool);
    setBarbarianChecked(bool);
    setClericChecked(bool);
    setRangerChecked(bool);
    setWarlockChecked(bool);
    setWizardChecked(bool);
    setBardChecked(bool);
  };

  const handleAllCheckClick = () => {
    if(allChecked) {
      formik.setFieldValue('requiredClass', []);
      setAllChecked(false);
      handleSetAll(false);
    }
    else {
      formik.setFieldValue('requiredClass', ['Wizard', 'Bard', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Warlock', 'Cleric']);
      setAllChecked(true);
      handleSetAll(true);
    };
  };

  useEffect(() => {
    if (formik.values.requiredClass.length === 8) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    };
  }, [formik.values.requiredClass]);

  const dropdownStyles = {
    maxHeight: isExpanded ? '300px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.2s ease-out',
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleExpanded}> 
          Classes
        </button>
      </Box>
      <div style={dropdownStyles}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox sx={{ m: -0.8, '& .MuiSvgIcon-root': { fontSize: 26 } }}
              checked={allChecked}
              onChange={handleAllCheckClick} />
          <Typography>
            All Classes
          </Typography>
        </Box>
        <RequiredClassCheckbox
          requiredClass='Fighter'
          checked={fighterChecked}
          setChecked={setFighterChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Bard'
          checked={bardChecked}
          setChecked={setBardChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Wizard'
          checked={wizardChecked}
          setChecked={setWizardChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Rogue'
          checked={rogueChecked}
          setChecked={setRogueChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Warlock'
          checked={warlockChecked}
          setChecked={setWarlockChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Ranger'
          checked={rangerChecked}
          setChecked={setRangerChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Cleric'
          checked={clericChecked}
          setChecked={setClericChecked}
          handleClassUpdate={handleClassUpdate} />
        <RequiredClassCheckbox
          requiredClass='Barbarian'
          checked={barbarianChecked}
          setChecked={setBarbarianChecked}
          handleClassUpdate={handleClassUpdate} />
      </div>
      {/* <RequiredClassCheckbox 
        requiredClass='Monk'
        handleClassUpdate={handleClassUpdate} /> */}
    </Box>
  );
};

const RequiredClassCheckbox = ({ requiredClass, handleClassUpdate, checked, setChecked }) => {
  const handleCheckChange = () => {
    handleClassUpdate(checked, requiredClass);
    setChecked(!checked);
  };
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}> 
      {/* Icon instead of checkbox? */}
        <Checkbox
          sx={{
            m: -0.8,
            '& .MuiSvgIcon-root': { fontSize: 26 },
          }}
          checked={checked}
          onChange={handleCheckChange}  
        />
        <Typography>{requiredClass}</Typography>
      </Box>
      
  )
};

export default EquipmentCardListingTable;