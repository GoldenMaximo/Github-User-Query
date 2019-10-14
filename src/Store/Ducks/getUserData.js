export const Types = {
    USERDATAREQUEST: 'GET_USERDATA_REQUEST',
    USERDATASUCCESS: 'GET_USERDATA_SUCCESS',
    USERDATAFAILURE: 'GET_USERDATA_FAILURE',
    USERDATADEFAULT: 'GET_USERDATA_DEFAULT',
};

const INITIAL_STATE = {
    userData: {},
    username: null,
    loading: false,
    error: false,
};

export default function getUserData(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.USERDATAREQUEST:
        return {
            ...state,
            username: action.payload.username,
            loading: true,
        };
    case Types.USERDATASUCCESS:
        return {
            ...state,
            userData: action.payload.data,
            error: false,
            loading: false,
        };
    case Types.USERDATAFAILURE:
        return {
            ...state,
            userData: [],
            error: true,
            loading: false,
        };
    default:
        return state;
    }
}

export const Creators = {
    get: username => ({
        type: Types.USERDATAREQUEST,
        payload: {
            username,
        },
    }),

    getSuccess: data => ({
        type: Types.USERDATASUCCESS,
        payload: {
            data,
        },
    }),

    getFailure: () => ({
        type: Types.USERDATAFAILURE,
    }),

    default: () => ({
        type: Types.USERDATADEFAULT,
    }),
};
