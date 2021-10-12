import style from  './overview.module.css';
import { useState } from 'react';
import TransActionForm from './TransActionForm';


const OverViewComponent = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow]=useState(false)

    return ( 
    <div >
        <div className={style.flex}>
            <p style={{fontSize:"18px"}}>Balance : {income-expense} $</p>
            <button className={isShow? style.cancel:style.button} onClick={()=>setIsShow((prevstate)=>!prevstate)}>{isShow?"cancel":"Add"}</button>
        </div>
        {isShow&& <TransActionForm addTransaction={addTransaction}/>}
        <div className={style.flex}>
            <div className={style.box1}>Expense <span style={{color:'red'}}>{expense} $</span> </div>
            <div className={style.box1}>Income <span>{income} $</span></div>
        </div>
    </div>
     );
}
 
export default OverViewComponent;