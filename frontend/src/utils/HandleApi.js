import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios
  .get(baseUrl)
  .then(({data})=> {
    console.log('data ---> ',data);
    setTodo(data)
  })
}

const addTodo = (text,setText,setTodo) => {

  axios
  .post(`${baseUrl}/save`,{text})
  .then((data)=> {
    console.log(data);
    setText("")
    getAllTodo(setTodo)
  })
}

const updateTodo = (todoId,text,setText,setTodo,setIsUpdating) => {

  axios
  .post(`${baseUrl}/update`,{_id:todoId,text})
  .then((data)=> {
    setText("")
    setIsUpdating(false)
    getAllTodo(setTodo)
  })
  .catch((err)=> console.log(err))
}

const deleteTodo = (_id,setTodo) => {
  axios
  .delete(`${baseUrl}/delete`,{data:{_id}})
  .then((response) => {
    console.log("Delete API successfull");
    getAllTodo(setTodo)
  })
  .catch((error) => {
    console.log("Error deleteing todo:",error);
  });
}

export {getAllTodo,addTodo,updateTodo,deleteTodo}