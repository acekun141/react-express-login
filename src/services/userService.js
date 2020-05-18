import API from '../utils/API';

export const register = async (phone, email, password) => {
    try {
        console.log('ok');
        const response = await API.post('/users', {
            phone,
            email,
            password
        });
        const result = await response.json();
        return result;
    } catch(err) {
        console.log(err);
    }
};