const express = require('express');
 
const loadRouter = (app) => {
    let loadRouter = express.Router();
 
    loadRouter.get('/:id', (req, res) => {
        
        if (req.params.id == 1) {
            const actualPage = '/post';
            const queryParams = { id: req.params.id, com_label_integer : 1 };
            app.render(req, res, actualPage, queryParams);
        } else if (req.params.id == 2) {
            const actualPage = '/special';
            const queryParams = { id: req.params.id, com_label_integer : 2 };
            app.render(req, res, actualPage, queryParams);
        }
    });
    
    return loadRouter
}

//导出该路由
module.exports = (app) => {
    return loadRouter(app)
};