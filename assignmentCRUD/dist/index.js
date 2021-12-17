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
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var helmet_1 = __importDefault(require("helmet"));
var bookCRUD = __importStar(require("./models/bookscrud"));
//RUN SERVER 
var app = (0, express_1.default)();
if (!8080) {
    console.log("Error to get ports");
    process.exit(1);
}
var PORT = 8080;
app.listen(PORT, function () {
    console.log("Server running on port 8080");
});
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// DB CONNECTION
var uri = 'mongodb://host.docker.internal:27017/mongodatabase';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MONGO");
    }
});
// ROUTES
var authorisedRoute = express_1.default.Router();
app.use("/api", authorisedRoute);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
authorisedRoute.get('/', function (req, res) { return res.send('Welcome to Books CRUD...'); });
authorisedRoute.get('/getbookslist', bookCRUD.getBooksList);
authorisedRoute.post('/createbook', bookCRUD.createBook);
authorisedRoute.patch('/updateBook', bookCRUD.updateBook);
authorisedRoute.delete('/deleteBook', bookCRUD.deleteBook);
