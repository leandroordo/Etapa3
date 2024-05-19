export interface Cart {
  products: {
    _id: string;
    name: string;
    quantity: number;
    price: number;
    photo: string;
  }[];
}

export interface Product {
  _id: string;
  // id: string;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export type AddProductActionResult = {
  ok?: boolean | undefined;
  type?: number | undefined;
  errors?: AddProductFieldErrors | undefined;
  message?: string | undefined;
};

export type AddProductFieldErrors = {
  description?: string[] | undefined;
  name?: string[] | undefined;
  price?: string[] | undefined;
  stock?: string[] | undefined;
  brand?: string[] | undefined;
  ageFrom?: string[] | undefined;
  ageTo?: string[] | undefined;
  photo?: string[] | undefined;
};

export type AddContactMessageActionResult = {
  ok?: boolean | undefined;
  type?: number | undefined;
  errors?: AddContactMessageFieldErrors | undefined;
  message?: string | undefined;
};

export type AddContactMessageFieldErrors = {
  message?: string[] | undefined;
  name?: string[] | undefined;
  email?: string[] | undefined;
  telephone?: string[] | undefined;
};
