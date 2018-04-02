const initialState = {
    firstname: "Komphet",
    lastname: "Meesab",
    age: 22,
    birthday: "5/1/1996",
    email: "komphet@kmi.tl",
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case "SET_USER": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:{
            return state
        }
    }
}