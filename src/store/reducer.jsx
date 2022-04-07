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
                count:state.count + state.setInter
            }
        case 'SET_INTER':
            return{
                ...state,
                setInter: parseInt(action.newValue)
        }
    }
}