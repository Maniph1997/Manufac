import Table from './component/Table/Table';
import './App.css';
import Transaction from './component/Show-transaction/Transaction';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Table/> */}
     <Routes>
     <Route path='/' element={<Table />} />
     <Route path='/transaction' element={<Transaction />} />
     </Routes>

     {/* <Transaction/> */}
    
    
    </div>
  );
}

export default App;
