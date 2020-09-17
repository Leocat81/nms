var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  debugger;
  // Use the mv() method to place the file somewhere on your server
  try {
    await sampleFile.mv("C:\\Users\\86152\\Desktop\\test.jpg");
    res.send("上传成功");
  } catch (error) {
    console.log(error);
    return res.status('500').send(error);
  }
});
module.exports = router;
