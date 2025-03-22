import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import {errorMessage} from './constants.js';


/**
 * Fetch Image Data
 *
 * @param url
 * @return {Promise<any>}
 */
export async function fetchImages(url) {
    try {
        const { data } = await axios.get(url);

        return data;
    } catch (e) {
        console.log(e);

        iziToast.error({
            message: errorMessage,
            position: 'topRight'
        });
    }
}