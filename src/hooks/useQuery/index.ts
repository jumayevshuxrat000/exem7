import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface QueryType {
  url: string;
  pathname: string | string[];
}

export const useQueryHandler = ({ url, pathname }: QueryType) => {
  const { request } = useAxios();

  return useQuery({
    queryKey: Array.isArray(pathname) ? pathname : [pathname],
    queryFn: () =>
      request({
        url,
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      }),
    placeholderData: (prev) => prev,
  });
};
