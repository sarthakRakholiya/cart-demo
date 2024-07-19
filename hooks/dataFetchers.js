import productData from "../product.json";

export const fetchProductData = async () => {
  // Simulate an asynchronous fetch operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
};