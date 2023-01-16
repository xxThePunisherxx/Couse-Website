const { Router } = require("express");
const category = require("../controllers/category.js");

const router = Router();

router.get("/", category.getAllCategory);
router.get("/:id", category.getCategory);
router.post("/add", category.createCategory);
router.delete("/delete/:id", category.deleteCategory);
router.put("/update/:id", category.updateCategory);

module.exports = router;
