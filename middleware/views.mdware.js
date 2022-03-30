import { engine } from 'express-handlebars';
export default function (app) {
    app.engine('hbs', engine({
        extname: '.hbs',
        defaultLayout: 'main.hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './views');
}