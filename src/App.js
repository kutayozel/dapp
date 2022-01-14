import MainPage from './MainPage';
import BuyToken from './BuyToken';
import Profile from './Profile';
// import Error from './Error';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/buytoken/:account" element={<BuyToken />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
