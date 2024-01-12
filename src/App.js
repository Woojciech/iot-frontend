import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accounts/:accountId" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
