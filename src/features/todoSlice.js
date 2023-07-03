import { createSlice } from '@reduxjs/toolkit'
import Item from '../components/Item'

const todoSlice = createSlice({
    name: 'todo',

    initialState: {
        items: [],
        show: false,
    },

    reducers: {

        onAddItem: (state, action) => {
        
            const it = new Item(action.payload)
        
            state.items.push(it)
           
            state.show = false;

        },

        onItemDelete: (state, action) => {
            const filteredItems = state.items.filter(item => {
                return item.id !== action.payload
            })

            state.items = filteredItems;

        },

        onDone: (state, action) => {
            const updateItems = state.items.map(item => {

                if (item.id === action.payload) {
                    item.done = !item.done
                  
                }

                return item
            })

            state.items = updateItems;

        },
        onSave:(state, action) => {

        
            state.items = action.payload
           

        },

        addModal: (state, action) => {

            state.show = true;


        },
        hideModal: (state, action) => {

            state.show = false;
        }

    }



})

export const { onAddItem, onItemDelete, onDone, onSave, addModal, hideModal } = todoSlice.actions

export default todoSlice.reducer;