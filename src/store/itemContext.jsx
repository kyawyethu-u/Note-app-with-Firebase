import { createContext, useReducer } from "react";



const initialState= {
    items: [],
    totalAmount: 0
}
const itemReducer = (state, action)=>{

    if(action.type ==="ADD_ITEM"){
        const updatedTotalAmount  = state.totalAmount + action.item.price*action.item.amount;
        const exitItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id);
        const exitItem = state.items[exitItemIndex];

        let updatedItems;

        if(exitItem){
            const updatedItem = {
                ...exitItem,
                amount : exitItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[exitItemIndex] = updatedItem;

        } else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items : updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if(action.type ==="REMOVE_ITEM"){
        const exitItemIndex = state.items.findIndex(
            (item) => item.id === action.id);
        const exitItem = state.items[exitItemIndex];
        const updatedTotalAmount = state.totalAmount - exitItem.price;

        let updatedItems;
        if(exitItem.amount === 1){
                updatedItems =state.items.filter((item)=> item.id !== action.id)
        }
        else{
                const updatedItem = {...exitItem, amount: exitItem.amount -1}
                updatedItems = [...state.items];
                updatedItems[exitItemIndex] = updatedItem;
        }
        return {
            items : updatedItems,
            totalAmount: updatedTotalAmount,
        }

    }
    return initialState;
}


export const itemContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: item => {},
    removeItem: id =>{},
})

const ItemContextProvider = (props)=>{
    const [itemState,dispatchItem]=useReducer(itemReducer,initialState)
    
    const addItemHandler = (item)=>{
        dispatchItem({type: "ADD_ITEM",item})
    };
    const removeItemHandler = (id)=>{
        dispatchItem({type: "REMOVE_ITEM",id})
    }
    const itemCtx ={
        items: itemState.items,
        totalAmount: itemState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    
    return (
        <itemContext.Provider value={itemCtx}>
            {props.children}
        </itemContext.Provider>
    )
}

export default ItemContextProvider;