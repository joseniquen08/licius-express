"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientService = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const createAny_1 = require("../../shared/factory/createAny");
const client_models_1 = require("../entity/models/client.models");
const createClientService = (clientRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, createAny_1.createAny)(client_models_1.ClientModel)(clientRequest);
        return client;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
    }
});
exports.createClientService = createClientService;
