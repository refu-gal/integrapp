export default function consultasReducer(state = [], action) {
    switch(action.type) {
         case 'SET_SEARCH_TEXT':
             let newTextState = Object.assign({}, state, {
               searchText: action.searchText
             })

             return newTextState

        default:
            return state
    }
}
