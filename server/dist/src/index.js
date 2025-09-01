"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_js_1 = __importDefault(require("./routes/todo.js"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_js_1 = __importDefault(require("./db.js"));
const app = (0, express_1.default)();
const port = 8080;
(0, db_js_1.default)();
app.use(body_parser_1.default.json());
app.use("/todo", todo_js_1.default);
app.use((err, req, res, next) => {
    console.log("error");
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log("server start");
});
//# sourceMappingURL=index.js.map