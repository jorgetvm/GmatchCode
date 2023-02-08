
export const TYPES = {
    GET_TOURNAMENT_INFO: 'MAIN/GET_TOURNAMENT_INFO',
    SET_TOURNAMENT_INFO: 'MAIN/SET_TOURNAMENT_INFO',
}

export const initialState = {
    tournamentInfo: true,
}

const MainReducer = (state = initialState, action) => {
    switch (TYPES.type) {
        case TYPES.GET_TOURNAMENT_INFO: {
            return {
                ...state,
                tournamentInfo: 'loading',
            };
        }
        case TYPES.SET_TOURNAMENT_INFO: {
            debugger;
            return {
                ...state,
                tournamentInfo: action.payload,
            };
        }
        default:
            return state;
    }
};
export const actions = {
    getTournamentInfo: (data) => ({
        type: TYPES.GET_TOURNAMENT_INFO,
        payload: data,
    }),
    setTournamentInfo: (data) => ({
        type: TYPES.SET_TOURNAMENT_INFO,
        payload: data,
    })
}

export default MainReducer;