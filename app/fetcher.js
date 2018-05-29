import {api} from '@cityofzion/neon-js'

export const getBalance =  (net, addr) => {
    const address = 'address';
    const assets = 'assets';
    const EXF = 'EFFECT.AI TOKEN';
    const balance = 'balance';

    return api.neoscan.getBalance(net, addr)
        .then(response => (response[address] === 'not found') 
                            ? {address: response[address]}
                            : {balance: response[assets][EXF][balance]});
};

export const getBalanceFull =  (net, addr) => {
    const address = 'address';
    const assets = 'assets';
    const EXF = 'EFFECT.AI TOKEN';
    const balance = 'balance';

    return api.neoscan.getBalance(net, addr)
        .then(response => response[assets]);
};