import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { message } from "antd";

const useLoginMutation = () => {
  const { request } = useAxios();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: Record<string, any>) =>
      request({
        url: "auth/sign-in",
        method: "POST",
        data: data,
      }),
    onSuccess: (data) => {
      console.log(data);

      const token = data?.data?.token;

      if (token) {
        Cookies.set("token", token, { expires: 1 / 12 });
        message.success("Login successful");
        navigate("/");
      } else {
        message.error("Token not found ");
      }
    },
    onError: (error: any) => {
      message.error(error.response?.data?.message || "Login failed");
    },
  });
};

export default useLoginMutation;
