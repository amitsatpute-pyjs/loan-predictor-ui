import React from "react";
import {io} from "socket.io-client";

export const socket = io("server-service:80");
export const SocketContext = React.createContext(socket);