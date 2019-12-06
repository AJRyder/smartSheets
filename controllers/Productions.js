const express = require('express')
const router = express.Router()
const Production = require('../models/Production')

router.get('/productions', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

router.post('/productions', async (req, res) => {
    try { 
        const createdProduction = await Production.create(req.body)
        res.json(createdProduction)
    } catch(error) { 
        console.log(error)
    }
});
router.put('/productions/:userId', async (req, res) => {
    console.log(req.body)
    const updatedProduction = await Production.findByIdAndUpdate(req.params.productionId, req.body, {new:true})
    res.json(updatedProduction)

});
router.delete('/productions/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router