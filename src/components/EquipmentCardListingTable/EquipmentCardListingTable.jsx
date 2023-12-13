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
      <IconButton onClick={handleExpandClick} sx={{ width: '65px', height: '50px', ml: 1, mt: 1 }}>
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
            <Typography sx={{ pl: 0.8 }}>
              <strong>Rarities:  </strong>
            </Typography>
            <RarityFilter formik={formik} />
            <Typography sx={{ pl: 0.8 }}>
              <strong>Classes:  </strong>
            </Typography>
            <RequiredClassFilter
              formik={formik}
              requiredClassFilters={requiredClassFilters}
              />
          </Box>
        </Box>
      : null}
    </>
  );
};

const RarityFilter = ({ formik }) => {
  const rarityFilters = new Set(formik.values.rarity);
  const handleRarityUpdate = (checkboxIsChecked, rarity) => {
    checkboxIsChecked
    ? rarityFilters.delete(rarity)
    : rarityFilters.add(rarity);
    formik.setFieldValue('rarity', Array.from(rarityFilters));
  };

  return (
    <Box sx={{ display: 'flex' }}>
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
  )
};

const RarityCheckbox = ({ rarity, handleRarityUpdate, color }) => {
  const [checked, setChecked] = useState(true)
  const handleCheckChange = () => {
    handleRarityUpdate(checked, rarity);
    setChecked(!checked);
  };
  return (
    <Tooltip title={rarity} followCursor>
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
    </Tooltip>
  )
};

const RequiredClassFilter = ({ formik, requiredClassFilters }) => {
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox sx={{ m: -0.8, '& .MuiSvgIcon-root': { fontSize: 26 } }}
          checked={allChecked}
          onChange={handleAllCheckClick} />
        <Typography>
          All Classes
        </Typography>
      </Box>
      <RequiredClassCheckbox
        checked={fighterChecked}
        setChecked={setFighterChecked}
        requiredClass='Fighter'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={bardChecked}
        setChecked={setBardChecked}
        requiredClass='Bard'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={wizardChecked}
        setChecked={setWizardChecked}
        requiredClass='Wizard'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={rogueChecked}
        setChecked={setRogueChecked}
        requiredClass='Rogue'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={warlockChecked}
        setChecked={setWarlockChecked}
        requiredClass='Warlock'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={rangerChecked}
        setChecked={setRangerChecked}
        requiredClass='Ranger'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox 
        checked={clericChecked}
        setChecked={setClericChecked}
        requiredClass='Cleric'
        handleClassUpdate={handleClassUpdate} />
      <RequiredClassCheckbox
        checked={barbarianChecked}
        setChecked={setBarbarianChecked}
        requiredClass='Barbarian'
        handleClassUpdate={handleClassUpdate} />
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