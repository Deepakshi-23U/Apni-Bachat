import React from 'react';
import { useState } from 'react';

function Form(props)
{
    //inputText is a state object

    function handleEvent(event)
    {
        const { name , value } = event.target;

        props.setInputText( (previousValue)=>{

            if(name==='itemName')
            {
                return {
                    itemName: value,
                    itemValue: previousValue.itemValue
                };
            }
            else
            if(name==='itemValue')
            {
                return {
                    itemName: previousValue.itemName,
                    itemValue: value
                };
            }
       } )

    }

    function addItem(event)
    {
        const num1 = props.inputText.itemValue;
        const num2 = props.totalspend;
        const num3 = props.fsal;
        const num4 = Number(num1)+Number(num2);

        props.setTotalSpend(num4);
        props.setRemain(Number(num3)-Number(num4));

        props.setItems( (previousItems)=>{
             return [...previousItems,props.inputText];
        })

        props.setInputText({
            itemName:"",
            itemValue: ""
        })

        event.preventDefault();
    }

    return (
        <form autoComplete='off'>
         <input value={props.inputText.itemName} name="itemName" placeholder="Add name of expense" onChange={handleEvent}></input>
         <input value={props.inputText.itemValue} name="itemValue" placeholder="Add expense" onChange={handleEvent}></input>
         <button onClick={addItem}>Save</button>
        </form>
    )
}

export default Form;