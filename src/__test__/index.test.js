import magicNumber from '../index';

jest.mock('../getMagicNumber');

it('Should not be equal -1', () => {
    expect.assertions(1);
    return magicNumber(50, 20).then(data => expect(data.magicNumber).not.toEqual(-1));
});