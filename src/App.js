import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskbarContainer from './components/TaskbarContainer/TaskbarContainer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { Box, Card } from '@mui/material'

import SignUpCardContainer from './components/SignUpCard/SignUpCardContainer';
import SignInCardContainer from './components/SignInCard/SignInCardContainer';
import PasswordResetCardContainer from './components/PasswordResetCard/PasswordResetCardContainer';
import ItemFormContainer from './components/ItemForm/ItemFormContainer';
import EquipmentCardListingTableContainer from './components/EquipmentCardListingTable/EquipmentCardListingTableContainer';
import background from './utility/img/background.webp';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Box sx={{ backgroundImage: `url(${background})`, minHeight: '100vh'}}>
          <Box sx={{ py: '10px' }}>
            <TaskbarContainer />
          </Box>
          <Box sx={{ justifyContent: 'center', maxWidth: '1550px', margin: 'auto', px: '5px', minHeight: '1vh', pb: 5 }}>
            <Card sx={{ backgroundColor: '#DDDDDD' }}>
              <Routes>
                <Route exact path = '/submit-listing'
                  element={<PrivateRoute>
                            <ItemFormContainer />
                          </PrivateRoute>}
                  />
                <Route exact path = '/signup' element={<SignUpCardContainer />} />
                <Route exact path = '/signin' element={<SignInCardContainer />} />
                <Route exact path = '/password-reset' element={<PasswordResetCardContainer />} />
                <Route exact path = '/' element={<EquipmentCardListingTableContainer />} />
              </Routes>
            </Card>
          </Box>
        </Box>
      </AuthProvider>
    </Router>
  )
};

export default App;
