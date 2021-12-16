"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBooks = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
exports.schemaBooks = new mongoose_1.Schema({
    isbn: { type: Number, required: false },
    bookTitle: { type: String, required: false },
    bookAuthor: { type: String, required: false },
    bookDescription: { type: String, required: false },
    bookEdition: { type: Number, required: false },
    bookPublisher: { type: String, required: false },
    bookPages: { type: Number, required: false },
    isHardcover: { type: Boolean, required: false },
});
var booksMongooseModel = mongoose_2.default.model("booksMongooseModel", exports.schemaBooks);
exports.default = booksMongooseModel;
