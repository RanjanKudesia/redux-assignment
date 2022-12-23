import api from '../constants/api/api';
import axios from 'axios';

async function getFullData() {
    const response = await axios.get(api);
    const data = response.data;
    return data;
}

async function getSpecificData(id) {
    const response = await axios.get(api + '/' + id);
    const data = response.data;
    return data;
}


export default getFullData;
export {getSpecificData};