import { AxiosError, AxiosResponse } from "axios"
import apiClient from "../utils/client"
import { store } from "../redux/store"
import { httpStatus } from "../utils/statusHttp"
import { config } from "../utils/headerConfig"
import { ChatsState, NewMessage } from "../types/chat"
import { setChatsData } from "../redux/chatsSlice"
import { configMultiplataformData } from "../utils/headerConfig"
import { NotificationFailure, NotificationSuccess } from "../components/Notifications"

export const apiGetChats = async () => {
    try {
        const { data, status }: AxiosResponse<ChatsState> = await apiClient.get(`/chats`, config)

        if (status !== httpStatus.OK) return

        store.dispatch(setChatsData(data.chats))

        return data

    } catch (error) {
        const err = error as AxiosError<any>

        store.dispatch(setChatsData([]))

        NotificationFailure(err.response?.data?.message)

        return err
    }
}

export const apiCrearChat = async (form: any) => {
    try {
        const { data, status }: AxiosResponse = await apiClient.post(`/chats`, form, configMultiplataformData)

        if (status !== httpStatus.CREATED) return

        return data

    } catch (error) {
        const err = error as AxiosError<any>

        NotificationFailure(err.response?.data?.message)

        return err
    }
}

export const apiSendMessage = async (newMessage: NewMessage) => {
    try {
        const { message, chatId } = newMessage

        const { data, status }: AxiosResponse = await apiClient.post(`/chats/${chatId}`, { message: message }, config as any)

        if (status === httpStatus.CREATED) return

        return data
    } catch (error) {
        const err = error as AxiosError<any>

        NotificationFailure(err.response?.data?.message)

        return err
    }
}

export const apiDeleteChat = async (chatId: string) => {
    try {
        const { data, status }: AxiosResponse = await apiClient.delete(`/chats/${chatId}`, config)

        if (status !== httpStatus.CREATED) return

    } catch (error) {
        const err = error as AxiosError<any>

        NotificationFailure(err.response?.data?.message)

        return err
    }
}