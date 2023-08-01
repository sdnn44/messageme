import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { auth } from "../services/firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatData: {},
    user: {},
    latestMessages: {},
    combineId: "null",
    handleInput: "",
  };
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_CONTACT":
        return {
          user: action.payload,
          combineId:
            currUser.uid < action.payload.uid
              ? action.payload.uid + currUser.uid
              : currUser.uid + action.payload.uid,
          handleInput: "",
        };
      case "UPDATE_CHAT":
        const { chatData } = action.payload;
        return {
          chatData: action.payload,
          user: chatData.user,
          latestMessages: chatData.lastMessage,
          latestTimestamp: chatData.lastTimestamp,
          combineId:
            currUser.uid < chatData.user.uid
              ? chatData.user.uid + currUser.uid
              : currUser.uid + chatData.user.uid,
          handleInput: "",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
