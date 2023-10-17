import React from "react";
import {io} from "socket.io-client";

export const socket = io("http://172.25.25.98:5000");
export const SocketContext = React.createContext(socket);