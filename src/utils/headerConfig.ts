import { AxiosRequestConfig } from "axios"
import { AxiosConfig, CustomHeaders } from "../types/types"
import { getStorage } from "../cache"
import { tokenData } from "../types/login"

export const token: tokenData = getStorage('token') || { authToken: "" }

export const headers: CustomHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token.authToken}`,
}

export const config: AxiosRequestConfig<CustomHeaders> = { headers };

export const configMultiplataformData: AxiosConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token.authToken}`,
    }
};
