import React from "react";
import {io} from "socket.io-client";

export const socket = io(process.env.VITE_BACKEND_SERVICE);
export const SocketContext = React.createContext(socket);