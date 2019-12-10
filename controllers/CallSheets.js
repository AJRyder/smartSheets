const express = require('express')
const router = express.Router()
const CallSheet = require('../models/CallSheets')

router.get('/callsheets', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

router.post('/callsheets', async (req, res) => {
    console.log('WQE ARE HITTING HERE!!!', req.body)
    try { 
        // const createdCallSheet = await CallSheet.create(req.body)
        // res.json(createdCallSheet)
    } catch(error) { 
        console.log(error)
    }
});
router.put('/callsheets/:userId', async (req, res) => {
    console.log(req.body)
    const updatedCallSheet = await CallSheet.findByIdAndUpdate(req.params.callSheetId, req.body, {new:true})
    res.json(updatedCallSheet)

});
router.delete('/callsheets/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.callSheetId} resource`,
    );
});

module.exports = router