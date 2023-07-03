import React from 'react';
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { onDone, onItemDelete } from '../features/todoSlice';




function DoneImag(props) {

    if (props.done) {

        return <img src="./assets/on.png" alt="done"></img>

    }
    else {

        return <img src="./assets/off.png" alt="undone"></img>
    }
}




function ListItem(props) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.todo)

   
    return (
 
         
        items.map(item => {
          
            return <li key={item.id} ><Card className={item.done ? "done item" : "item"}>

                {item.text}

                <div>
                    <button onClick={() => { dispatch(onDone(item.id)) }}>
                        <DoneImag done={item.done}></DoneImag>
                    </button>

                    <button onClick={() => { dispatch(onItemDelete(item.id)) }}>
                        <img src="./assets/lixeira.png" alt="delete"></img>
                    </button>

                </div>

            </Card>

            </li>
        })


    )
}

export default ListItem

