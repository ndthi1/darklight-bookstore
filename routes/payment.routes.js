import express, { query } from "express";

const router = express.Router();

router.get('/checkout', async function (req, res) {
    return res.render('payment/checkout', {
        layout: 'main'
    });
});

router.get('/confirm', async function (req, res) {
    return res.render('payment/confirm', {
        layout: 'main'
    });
});

router.get('/complete', async function (req, res) {
    return res.render('payment/complete', {
        layout: 'main'
    });
});

export default router;