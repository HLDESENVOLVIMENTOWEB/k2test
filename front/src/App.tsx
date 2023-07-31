import { Route, Routes } from 'react-router-dom';
import './index.css';

import { Home } from './pages/Home';

function App() {
  return (
       <div className="mx-auto relative h-screen flex flex-col w-full bg-center ">
             <Routes> 
                <Route path="/" element={<Home />} />
             </Routes>
      </div>
   );
}

export default App;
