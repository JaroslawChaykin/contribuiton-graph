import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dpg.gg/test/',
});

export const API = {
    async getContributions() {
        const response = await instance.get('calendar.json')

        return response.data;
    }
}