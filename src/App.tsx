import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogIn } from './pages/logIn';
import { SignIn } from './pages/signIn';
import { Dashboard } from './pages/dashboard';



export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}