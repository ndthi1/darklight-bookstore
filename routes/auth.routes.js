import express from 'express';
import userModel from '../models/users.model.js';
import bcrypt from 'bcryptjs';
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('auth/login')
});
router.post('/login', async (req, res) => {
    const email = req.body.Email;
    const user = await userModel.findByEmail(email);
    if(user.length === 0){
        return res.render('auth/login', {
            err_message : 'Invalid username or password.'
        })
    }
    if (user[0].isBanned === 1) {
        return res.render('auth/login', {
          layout: 'main',
          err_message: 'Your account has been banned, please contact admin to solve the problem'
        });
    }
    const ret = bcrypt.compareSync(req.body.Password, user[0].Password);
    if (ret === false) {
      return res.render('auth/login', {
        err_message: 'Invalid username or password.',
        layout: 'main'
      })
    }
    delete user[0].Password;

    req.session.auth = true;
    req.session.authUser = user[0];
    const url = req.session.retUrl || '/';
    return res.redirect(url);
})
router.get('/register', (req, res) => {
    return res.render('auth/register')
});
router.post('/register', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);

    const FullName = req.body.FullName;
    const Phone = req.body.Phone;
    const Email = req.body.Email;
    const Password = bcrypt.hashSync(req.body.Password, salt);
    const user = {
        FullName,
        Phone,
        Email,
        Password
    };
    await userModel.add(user);
    //req.flash('message', 'You have successfully created account !');
    return res.redirect('/auth/login');
})
export default router;