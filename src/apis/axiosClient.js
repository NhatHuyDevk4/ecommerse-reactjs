import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000, // thời gian phản hồi nếu vượt quá thì axios sẽ trả về lỗi
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        // console.log(config);
        const token = Cookies.get('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axiosClient;
