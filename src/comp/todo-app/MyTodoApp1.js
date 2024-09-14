import React, { useState } from 'react';

function useTodoData(){
    //할일저장 state
    const [todos, setTodos] = useState([])
    const [seq, setSeq] = useState(0)//업데이트용 숫자

    function addTodo(todo){
        todos.push(todo)
        setSeq((prev)=>prev+1)
    }

    return [todos, addTodo]
}

function MyTodoApp1(props) {
    const [todos, addTodo] = useTodoData();

    return (
        <div>
            <button>Add</button>
            <div>
                <div>{todos.length}</div>
                <ul>
                    {todos.map((td,index)=>{
                        return <li key={index}>td.title</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default MyTodoApp1;