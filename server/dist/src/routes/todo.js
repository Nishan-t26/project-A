"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../../models/user"));
const router = express_1.default.Router();
// POST /
router.post("/test1", async (req, res) => {
    console.log("hit", req);
    const newUser = new user_1.default({
        userID: "Alice",
        name: "alample.com",
        address: "hola",
    });
    await newUser.save();
    res.json({ message: "Todo created" });
});
// GET /
router.get("/get", async (req, res) => {
    console.log("13 hit");
    res.json({ message: "All todos" });
});
// // PATCH /:id
// router.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   res.json({ message: Todo ${id} updated });
// });
// // DELETE /:id
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   res.json({ message: Todo ${id} deleted });
// });
exports.default = router;
//# sourceMappingURL=todo.js.map