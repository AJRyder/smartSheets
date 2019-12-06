const express = require('express')
const router = express.Router()
const CallSheet = require('../models/CallSheet')

router.get('/callsheets', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

router.post('/callsheets', async (req, res) => {
    try { 
        const createdCallSheet = await CallSheet.create(req.body)
        res.json(createdCallSheet)
    } catch(error) { 
        console.log(error)
    }
});
router.put('/callsheets/:userId', async (req, res) => {
    console.log(req.body)
    const updatedCallSheet = await CallSheet.findByIdAndUpdate(req.params.callsheetId, req.body, {new:true})
    res.json(updatedCallSheet)

});
router.delete('/callsheets/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router