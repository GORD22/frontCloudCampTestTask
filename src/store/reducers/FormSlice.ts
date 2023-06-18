import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface InitialFormState {
    phone: string
    email: string
}

interface ExtendedFormState {
    nickname: string
    name: string
    sername: string
    sex: string,
    advantages: string[]
    checkbox: number[]
    about: string
    radio:  number | null
}

export type FormState = InitialFormState & ExtendedFormState

const initialState: FormState = {
    nickname: '',
    name: '',
    sername: '',
    phone: '',
    email: '',
    sex: '',
    advantages: ['', '', ''],
    checkbox: [],
    about: '',
    radio: null
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInitInfo: (state, action: PayloadAction<{phone: string, email: string}>) => {
            state.phone = action.payload.phone
            state.email = action.payload.email
        },
        setSex: (state, action: PayloadAction<string>) => {
            state.sex = action.payload
        },
        setAbout: (state, action: PayloadAction<string>) => {
            state.about = action.payload
        },
        setExtendedForm: (state, action: PayloadAction<ExtendedFormState>) => {
            state.nickname = action.payload.nickname
            state.name = action.payload.name
            state.sername = action.payload.sername
            state.advantages = [...action.payload.advantages]
            state.checkbox = [...action.payload.checkbox.map(c => +c)]
            action.payload.radio ? state.radio = +action.payload.radio : state.radio = null
        }
    }
})

export const {
    setInitInfo,
    setSex,
    setAbout,
    setExtendedForm
} = FormSlice.actions

export default FormSlice.reducer