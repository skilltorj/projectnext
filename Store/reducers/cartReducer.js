export const cartInitialState = {
  items: [], // Array to hold the items with quantities
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(item => item.cracker_id === action.payload.cracker_id);
      if (existingItem) {
        // Check if cartQuantity is less than 50 before allowing the increment
        if (existingItem.cartQuantity < 50) {
          return {
            ...state,
            items: state.items.map(item =>
              item.cracker_id === action.payload.cracker_id
                ? { ...item, cartQuantity: item.cartQuantity + 1 }
                : item
            ),
          };
        } else {
          // If cartQuantity is 50, return the state without any changes
          return state;
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, cartQuantity: 1 }],
        };
      }

      case "DELETE_FROM_CART":
        return {
          ...state,
          items: state.items.filter(item => item.cracker_id !== action.payload.cracker_id), // Remove the item completely
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items
            .map(item =>
              item.cracker_id === action.payload.cracker_id
                ? { ...item, cartQuantity: item.cartQuantity - 1 } // Decrease by 1
                : item
            )
            .filter(item => item.cartQuantity > 0), // Remove item if quantity goes to 0
        };
      

    case "REMOVE_SELECTED_ITEMS":
      return {
        ...state,
        items: state.items.filter(item => !action.payload.includes(item.cracker_id)),
      };

    default:
      return state;
  }
}

