'use strict';
import getMagicNumber from './getMagicNumber';

export default (x, y) => {
    return getMagicNumber(x, y)
        .then(({data}) => {
            return Math.sqrt(data.magicNumber);
        })
        .catch(err => {
            console.log('Magic number error: ' + err.message);
            return -1;
        });
};


