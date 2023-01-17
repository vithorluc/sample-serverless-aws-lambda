import { config } from "dotenv";

config();

export const env = {
  isTest: process.env.NODE_ENV === "test",
  secretAccessToken: process.env.SECRET_TOKEN,
  expiresAccessToken: Number(process.env.ACCESS_TOKEN_EXPIRES_IN),
  secretRefreshToken: process.env.SECRET_REFRESH_TOKEN,
  expiresRefreshToken: Number(process.env.REFRESH_TOKEN_EXPIRES_IN),
  port: Number(process.env.PORT),
  version: process.env.VERSION,

  database: process.env.DATABASE,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseHost: process.env.DATABASE_HOST,
  databaseType: process.env.TEST_DATABASE_TYPE,
  databasePort: Number(process.env.TEST_DATABASE_PORT),
  databaseSchema: process.env.TEST_DATABASE_SCHEMA,
  entities: process.env.DATABASE_ENTITIES,

  testDatabase: process.env.TEST_DATABASE,
  testDatabaseUser: process.env.TEST_DATABASE_USER,
  testDatabasePassword: process.env.TEST_DATABASE_PASSWORD,
  testDatabaseHost: process.env.TEST_DATABASE_HOST,
  testDatabaseType: process.env.TEST_DATABASE_TYPE,
  testDatabasePort: Number(process.env.TEST_DATABASE_PORT),
  testDatabaseSchema: process.env.TEST_DATABASE_SCHEMA,

  notificationBaseURL: process.env.NOTIFICATION_BASE_URL,
};
