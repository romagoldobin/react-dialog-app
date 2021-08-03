export default function reducer(state, action) {
  switch (action.type) {
    case 'add-message':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      throw new Error('Unknown action type');
  }
}
