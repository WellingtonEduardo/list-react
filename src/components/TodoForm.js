import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { onAddItem } from '../features/todoSlice';




function TodoForm(props) {

    const dispatch = useDispatch()

    const [text, setText] = useState("")
    

    function handleChange(event) {

        const t = event.target.value
        setText(t)

    }



    function addItem(event) {

        event.preventDefault();

        if (text) {

            dispatch(onAddItem(text))

            setText("")
        }


    }


    return (<form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>add</button>
    </form>)


}

export default TodoForm