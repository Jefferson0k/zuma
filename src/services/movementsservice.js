// services/movementsService.js (admin 2)
import { apiAdmin2 } from './api.js';

export const getMovements = () => {
    return apiAdmin2.get('/movements');
};

export const createDeposit = (formData) => {
    return apiAdmin2.post('/movements/deposits/create', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const createWithdraw = (data) => {
    return apiAdmin2.post('/movements/withdraw/create', data);
};
