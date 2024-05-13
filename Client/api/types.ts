export interface Cart {
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    photo: string;
  }[];
}

export interface Product {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: number;
  photo: string;
}
