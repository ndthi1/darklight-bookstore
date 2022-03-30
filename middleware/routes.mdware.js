import authRoute from '../routes/auth.routes.js';
import guestRoute from '../routes/guest.routes.js';
import  detailRoute from '../routes/detail.routes.js'
import paymentRoute from '../routes/payment.routes.js'
import confirmRoute from '../routes/payment.routes.js'
import adminRoute from '../routes/admin.routes.js'


export default function (app) {
    app.use('/auth', authRoute);
    app.use('/', guestRoute);
    app.use('/detail',detailRoute)
    app.use('/payment',paymentRoute)
    app.use('/admin',adminRoute)
 
}