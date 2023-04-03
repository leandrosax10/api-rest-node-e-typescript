"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const PORT = process.env.PORT || 3333;
Server_1.server.listen(PORT, () => {
    console.log(`App rodando! ${PORT}`);
});
