exports.index = function(req, res, next) {
    res.render('index', {title: 'Some useful Government service'});
};