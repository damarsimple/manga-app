import { gql } from "@apollo/client";
import create from "zustand"
import { persist } from "zustand/middleware"
import { client } from "../modules/client";
import { AuthResponse, User } from "../types";

interface UserStore{
    user?: User | null;
    token?: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout:() => void
    check: () => Promise<void>
}

export const useUserStore = create<UserStore>(persist(
    (set) => ({
        logout: () => set({
            user: null,
            token: null
        }),

        check: async () => {
          
         const { data } =    await client.query<{ me  : User | null}>({
                query: gql`query Me{
                  me { 
                        id
                        email
                        name
                        isAdmin
                  }
              }`
         })
          
            if (!data.me) {
                set({token : null, user:null})
            } else {
                set({ user : data.me})
            }
            
        },
        

        login: async (username,password) => {

          await  client.mutate<{ login : AuthResponse}>({
                mutation: gql`
                    mutation Login ($username: String!, $password: String!){ 
                        login(email: $username, password: $password){
                            token
                            status
                            user{
                                id
                                email
                                name
                                isAdmin
                            }
                            message
                        }
                    }
                `,
                variables: {
                    username,
                    password
                }
            }).then(({ data }) => {
                if (!data || !data.login) throw Error("Login Failed");

                if (!data.login.status || !data.login.token) throw Error(data.login.message ?? "Login Failed");

                set({
                    token: data.login.token,
                    user: data.login.user
                })

            })

            // set({ token })
        },
   
  }),
  {
    name: "user-storage",
    getStorage: () => localStorage, 
  }
))