import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const Detail = () => {
    const navigate = useNavigate();
    const todo_list = useSelector((state) => (state.todos.todos)); 
    const todo_id = useParams();
    const todo = todo_list.filter((todo) => {
        return todo.id === Number(todo_id.id);
    }); 
    console.log(todo)    
    return(
        <div>
            <p>ID:{todo.id}</p>
            <button onClick={() => { navigate('/') }}>이전으로</button>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </div>   
        
    );
};

export default Detail;