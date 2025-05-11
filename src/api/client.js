import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

class Client {
  constructor(baseURL) {
    this.baseUrl = baseURL;
  }

  async run(
    method,
    endpoint,
    data,
    authheaders,
    toastMsg = false,
    authCookies = false
  ) {
    const client = axios.create({
      baseURL: this.baseUrl,
      method: method,
    });

    const config = {
      withCredentials: authheaders,
      data: data,
    };

    if (authheaders) {
      const token = Cookies.get("accessToken");
      config.headers = {
        Authorization: `Bearer ${token}`,
        "X-CSRFToken": `${Cookies.get("csrftoken")}`,
      };
    }

    try {
      let response;
      response = await client(endpoint, config);
      if (authCookies) {
        Cookies.set("accessToken", response.data.access);
        Cookies.set("refreshToken", response.data.refresh);
      }
      if (toastMsg) {
        toast.success(toastMsg.info, {
          autoClose: 1500,
        });
      }
      return response.data;
    } catch (error) {
      console.log(error);
      if (toastMsg) {
        toast.dismiss();
        toast.error(toastMsg.error);
      }
      throw error;
    }
  }
}

const client = new Client(import.meta.env.VITE_BACKEND);

export default client;
