var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  // Use the mv() method to place the file somewhere on your server
    let res1=await sampleFile.mv("C:\\Users\\86152\\Desktop").catch((err)=>{
    return res.json(err);
    });
    console.log('sdsdsd');
    res.send('chengg');
});
module.exports = router;
