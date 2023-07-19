import React from 'react';
import Balance from './Components/Balance';
import Form from './Components/Form';
import Lists from './Components/Lists';
import { useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';

function App()
{
  const [inputText, setInputText] = useState({
    itemName: "",
    itemValue: ""
  });

  //items is a state array
  const [items, setItems] = useState([]);

  const [totalspend, setTotalSpend] = useState(0.00);
  const [salary, setSalary] = useState("");
  const [finalsal, setfinalsal] = useState("");
  const [remain, setRemain] = useState(0.00);
  
  function update(event)
  {
    setSalary(event.target.value);
  }

  function updateBudget()
  {
     setfinalsal(salary);
     setSalary("");
  }

  var num2;
  function deleteitem(id,val)
  {
     const num1 = remain;
     num2 = val;
     const num3 = totalspend;

     setItems( (previtems)=>{
        console.log(1);
        return previtems.filter( (item,index)=>{
          return index!==id;
        });
     });
  
     setRemain(Number(num1)+Number(num2)); 
     setTotalSpend(Number(num3)-Number(num2));
  }

  return (
     <div className="Container">

     <h1>Hello User! Welcome to Apni-Bachat</h1>
     
     <div className="enterSal">
     <input type="text" placeholder="What's your Budget?" onChange={update} value={salary}/>
     <button onClick={updateBudget}>Add</button>
     </div>

    <div className="BF">
     <div id="balance">
     <div className="budget"><Balance title="Budget" titleval={finalsal} icons={ <SavingsIcon/> }/></div>
     <div className="remains"><Balance title="Remaining" titleval={remain} icons={ <PaidIcon/> }/></div>
     <div className="spent"><Balance title="Expenditures" titleval={totalspend} icons={ <PaymentIcon/> }/></div>
     </div>

     <div className="formlayout">
     <h2>Expense Information</h2>
     <Form items={items} setItems={setItems} totalspend={totalspend} setTotalSpend={setTotalSpend} remain={remain} setRemain={setRemain} 
     fsal={finalsal} setSal={setSalary} inputText={inputText} setInputText={setInputText}/>
     </div>
    </div>
     
     <div className="Expenses">
      <h2>Expenses</h2>
      <ul>{items.map( (item,index)=>(
          <Lists key={index} id={index} Name={item.itemName} Value={item.itemValue} delete={deleteitem} num2={num2}/>
        ))}</ul>
     </div>

     </div>
  )
}

export default App;
