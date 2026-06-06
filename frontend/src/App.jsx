import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Shop/Home/Home.jsx';
import Items from './pages/Shop/Item/Items.jsx';
import Footer from './components/layout/Footer.jsx';
//import ItemDetail from './pages/Shop/Item/ItemDetail.jsx';
//import Post from './pages/User/Post/Posts.jsx';
//import Login from './pages/Login/Login.jsx';
//import Register from './pages/Register/Register.jsx';
import Navbar from './components/layout/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className = "flex flex-col min-h-screen">
        <Navbar/>
        <main className = "flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            {/*<Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />*/}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
