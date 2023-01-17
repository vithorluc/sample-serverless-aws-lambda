"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnectionConfig = void 0;
var env_1 = require("../../config/env");
exports.databaseConnectionConfig = {
    type: env_1.env.databaseType || "postgres",
    host: env_1.env.databaseHost,
    port: env_1.env.databasePort,
    schema: env_1.env.databaseSchema,
    username: env_1.env.databaseUser,
    password: env_1.env.databasePassword,
    database: env_1.env.database,
    entities: [".src/infrastructure/persistence/entities/*.ts"],
    migrations: [".src/infrastructure/persistence/migrations/*.ts"],
    repositories: [".src/infrastructure/persistence/repositories/*.ts"],
};
//# sourceMappingURL=databaseConectionConfig.js.map