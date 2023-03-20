import { AuthProvider } from "./contexts/AuthContext";
import SignUpCard from "./components/SignUpCard/SignUpCard";

const App = () => {
  return (
    <AuthProvider>
      <SignUpCard />
    </AuthProvider>
  )
};

export default App;
