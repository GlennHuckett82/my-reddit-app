const initialState = {
    posts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return { ...state, posts: action.posts };
        default:
            return state;
    }
};

export default rootReducer;