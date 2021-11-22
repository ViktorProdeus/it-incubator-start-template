const initState = {
    status: false,
}

type InitStateType = typeof initState

const SET_STATUS = typeof 'login/SET-STATUS';

export const LoginReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }

        default: return state
    }
}

export const setStatusAC = (status: boolean) => ({
    type: SET_STATUS,
    status
})

type ActionsType = ReturnType<typeof setStatusAC>

// type UserDataType = {
//     avatar: string
//     created: string
//     email: string
//     isAdmin: boolean
//     name: string
//     publicCardPacksCount: number
//     rememberMe: boolean
//     token: string
//     tokenDeathTime: number
//     updated: string
//     verified: false
//     __v: number
//     _id: string
// }
