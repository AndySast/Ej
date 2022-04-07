const initialState = {
    count: 0,
    setInter: 0,
    isCheck: true,
}

function reducer (state=initialState,action){
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
            }
        case 'SET_INTERVAL':
            return{
                
        }
    }
}