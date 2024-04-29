import { useState } from "react"
import Row from "./Row"
 function Table(){ 

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

       
    
    
 function handleChange(event){
   const cont = event.target.value
   const arr =[...transactions]
   if (cont.length>0){
    const filter=transactions.filter((transaction)=> {
        return transaction.Description.toLowerCase().includes(cont.toLowerCase())
       })
       if(filter.length> 0){
       setTransactions([...filter])}
   }else{
    console.log(arr)
    setTransactions([...arr])
   
 }

    
      
 }


    return (
        <>
        <div className="m-4 p-4">
            <input  onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type of transaction"/>
        </div>
        <table className="table ">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <Row transactions={transactions} setTransactions={setTransactions}/>
        
            </tbody>
        </table>
        </>
    )
}
export default Table