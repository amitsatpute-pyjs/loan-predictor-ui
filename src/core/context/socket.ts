import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://loanpredictor.com", { transports: ['websocket'], upgrade: false, "forceNew": true, 'reconnection': true, 'reconnectionDelay': 5000 });
export const SocketContext = React.createContext(socket);