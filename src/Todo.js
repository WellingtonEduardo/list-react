import "./Todo.css"
import ListItem from './components/ListItem'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import { useDispatch } from 'react-redux'
import store from './store/store';
import { addModal, onSave } from "./features/todoSlice";
import { useEffect } from "react"


function Todo() {

    const dispatch = useDispatch()


    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items'));
  
        if (savedItems) {
            dispatch(onSave(savedItems))
            
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    store.subscribe(() => {
        localStorage.setItem('items', JSON.stringify(store.getState().todo.items))
    })



    return (

        <div className="container">
            <header className="header">
                <h1>Todo</h1>
                <button onClick={() => { dispatch(addModal()) }} className="addButton">+</button>

            </header>

            <ul>
                <ListItem></ListItem>

            </ul>

            <Modal>
                <TodoForm ></TodoForm>
            </Modal>

        </div>



    )

}



export default Todo
