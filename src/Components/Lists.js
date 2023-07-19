import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Lists(props)
{
    return <div className='listbox' id="lists">
    <li><h3>{props.Name}</h3></li>
    <h3>
    <CurrencyRupeeIcon style={{position:'relative', top:'5px'}}/>{props.Value}
    <span onClick={()=>{
        return props.delete(props.id,props.Value);
    }}><DeleteIcon style={{marginLeft:"50px", position:'relative', top:'5px'}}/></span>
    </h3>
    </div>

}

export default Lists;