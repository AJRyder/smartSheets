const express = require('express')
const router = express.Router()
const CallSheet = require('../models/CallSheets')
const deepPopulate = require('mongoose-deep-populate')


router.get('/callsheets', async (req, res) => {
    // console.log("this is hitting")
    const foundCallsheet = await CallSheet.findById("5df145c19a27717388c0666b")
    // console.log(foundCallsheet)

    return res.json(foundCallsheet);
});

router.post('/callsheets', async (req, res) => {
    console.log('WQE ARE HITTING HERE!!!', req.body.crew)
    const newCallSheet = {
        crew: req.body.crew,
        client: req.body.client, 
        talent: req.body.talent, 
        schedule: req.body.schedule, 
        shootLocations: req.body.shootLocations
    }
    console.log(newCallSheet)
    try { 
        const createdCallSheet = await CallSheet.create(req.body)

        
        res.json(createdCallSheet)
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