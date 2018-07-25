const cartReducer = (state=[] ,action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        
        case 'REMOVE_PRODUCT':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter((item, index) => index !== firstMatchIndex)
        default:
            return state;

        }

}

export default cartReducer;