export default function reducer(state, action) {
  switch (action.type) {
    case 'add-message':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case 'remove-message':
      return {
        ...state,
        messages: state.messages.filter(({ id }) => id !== action.payload),
      };
    case 'update-status':
      return {
        ...state,
        messages: state.messages.map((message) => (message.id === action.payload.id
          ? { ...message, status: action.payload.status } : message)),
      };

    default:
      throw new Error('Unknown action type');
  }
}
