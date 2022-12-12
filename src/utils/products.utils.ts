import { Filters, Product, Summary, UpdateData } from "../interfaces";

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

export const getFilteredProducts = (
  products: Product[],
  filters: Filters,
): Product[] => {
  const filteredProducts: Product[] = [];
  const { byName, byPrice, byAvailability } = filters;
  const { min, max } = byPrice;
  for (let product of products) {
    if (byAvailability) {
      if (!product.isAvailable) continue;
    }

    if (byName !== "") {
      if (
        !product.name.toLocaleLowerCase().includes(byName.toLocaleLowerCase())
      )
        continue;
    }

    if (product.price > max || product.price < min) continue;

    filteredProducts.push(product);
  }
  return filteredProducts;
};
