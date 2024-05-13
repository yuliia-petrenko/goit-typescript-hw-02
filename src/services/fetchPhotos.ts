import axios from "axios";
import { Image } from "../components/App/App.types";

const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = '1vMNbvwqnPoXlOmKrRPKI0MvekqTfwqhrZ0t4Aal_0Y';

const fetchPhotos = async <T>(query: string, page: number): Promise<T> => {
  const { data } = await axios.get<T>(`${BASE_URL}search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 10,
    },
  });

  return data;
};

export default fetchPhotos;
