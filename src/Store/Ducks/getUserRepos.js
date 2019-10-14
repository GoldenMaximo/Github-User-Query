export const Types = {
    USERREPOSREQUEST: 'GET_USERREPOS_REQUEST',
    USERREPOSSUCCESS: 'GET_USERREPOS_SUCCESS',
    USERREPOSFAILURE: 'GET_USERREPOS_FAILURE',
};

const INITIAL_STATE = {
    username: null,
    loading: false,
    error: false,
    userRepos: [],
};

export default function getUserRepos(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.USERREPOSREQUEST:
        return {
            ...state,
            login: action.payload.login,
            loading: true,
        };
    case Types.USERREPOSSUCCESS:
        return {
            ...state,
            userRepos: action.payload.userRepos,
            error: false,
            loading: false,
        };
    case Types.USERREPOSFAILURE:
        return {
            ...state,
            userRepos: [],
            error: true,
            loading: false,
        };
    default:
        return state;
    }
}

export const Creators = {
    get: login => ({
        type: Types.USERREPOSREQUEST,
        payload: {
            login,
        },
    }),

    getSuccess: userRepos => ({
        type: Types.USERREPOSSUCCESS,
        payload: {
            userRepos,
        },
    }),

    getFailure: () => ({
        type: Types.USERREPOSFAILURE,
    }),

    default: () => ({
        type: Types.USERREPOSDEFAULT,
    }),
};
