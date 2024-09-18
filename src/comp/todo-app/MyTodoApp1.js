import React, { useState } from 'react';

function useTodoData(){
    const tmpTodos=[
        {id:1, content:"할일1"},
        {id:2, content:"할일2"},
        {id:3, content:"할일3"},
    ]
    //할일저장 state
    const [todos, setTodos] = useState(tmpTodos)
    const [seq, setSeq] = useState(0)//업데이트용 숫자

    function addTodo(todo){
        todo.id = new Date().getTime()
        todos.push(todo)
        setSeq((prev)=>prev+1)
    }

    return [todos, addTodo]
}

function MyTodoApp1(props) {
    const [todos, addTodo] = useTodoData();

    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                let ff = e.target
                let td={content:ff.content.value}
                addTodo(td)
                ff.content.value=""
            }}>
                <input type='text' name='content'></input>
                <input type='submit' value='Add'></input>
            </form>
            <div>
                <div>{todos.length}</div>
                <ul>
                    {todos.map((td,index)=>{
                        return <li key={index}>{td.content}</li>
                    })}
                </ul> 
            </div>
        </div>
    );
}

export default MyTodoApp1;