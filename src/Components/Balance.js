import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Balance(props)
{
    return (
        <div className="listbox">
            <h1>{props.icons} {props.title}</h1>
            <h1><CurrencyRupeeIcon style={{position:'relative', top:'3px'}}/>{props.titleval}</h1>
        </div>
    )
}

export default Balance;