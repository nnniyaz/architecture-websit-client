import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.get('/api/user/refresh', {
                withCredentials: true
            });
            setAuth(prev => {
                return { ...prev, accessToken: response.data.accessToken }
            });

            return response.data.accessToken;
        } catch (error) {
            console.log(error);
        }
    }

    return refresh;
}

export default useRefreshToken;