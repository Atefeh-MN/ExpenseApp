
import style from './transaction.module.css';
const TransActionComponent = ({filteredTnx,searchItem,filteredTransaction,setSearchItem}) => {

    const changeHandler=(e)=>{
        setSearchItem(e.target.value);
        filteredTransaction(e.target.value)
    }
    return ( 
        <div className={style.container}>
            <p style={{fontSize:"18px"}}>Transactions</p>
            <input type="text" value={searchItem}
             onChange={changeHandler} placeholder='search' className={style.Input} />
            {filteredTnx.length? filteredTnx.map((item)=>{return(
                <div  style={{borderRight:item.type==="expense"&& "4px solid red" }} key={item.id} className={style.transaction}>
                  <span>{item.description}</span> 
                  <span >{item.amount} $</span>
                </div>
            )}):"add some transactions"}
            
        </div>
     );
}
 
export default TransActionComponent;