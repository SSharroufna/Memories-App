import express from 'express';

const router = express.Router();


//http://localhost:6000/posts

router.get('/', (req,res) => {
    res.send('THIS WORKS!!');
});

export default router;