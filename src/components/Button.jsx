

 function Button({children,setTransactions,transactions,index}) {
    function handleclick(){
        const filter =transactions.filter((transaction,i)=>{
            return i !== index
        })
        setTransactions([...filter])
    }
  return (
    <button onClick={()=>handleclick()} className="btn btn-sm btn-primary">{children}</button>
  )
}
export default Button