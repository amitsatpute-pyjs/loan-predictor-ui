import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://server-service.default.svc.cluster.local");
export const SocketContext = React.createContext(socket);