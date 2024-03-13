const router = require("express").Router();
const ctrls = require("../controllers/chapter");
const { verifyAccessToken, isAdmin } = require("../middleware/verifytoken");
const uploader = require("../config/cloudinary.config");
const uploadvideo = require("../config/uploadvideo.config");
router.post("/", [verifyAccessToken, isAdmin], ctrls.createChapter);
router.get("/", ctrls.getChapters);
router.get("/lesson", ctrls.getLesson);
router.put("/:chid", [verifyAccessToken, isAdmin], ctrls.updateChapter);
router.put(
  "/",
  [verifyAccessToken, isAdmin],
  uploadvideo.single("video"),
  ctrls.updateLessons
);
router.delete("/:chid", [verifyAccessToken, isAdmin], ctrls.deleteChapter);
module.exports = router;
