import axiosClient from './axiosClient';

const register = async (body) => {
    console.log('auth', body);

    return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfo = async (body) => {
    return await axiosClient.get(
        '/user/info/433f6945-bcae-4990-8140-263355e9efd8'
    );
};

export { register, signIn, getInfo };
