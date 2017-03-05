import request from 'superagent';

export function setSearchText(searchText) {
    return { type: "SET_SEARCH_TEXT", searchText }
}
