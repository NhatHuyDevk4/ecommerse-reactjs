import axiosClient from './axiosClient';

const addProductToCart = async (data) => {

    return await axiosClient.post('/cart', data);
  
};

const getCard = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
}
export { addProductToCart, getCard };


