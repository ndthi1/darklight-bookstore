import express, { query } from "express";
import userModel from '../models/users.model.js';

const router = express.Router();
router.use('/assets', express.static('assets'));

router.get('/', async function (req, res) {
    return res.render('admin/login',{layout: false});
});

router.get('/dashboard', async function (req, res) {
    return res.render('admin/dashboard',{layout: false});
});

router.get('/user-management', async function (req, res) {
    const userList= await userModel.findAll()
    return res.render('admin/userManagement',{userList:userList,layout: false});
});

router.post('/id/:userId', async function (req, res) {
    const userId=req.params.userId;
    let isBanned = (req.body.isBanned === 'true')?0:1;
    await userModel.banUser(userId,isBanned)
    // return res.render('admin/userManagement',{userList:userList,layout: false});
});



export default router;