import express from 'express';

export const create = ({net, request}) => {

    const app = express();

    app.get('/balances/:address', async (req, res) => {
        let result = await request(net, req.params.address);
        res.json(result);
    });

    return app;
}