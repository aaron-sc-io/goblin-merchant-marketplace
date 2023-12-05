// TODO
// All Listing Object Options
const category = [];
const name = [];
const requiredClass = ['Wizard', 'Bard', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Warlock', 'Cleric'];
const rarity = ['Uncommon', 'Common', 'Rare', 'Epic', 'Legendary', 'Unique'];
const slotType = ['Ring', 'Neck', 'Back', 'Foot', 'Head', 'Legs', 'Primary Weapon', 'Secondary Weapon', 'Two-Handed', 'Utility'];
const weaponType = [];
const enchantments = [];

const defaultListingFilters = {
  category,
  name,
  requiredClass,
  rarity,
  slotType,
  weaponType,
  enchantments
};

export default defaultListingFilters;