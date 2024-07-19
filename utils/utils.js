// ***** start - check if element is already in cart function *****
export const findElementWithIdAndColor = (elements, id, color) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id === id && elements[i].color.id === color) {
      return elements[i];
    }
  }
  return null;
};
// ***** end - check if element is already in cart function *****

// ***** start - count quantity for cart *****
export const countQuantity = (cartData) => {
  const quantity = cartData.reduce((accumulator, item) => accumulator = accumulator + item.quantity, 0);
  return quantity
};
// ***** end - count quantity for cart *****

// ***** start - count total checkout payment amount *****
export const countCheckoutTotal = (cartData) => {
  const quantity = cartData.reduce((accumulator, item) => accumulator = accumulator + (item.quantity * item.price), 0);
  return quantity.toFixed(2)
};
// ***** end - count total checkout payment amount *****