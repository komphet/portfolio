const initialState = {
    company: {
        name: "LATTESOFT (Thailand)",
    }
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case "SET_COMPANY": {
            return {
                ...state,
                company: action.payload
            }
        }
        default:{
            return state
        }
    }
}