export const Types = {
    REQUEST: 'GET_REQUEST',
    SUCCESS: 'GET_SUCCESS',
    FAILURE: 'GET_FAILURE',
};

const INITIAL_STATE = {
    username: null,
    loading: false,
    error: false,
    data: {},
};

export default function getUser(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.REQUEST:
        return {
            ...state,
            username: action.payload.username,
            loading: true,
        };
    case Types.SUCCESS:
        return {
            ...state,
            data: action.payload.data,
            error: false,
            loading: false,
        };
    case Types.FAILURE:
        return {
            ...state,
            data: {},
            error: true,
            loading: false,
        };
    default:
        return state;
    }
}

export const Creators = {
    get: username => ({
        type: Types.REQUEST,
        payload: {
            username,
        },
    }),

    getSuccess: data => ({
        type: Types.SUCCESS,
        payload: {
            data,
        },
    }),

    getFailure: () => ({
        type: Types.FAILURE,
    }),

    default: () => ({
        type: Types.DEFAULT,
    }),
};
