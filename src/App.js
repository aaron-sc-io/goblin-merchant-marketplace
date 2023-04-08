import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { Box, Card } from '@mui/material'

import SignUpCardContainer from './components/SignUpCard/SignUpCardContainer';
import SignInCardContainer from './components/SignInCard/SignInCardContainer';
import ItemFormContainer from './components/ItemForm/ItemFormContainer';
import EquipmentCardListingTableContainer from './components/EquipmentCardListingTable/EquipmentCardListingTableContainer';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Box sx={{ backgroundColor: '#AAAAAA', height: '1000vh' }}>
          <Box sx={{ justifyContent: 'center', maxWidth: '1200px', margin: 'auto', px: '10px' }}>
            <Box sx={{ py: '10px' }}>
              <Dashboard /> {/* TaskbarContainer */}
            </Box>
            <Card sx={{ backgroundColor: '#DDDDDD' }}>
              <Routes>
                <Route exact path = '/submit-listing'
                  element={<PrivateRoute>
                            <ItemFormContainer />
                          </PrivateRoute>}
                  />
                <Route exact path = '/signup' element={<SignUpCardContainer />} />
                <Route exact path = '/signin' element={<SignInCardContainer />} />
                <Route exact path = '/password-reset' element={<SignInCardContainer />} />
                <Route exact path = '/' element={<EquipmentCardListingTableContainer />} 
                  />
              </Routes>
            </Card>
          </Box>
        </Box>
      </AuthProvider>
    </Router>
  )
};

export default App;
