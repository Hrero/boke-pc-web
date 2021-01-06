const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apiAgent = require('./server/agent');
const indexRouter = require('./server/indexRouter');
const postRouter = require('./server/postRouter');
const infoRouter = require('./server/infoRouter');
const bodyParser = require('body-parser');

app.prepare()
    .then(() => {
        const server = express();

        server.use(express.urlencoded({extended:false}))
        server.use(bodyParser.json()); 
        server.use(bodyParser.urlencoded({ extended: false }));

        server.use('/load', require('./server/loadRouter')(app));

        server.post('/api/agent', apiAgent);

        server.post('/api/index', indexRouter);

        server.post('/api/post', postRouter);

        server.post('/api/info', infoRouter);

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

