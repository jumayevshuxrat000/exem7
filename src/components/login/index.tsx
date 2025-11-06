import { Button, Form, Input } from "antd";
import type { LoginFormType } from "../../@types";
import useLoginMutation from "../../hooks/useQuery/useQueryMutation";
import { Loader } from "lucide-react";

export default function Login() {
  const { mutate, isPending } = useLoginMutation();

  const login = async (values: LoginFormType) => {
    mutate(values); // Faqat values, onSuccess, onError uzatilmaydi!
  };

  return (
    <div className="w-[400px] m-auto flex items-center justify-center h-screen flex-col">
      <h1 className="mb-5 text-2xl">Welcome to CRM</h1>
      <Form onFinish={login} className="w-full">
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Invalid email format!" },
          ]}
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="***********" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full flex justify-center items-center"
          disabled={isPending}
        >
          {isPending ? <Loader className="animate-spin" size={20} /> : "Login"}
        </Button>
      </Form>
    </div>
  );
}
