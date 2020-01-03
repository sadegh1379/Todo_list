import React , { useState } from 'react'

function TodoInput({ addtodo }) {
    const [value , setValue] = useState('');

    function handleSubmit(e){
       e.preventDefault();
        if(!value){
            return;
        }
       addtodo(value);
       
       
       setValue('');
    }
    return (
        <form onSubmit={handleSubmit} className="mt-2">
            <input type="text"
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
            placeholder="Add new work..."
            className="input form-control col-lg-5 mx-auto"/>
            
        </form>
    )
}

export default TodoInput;
