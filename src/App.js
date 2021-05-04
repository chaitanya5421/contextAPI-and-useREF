import React, { createContext } from 'react'
import './App.css';
import CompA from './components/CompA';
import {UseRef} from './components/UseRef';


const  InstituteName = createContext();
const location = createContext();

function App() {
  return (
    <div className="App">
     <InstituteName.Provider value="AchieversIT">
       <location.Provider value="Bangalore">
     <CompA />
     </location.Provider>
     </InstituteName.Provider>
     <div>
       <UseRef/>
     </div>
     
      
    </div>
  );
}

export default App;
export {InstituteName,location};
