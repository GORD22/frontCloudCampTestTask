import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { FormState } from '../store/reducers/FormSlice'


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp'
    }), 
    endpoints: (build) => ({
        addNewUserInfo: build.mutation<{}, FormState>({
            query: (formData) => ({
                url: '/frontend',
                method: 'POST',
                body: formData
            })
        })
    })  
})