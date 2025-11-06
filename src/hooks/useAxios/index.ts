import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: object;
  data?: object;
  headers?: Record<string, string>;
}

export const useAxios = () => {
  const request = async ({
    url,
    method = "GET",
    params,
    data,
    headers,
  }: AxiosType) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/${url}`,
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token") || ""}`,
          ...headers,
        },
        data,
        params,
        validateStatus: (status) => status < 500,
      });

      if (response.status === 204) {
        return { data: [] };
      }

      return response.data;
    } catch (err) {
      console.error("error:", err);
      throw err;
    }
  };

  return { request };
};
