import { instance } from "./instance";

export const authAPI = {
    login: async (email: string, password: string, rememberMe: boolean) => {
        return await instance.post<any>(`auth/login`, {
            email,
            password,
            rememberMe,
        });
    },

    registration: async (email: string, password: string) => {
        return await instance.post<any>(`auth/register`, {
            email,
            password,
        });
    },

    setPassword: async (token: string, password: string) => {
        return await instance.post<any>(`auth/set-new-password`, {
            token,
            password,
        });
    },

    forgot: async (email: string) => {
        return await instance.post<any>(`auth/forgot`, {
            email,
            from: "test-front-admin <viktorprodeus@gmail.com>",
            message: `
            <div style={"background-color: lime; padding: 15px"}>
            password recovery link: 
            <a href="http://localhost:3000/it-incubator-start-template#/set-new-password/$token$">link</a>
            </div>
            `,
        });
    },

    getMe: async () => await instance.post<any>(`auth/me`),

    updateUser: async (name: string, avatar: string) => await instance.put<any>(`auth/me`, {name, avatar}),

    logOut: async () => await instance.delete<any>(`auth/me`),
}