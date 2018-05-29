import test from 'ava';
import request from 'supertest';
import sinon from 'sinon';
import {create as createApp} from '../../app/server';
import {api} from '@cityofzion/neon-js'


test('Get Balance', async t => {
    const addr = 'address_1';
    const stubRequest = sinon.stub().resolves();
    const params = {net: 'someNet', request: stubRequest};
    const app = createApp(params);

    const response = await request(app).get(`/balances/${addr}`);
    t.true(stubRequest.calledWith(params.net, addr));
})