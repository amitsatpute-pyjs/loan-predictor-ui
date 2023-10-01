import React from "react";
import {io} from "socket.io-client";

export const socket = io("http://127.0.0.1:5000");
export const SocketContext = React.createContext(socket);