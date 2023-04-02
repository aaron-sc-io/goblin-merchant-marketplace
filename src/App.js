import { AuthProvider } from './contexts/AuthContext';
import SignUpCard from './components/SignUpCard/SignUpCard';
import SignInCard from './components/SignInCard/SignInCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path = '/'
            element={<PrivateRoute>
                      <Dashboard /> 
                    </PrivateRoute>}
            />
          <Route exact path = '/signup' element={<SignUpCard />} />
          <Route exact path = '/signin' element={<SignInCard />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
};

export default App;
