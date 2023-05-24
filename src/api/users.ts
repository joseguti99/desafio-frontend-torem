import apiClient from "../utils/client"
import { LoginData, ResponseLogin } from "../types/login"
import { UserDataState } from "../types/chat"
import { AxiosError, AxiosResponse } from "axios"
import { httpStatus } from "../utils/statusHttp"
import { setLoginData } from "../redux/userSlice"
import { config } from "../utils/headerConfig"
import { clearStorage, setStorage } from "../cache"
import { setUserData } from "../redux/userSlice"
import { store } from "../redux/store"
import { NotificationFailure, NotificationSuccess } from "../components/Notifications"

export const apiGetUser = async () => {
    try {
        const { data, status }: AxiosResponse<UserDataState> = await apiClient.get('/users', config)

        if (status !== httpStatus.OK) return

        store.dispatch(setUserData(data))

        return data

    } catch (error) {
        const err = error as AxiosError<any>

        NotificationFailure(err.response?.data?.message)

        return err
    }
}

export const apiLogInUser = async (LoginData: LoginData) => {

    try {
        const { data, status }: AxiosResponse<ResponseLogin> = await apiClient.post('/login', LoginData)

        if (status !== httpStatus.CREATED) return

        store.dispatch(setLoginData({ authToken: data.token, userId: data.userId }))

        setStorage('token', { authToken: data.token })

        setStorage('userId', { userId: data.userId })

        NotificationSuccess(data.message || "")

        return data

    } catch (error) {
        const err = error as AxiosError<{ message: string }>

        if (err.response?.status !== httpStatus.UNAUTHORIZED) return
        NotificationFailure(err.response?.data?.message)

        if (err.response?.status !== httpStatus.NOT_FOUND) return
        NotificationFailure(err.response?.data?.message)

        return err
    }
}

export const apiDeleteUser = async () => {
    try {
        const { data, status }: AxiosResponse<ResponseLogin> = await apiClient.delete('/users', config)

        if (status !== httpStatus.CREATED) return

        clearStorage()

        NotificationSuccess(data.message || "")


    } catch (error) {
        const err = error as AxiosError<any>

        NotificationFailure(err.response?.data?.message)

        return err
    }
}
