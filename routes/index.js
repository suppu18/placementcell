const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded"); //for checking router

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/student", require("./student"));
router.use("/interview", require("./interview"));
router.get("/download", homeController.download);
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
