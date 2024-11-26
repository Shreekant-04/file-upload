const Router = require("express").Router();
const upload = require("../config/multerConfig");

Router.get("/", (req, res) => {
  res.render("index");
});

Router.post('/upload', upload.single('file'), (req, res) => {
  try {
    const file = req.file;
    res.status(200).render('uploadSuccess', {
      message: 'File uploaded successfully!',
      fileUrl: file.path, 
    });
  } catch (error) {
    res.status(500).render('error', {
      message: 'Error uploading file',
      error,
    });
  }
})

module.exports = Router; 
