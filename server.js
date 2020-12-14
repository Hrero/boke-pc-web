const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apiAgent = require('./server/agent');

app.prepare()
    .then(() => {
        const server = express();
        server.use(express.urlencoded({extended:false}))

        server.use('/load', require('./server/loadRouter')(app));

        server.post('/api/agent', apiAgent);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(7000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://127.0.0.1:7000');
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });

