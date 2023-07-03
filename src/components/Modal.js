import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../features/todoSlice';


function Modal(props) {

    const { show } = useSelector(state => state.todo)


    const dispatch = useDispatch()


    function hideModel(e) {
        const target = e.target;

        if (target.id === 'modal') {
            dispatch(hideModal())
        }


    }




    return (<div id='modal' onClick={hideModel} className={show ? "modal" : "modal hide"}>
        <Card className="cardModal"> {props.children}</Card>
    </div>)
}




export default Modal