"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const gphotos_1 = require("./gphotos");
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/**
 * @Function
 * Defines a route handle for the default home page
 */
// Defines a route handler for the default home page
app.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const results = yield gphotos_1.getAlbum(req.params.id);
        res.json(results);
    }
    catch (e) {
        res.status(500);
    }
}));
/**
 * @Function
 * Starts the express Server
 */
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http:localhost:${port}`);
});
//# sourceMappingURL=index.js.map