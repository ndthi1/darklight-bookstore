

export default function (app) {
    app.use(function (req, res, next) {
        if (typeof (req.session.auth) === 'undefined') {
            req.session.auth = false;
        }

        if (req.session.auth === false) {
            req.session.cart = [];
        }

        res.locals.auth = req.session.auth;
        res.locals.authUser = req.session.authUser;

        app.locals.success = req.flash('success');
        app.locals.warning = req.flash('warning');
        next();
    });
}