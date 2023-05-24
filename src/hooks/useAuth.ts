import { apiLogInUser } from '../api/users'
import { clearStorage } from '../cache'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setLogoutData } from '../redux/userSlice'
import { LoginData, ResponseLogin } from '../types/login'
import { useRouter } from 'next/dist/client/router'
import { setChatsData } from '../redux/chatsSlice'

const useAuth = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user)
    const router = useRouter()

    const authenticate = async (LoginData: LoginData) => {
        try {
            const data = await apiLogInUser({ email: LoginData.email, password: LoginData.password }) as ResponseLogin

            if (!data.token.length || !data.userId.length) return

            window.location.href = '/chat'

        } catch (error) {
        }
    }

    const isAuthenticated = user.authToken?.length && user.userId?.length ? true : false

    const logout = () => {
        clearStorage()
        dispatch(setLogoutData());
        dispatch(setChatsData([]))
        window.location.href = '/'
    }


    return { authenticate, logout, isAuthenticated, user }
}

export default useAuth