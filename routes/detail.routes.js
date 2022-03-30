import express, { query } from "express";

const router = express.Router();

router.get('/', async function (req, res) {
    return res.render('detail/detail', {
        layout: 'main'
    });
});

export default router;