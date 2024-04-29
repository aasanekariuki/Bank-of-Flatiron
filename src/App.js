import { useState } from 'react';
import Search from './components/Search';
import Table from './components/Table';
import './App.css';
import Form from './components/Form';

function App() {
  const arr =[
    {
        
        Date: "12/20/2023",
        Description: "Deposit",
        Category: "Income",
        Amount: "800000"

},
{
    
    Date: "12/20/2023",
    Description: "Travelling",
    Category: "Transport",
    Amount: "10000"

},
{
    
Date: "12/26/2023",
Description: "Aasane Shopping",
Category: "shopping",
Amount: "5000"

},  {
    
Date: "01/05/2024",
Description: "Charity",
Category: "Benefit",
Amount: "20000"

},
{
    
Date: "01/20/2024",
Description: "Deposit",
Category: "Income",
Amount: "800000"

},

]

const [transactions,setTransactions] = useState(arr)



  return (
    <div className='container'>
      <Search transactions={transactions} setTransactions={setTransactions} arr={arr}/>
      <Form transactions={transactions} setTransactions={setTransactions}/>  
      <Table transactions={transactions} setTransactions={setTransactions}/>
  </div>
  );

  }
export default App;
