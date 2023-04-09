import { Routes, Route } from 'react-router-dom'

import { GiSunCloud } from 'react-icons/gi';

import NavHeader from "./components/NavegationMenu";
import Home from './pages/Home';
import DetailsWheater from './pages/DetailsWheater';

function App() {
    return (
       <main className="content_all_app">
        <div className="title_app">
            <h1 className='title_app'>Wheater App</h1>
            <GiSunCloud/> 
        </div>
        <NavHeader />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<DetailsWheater />}/>
        </Routes>
       </main>
    );
}

export default App;