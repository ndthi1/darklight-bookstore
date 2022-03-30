import express, { query } from "express";

const router = express.Router();

router.get('/', async function (req, res) {
    return res.render('vwGuest/index', {
        layout: 'main'
    });
});

export default router;