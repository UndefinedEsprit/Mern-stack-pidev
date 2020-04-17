const express = require("express");
const FormService = require("../services/form.service");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
const router = express.Router();
const formService = new FormService();

router.post("/new", formService.add);
router.post("/edit", formService.edit);
router.get("/", formService.getAll);

router.get("/:id", (req, res) => {
  let id = req.params.id;
  formService
    .getById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      res.status("500").send(err);
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  formService
    .delete(id)
    .then(() => res.send())
    .catch((err) => {
      console.log(err);
      res.status("500").send();
    });
});

router.put("/", (req, res) => {
  let form = req.body;
  formService
    .update(form)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

router.get("/getbystudy/:id", (req, res) => {
  let studyId = req.params.id;
  console.log(studyId);
  formService
    .getByStudy(studyId)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      res.status("500").send();
    });
});

router.post("/publish", (req, res) => {
  formService
    .publish(req.body)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      res.status("500").send();
    });
});

router.post("/upload", upload.array("file"), (req, res, next) => {
  res.status(200).json({ message: "images successfully saved" });
});

module.exports = router;
