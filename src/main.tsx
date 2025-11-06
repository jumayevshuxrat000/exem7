import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import "@ant-design/v5-patch-for-react-19";
import ProviderConf from "./routes/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <RouterProvider router={router} />
    </ProviderConf>
  </StrictMode>
);
