import { AuthProvider } from './contexts/AuthContext';
import SignUpCard from './components/SignUpCard/SignUpCard';
import SignInCard from './components/SignInCard/SignInCard';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    // <AuthProvider>
    //   <Box sx={{ display: 'flex', width: 625, justifyContent: 'space-between', p: 3 }}>
    //     <SignUpCard />
    //     <SignInCard />
    //   </Box>
    // </AuthProvider>

    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path = '/' element={<Dashboard />} />
          <Route exact path = '/signup' element={<SignUpCard />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
};

export default App;
