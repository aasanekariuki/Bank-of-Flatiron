import Button from "./Button"

 function Row({transactions,setTransactions}){

    const rows =transactions.map((transaction,index)=>{
        
         return(
            <tr key={index+1}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Category}</td>
            <td>{transaction.Amount}</td>
            <td>
        <Button index={index} setTransactions={setTransactions}transactions={transactions}>
            <span>delete</span>
</Button>
        

            </td>
        </tr>
         )
    })
    return(
        <>
        {rows}
       </>
    )
}

export default Row