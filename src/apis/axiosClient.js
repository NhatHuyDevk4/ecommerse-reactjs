import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000, // thời gian phản hồi nếu vượt quá thì axios sẽ trả về lỗi
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
