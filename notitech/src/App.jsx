import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AjoutDetail from './pages/AjoutDetail';
import AjoutSimple from './pages/AjoutSimple';
import ListEnregistrement from './pages/ListEnregistrement';
import EditRecord from './pages/EditRecord';
import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addSimple" element={<AjoutSimple />} />
            <Route path="/addDetail" element={<AjoutDetail />} />
            <Route path="/editRecord/:id" element={<EditRecord />} />
            <Route path="/listRecords" element={<ListEnregistrement />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
