import test from 'ava';
import sinon from 'sinon';
import {api} from '@cityofzion/neon-js'
import {getBalance} from '../../app/fetcher';

test.beforeEach(t => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach(t => {
    t.context.sandbox.restore();
});

test.serial('Incorrect address', async t => {
    const data = {address: 'not found'};
    t.context.sandbox.stub(api.neoscan, 'getBalance').resolves(data);

    const result = await getBalance('someNet', 'someAddress');
    t.deepEqual(data, result);
});

test.serial('Correct address', async t => {
    const coins = 1000;
    const data = {address: 'some_correct_address', assets: {'EFFECT.AI TOKEN': {balance: coins}}};
    t.context.sandbox.stub(api.neoscan, 'getBalance').resolves(data);

    const result = await getBalance('someNet', 'someAddress');
    t.deepEqual({balance: coins}, result);
});