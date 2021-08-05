/* eslint-disable import/prefer-default-export */
import data from '../../data';

const initialState = {
  messages: data,
};

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE-MESSAGE';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(({ id }) => id !== action.payload),
      };
    case UPDATE_STATUS:
      return {
        ...state,
        messages: state.messages.map((message) => (message.id === action.payload.id
          ? { ...message, status: action.payload.status } : message)),
      };

    default:
      return state;
  }
};

export const addMessageAction = (payload) => ({ type: ADD_MESSAGE, payload });

export const removeMessageAction = (payload) => ({ type: REMOVE_MESSAGE, payload });

export const updateMessageStatus = (payload) => ({ type: UPDATE_STATUS, payload });
