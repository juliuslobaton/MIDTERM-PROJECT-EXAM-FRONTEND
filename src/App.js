import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';         // ✅ make sure you import Home from pages
import SubmitStudent from './pages/SubmitStudent';
import GetStudent from './pages/GetStudent';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';
import Login from './pages/Login';        // still import Login if you need it somewhere

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home page at root URL */}
        <Route path="/login" element={<Login />} />    {/* Login at /login */}
        <Route path="/dashboard/submit" element={<SubmitStudent />} />
        <Route path="/dashboard/get" element={<GetStudent />} />
        <Route path="/dashboard/update" element={<UpdateStudent />} />
        <Route path="/dashboard/delete" element={<DeleteStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
