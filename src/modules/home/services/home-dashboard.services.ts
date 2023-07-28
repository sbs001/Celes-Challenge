import axios from "axios";
import { GetProductResponse, Product } from "../entities";

export const fetchGetProducts = (): Promise<Product[]> => (
  axios.get<GetProductResponse>("products")
    .then((resp) => resp.data.products)
);
