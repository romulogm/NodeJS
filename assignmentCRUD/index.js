"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var helmet_1 = __importDefault(require("helmet"));
var bookCRUD = __importStar(require("./models/bookscrud"));
dotenv.config();
if (!process.env.PORT) {
    console.log("Error to get ports");
    process.exit(1);
}
var uri = 'mongodb://127.0.0.1:27017/';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connecting to MONGO");
    }
});
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
var server = app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
var authorisedRoute = express_1.default.Router();
app.use("/product/api", authorisedRoute);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
// Send message for default URL
authorisedRoute.get('/', function (req, res) { return res.send('Welcome to default response of Books CRUD'); });
authorisedRoute.get('/models/bookscrud', bookCRUD.getBooksList);
authorisedRoute.post('/models/bookscrud', bookCRUD.createBook);
authorisedRoute.post('/updateBook', bookCRUD.updateBook);
authorisedRoute.post('/deleteBook', bookCRUD.deleteBook);
