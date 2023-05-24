import { io, Socket } from "socket.io-client"
import { urlApi } from "../utils/urlApi"

export const socket: Socket = io(`${urlApi}`, { forceNew: true })
