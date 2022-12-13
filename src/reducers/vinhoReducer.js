import { VINHO_LIST_REQUEST, VINHO_LIST_SUCCESS, VINHO_LIST_FAIL, VINHO_DETAILS_REQUEST, VINHO_DETAILS_SUCCESS, VINHO_DETAILS_FAIL, VINHO_SAVE_REQUEST, VINHO_SAVE_SUCCESS, VINHO_SAVE_FAIL } from "../constants/vinhoConstants";


function vinhoListReducer(state = { vinhos: [] }, action) {

    switch (action.type) {
        case VINHO_LIST_REQUEST:
            return { loading: true };
        case VINHO_LIST_SUCCESS:
            return { loading: false, vinhos: action.payload };
        case VINHO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
function vinhoDetailsReducer(state = { vinho: {} }, action) {

    switch (action.type) {
        case VINHO_DETAILS_REQUEST:
            return { loading: true };
        case VINHO_DETAILS_SUCCESS:
            return { loading: false, vinho: action.payload };
        case VINHO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function vinhoSaveReducer(state = { vinho: {} }, action) {

    switch (action.type) {
        case VINHO_SAVE_REQUEST:
            return { loading: true };
        case VINHO_SAVE_SUCCESS:
            return { loading: false, success: true, vinho: action.payload };
        case VINHO_SAVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export { vinhoListReducer, vinhoDetailsReducer, vinhoSaveReducer }
