// service/product.ts
import http from "@/api/interseptors";
import axios, { AxiosResponse } from "axios";

export interface Product {
  basket: boolean;
}

interface ProductsResponse {
  products: Product[];
}

interface ProductResponse {
  product: Product;
}

// Fetch products list
const token = localStorage.getItem("access_token");

export const getProduct = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<ProductsResponse> = await http.get(
      "/user-baskets",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
    }
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch product by ID
export const basketSave = async (data: { productId: string }) => {
  try {
    const response = await http.post("/basket", data);
    return response;
  } catch (error) {
    throw error;
  }
};
