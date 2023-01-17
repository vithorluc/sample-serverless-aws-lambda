"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var typeorm_1 = require("typeorm");
var env_1 = require("../config/env");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env_1.env.databaseHost,
    port: Number(env_1.env.databasePort),
    database: env_1.env.database,
    username: env_1.env.databaseUser,
    password: env_1.env.databasePassword,
    synchronize: false,
    entities: [],
    migrations: [],
});
//# sourceMappingURL=dataSource.js.map