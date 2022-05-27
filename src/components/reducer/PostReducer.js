const initialState={
    posts:[
        {id: '1', 
        title: 'Hello World', 
        describe: 'This is my first post'
    },
        {
        id: '2', 
        title: 'Welcome World', 
        describe: 'This is my first post'
    },
    ]
};

export default function PostReducer(state=initialState, action){
    return state;
}