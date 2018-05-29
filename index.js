import {create as createApp} from './app/server';
import {getBalance, getBalanceFull} from './app/fetcher';

const port = process.env.PORT || 3000;
const mainNet = 'MainNet';

const app = createApp({net: mainNet, request: getBalanceFull});

app.listen(port, () => console.log("Server is listening on port 3000"));