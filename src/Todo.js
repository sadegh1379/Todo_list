import React from 'react'

function Todo({todo , removetodo , index , tocomplete}) {
    return (
        <React.Fragment>
                <li style={{ color:todo.isComplete ? 'green':'red'  }} className="text-center list-group-item">{todo.text} 
                <span onClick={()=>removetodo(index)} className="badge badge-danger float-right" style={{cursor:'pointer'}}>X</span>
                 <span onClick={()=>tocomplete(index)} className="badge badge-success float-right mr-3" style={{cursor:'pointer'}} >Complete</span>
                </li>
       </React.Fragment>        
        
    )
}

export default Todo
