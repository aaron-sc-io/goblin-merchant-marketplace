import { Box, Card, Typography, Button, Divider, Tab, Tabs } from '@mui/material';
import { colorLibrary } from '../../utility/colors';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import listingFixture from './ListingFixture';

const ProfilePage = ({username, discord, repScore, listingData = listingFixture}) => {
  const [currentTab, setCurrentTab] = useState('userInfo')
  console.log(listingFixture)
  return (
  <>
    <Card sx={{ 
      backgroundColor: colorLibrary.lightGrey, 
      width: '1050px',
      height: '800px'
    }}>
      <Box sx={{  
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Box sx={{p:'5px', pl:'15px'}}>
          <AccountCircleIcon sx={{width: '150px', height: 
        '150px'}}/>
        </Box>
        <Card sx={{ 
          backgroundColor: colorLibrary.darkGrey, 
          width: '1000px',
          height: '600px',
          alignSelf: 'center'
        }}>
          <Box sx={{
            pt: '8px',
            pl: '15px'
          }}>
            <Typography sx={{fontSize: 24}}>{username}</Typography>
            <Typography>Rep Score: {repScore}</Typography>
            <Typography>Discord: {discord}</Typography>
          </Box>
          
          <Box sx={{
            display: 'flex',
            py: '10px',
            pl: '15px',
            gap: '15px'
          }}>
            <Button variant='contained' onClick={() => setCurrentTab('userInfo')}>user info</Button>
            <Button variant='contained' onClick={() => setCurrentTab('activeListings')}>active listings</Button>
            <Button variant='contained' onClick={() => setCurrentTab('previousSales')}>previous sales</Button>
            <Button variant='contained' onClick={() => setCurrentTab('reviews')}>reviews</Button>
          </Box>
          <Divider variant='middle' sx={{backgroundColor: colorLibrary.lightGrey}}/>
          { currentTab === 'userInfo' && 
          <Box sx={{
            color: colorLibrary.lightGrey,
            p: '15px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography>Trading since: {}</Typography>
            <Typography>Completed trades: {}</Typography>
          </Box>
          }
          { currentTab === 'activeListings' && 
          <Box sx={{
            color: colorLibrary.lightGrey,
            pl: .75,
            height:'1000px'
          }}>
            <HorizontalListings listingData={ listingData }/>
          </Box>
          }
          { currentTab === 'previousSales' && 
          <Box sx={{
            color: colorLibrary.lightGrey,
            pl: .75
          }}>
            <HorizontalListings listingData={ listingData }/>
          </Box>
          }
          { currentTab === 'reviews' && 
          <Box sx={{color: colorLibrary.lightGrey}}>
            reviews
          </Box>
          }
        </Card>
      </Box>
    </Card>
  </>
  )
}

const HorizontalListings = ({ listingData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <Carousel
      swipeable={true}
      showDots={true}
      renderButtonGroupOutside={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {listingData && listingData.map((listing) => (
      <Box sx={{
        height: '400px'
      }}>
        <EquipmentCard data={listing} />
      </Box>
      ))}
    </Carousel>
  )
}

export default ProfilePage
 