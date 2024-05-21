import { Cart, Product } from "./types";

const cart: Cart = {
  products: [],
};

export const getCart = async (): Promise<Cart> => {
  return cart;
};

export const addToCart = async (product: Product): Promise<Cart> => {
  if (product) {
    const productInCart = cart.products.find(
      ({ productId: _id }) => product.productId === _id
    );
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.products.push({
        name: product.name,
        productId: product.productId,
        price: product.price,
        quantity: 1,
        photo: product.photo,
      });
    }
  }
  return cart;
};

export const removeProduct = async (productId: string): Promise<Cart> => {
  if (cart.products) {
    cart.products = cart.products.filter(
      (product) => product.productId !== productId
    );
  }
  return cart;
};

export const incrementProductQuantity = async (
  productId: string,
  amount: number
): Promise<Cart> => {
  if (cart.products) {
    const product = cart.products.find(
      (product) => product.productId === productId
    );
    if (product) {
      product.quantity += amount;

      if (product.quantity === 0) await removeProduct(productId);
    }
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.products = [];
  return cart;
};
