const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./post-routes");

router.use("/user", userRoutes);
router.use("/Post", thoughtRoutes);

module.exports = router;