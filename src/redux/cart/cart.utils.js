export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existing = cartItems.find((item) => item.id === cartItemToRemove.id);
  if (existing) {
    const { quantity } = existing;

    if (quantity - 1 === 0) {
      return cartItems.filter((item) => item.id !== existing.id);
    } else {
      return cartItems.map((item) => {
        if (item.id === existing.id) {
          return {
            ...item,
            quantity: quantity - 1,
          };
        }
        return item;
      });
    }
  }
  return cartItems;
};
