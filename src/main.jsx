import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Slide, ToastContainer } from "react-toastify";
const MyClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={MyClient}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={1500}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
