import { Product, Summary, UpdateData } from "../interfaces";

export const generateSummary = (items: Product[]): Summary => {
  const products = items.length;
  let inStock = 0;
  let available = 0;
  let total = 0;

  for (let item of items) {
    inStock += item.noInStock;
    if (item.isAvailable) ++available;
    total += item.price * item.noInStock;
  }

  const average = total / inStock;

  return {
    products,
    inStock,
    available,
    total,
    average,
  };
};

export const updateProductById = (
  products: Product[],
  id: number,
  productData: UpdateData,
): void => {
  const { name, price, inStock, isAvailable } = productData;
  for (let product of products) {
    if (product.id === id) {
      product.name = name;
      product.price = Number(price);
      product.noInStock = Number(inStock);
      product.isAvailable = Boolean(isAvailable);
    }
  }
};

export const getProductById = (
  products: Product[],
  id: number,
): Product | void => {
  for (let product of products) {
    if (product.id === id) {
      return product;
    }
  }
};
