const express = require('express');
 
const loadRouter = (app) => {
    let loadRouter = express.Router();
 
    loadRouter.get('/:id', (req, res) => {
        const actualPage = '/post';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
    
    return loadRouter
}

//导出该路由
module.exports = (app) => {
    return loadRouter(app)
};