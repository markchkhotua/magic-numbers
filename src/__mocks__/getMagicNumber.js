export default (x, y) => {
    return new Promise((resolve, reject) => {
        const magicNumber = Math.floor(Math.random() * (x - y + 1)) + y;
        process.nextTick(
            () => magicNumber !== 0 ? resolve({data: {magicNumber: magicNumber}})
                : reject(console.log('Magic number error'))
        );
    });
};



