import http from "@/api/interseptors";
import { setAccessToken } from "@/helpers/auth-helpers";

export const Login = async (values: any) => {
  try {
    const response = await http.post("/login", values);
    if (response.status === 200) {
        const token = response.data.access_token;
        setAccessToken(token);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
