const shelfReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_SHELF':
        return action.payload;
    default:
        return state;
    }
};

//shelfReducer will be on the redux state at:
// state.shelfReducer
export default shelfReducer;


