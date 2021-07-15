import React from 'react'

const Todo = ({item, markDone,setTodo, deleteTodo}) => {

    const {id,createTime, status, todo} = item;

    const updatedData = ()=>{
        const date = new Date();
        const d = {
            id,
            createTime, 
            endTime: date, 
            status: "done", 
            todo
        }

        return d;
    }

    const editClick = ()=>{
        setTodo(item)
    }

    

    return (
        <div className="todo-container">
            <hr />
            <div className="todo">
                <div>
                    <i onClick={()=>markDone(updatedData())} className="fa fa-check-circle done-icon" style={{color:status==="done"?"#4e94da":"#fff"}} aria-hidden="true"></i>
                    <p style={{textDecoration: status==="done"?"line-through":"none"}}>{todo}</p>
                </div>
                <i onClick={editClick} className="fa fa-edit edit-icon" aria-hidden="true"></i>
                <i onClick={()=>deleteTodo(id)} className="fa fa-trash trash-icon" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Todo
