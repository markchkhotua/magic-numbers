'use strict';
import axios from 'axios';

export default (x, y) => {
    return axios.get(`http://apps.wavana.com/magicnumber?x=${x}&y=${y}`);
};