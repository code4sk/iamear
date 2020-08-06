// import actions from './actions'

let initialState = {
    currentEvent: "0",
    list: [],
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'CHANGE': {
            let newList = [...state.list];
            if (state.list.includes(action.value) === false) {
                newList.push(action.value)
            }
            return {
                ...state,
                currentEvent: action.value,
                list: newList
            }
        }
        case 'REMOVE': {
            console.log('remove')
            let newList = [...state.list];
            let newCurrentEvent = state.currentEvent;
            let index = newList.indexOf(action.value);
            console.log(index)
            if (index > -1) {
                newList.splice(index, 1);
            }
            console.log(newList)
            if (state.currentEvent === action.value) {
                if (index === newList.length) {
                    newCurrentEvent = newList[index - 1];
                } else {
                    newCurrentEvent = newList[index];
              }
            }
            if (newList.length === 0) {
                newCurrentEvent = "0"
            }
            return {
                ...state,
                currentEvent: newCurrentEvent,
                list: newList,
            }
        }
        default: return state;
    }
}

export default reducer;