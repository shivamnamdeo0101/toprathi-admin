import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function CustomArrInput({ setInputFields, inputFields,heading }) {
   
    const addFields = (e) => {
        e.preventDefault()
        let newField = { value: '' }

        setInputFields([...inputFields, newField])
    }
    const removeFields = (index,e) => {
        e.preventDefault()
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
    const handleFormChange = (event, index) => {
        event.preventDefault()
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    return (
        <div>
            <p>{heading}</p>
            <form>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index} style={{flexDirection:"row",alignItems:"flex-start",marginTop:10}} className='post_form_comp'>
                            <textarea
                                rows={2}
                                name='value'
                                placeholder='Enter the text'
                                value={input.value}
                                style={{marginRight:10,width:"100%",fontFamily:"open-sans",padding:10,fontSize:14}}
                                onChange={event => handleFormChange(event, index)}
                            />

                            <button  onClick={(e) => removeFields(index,e)}>Remove</button>

                        </div>
                    )
                })}
            </form>
            <button onClick={addFields}>Add More</button>
        </div>
    );
}
