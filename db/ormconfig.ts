import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";
import { Metadata } from "./entity/Metadata";
import fs from "fs";

// config
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// client options
type ClientOptions = ConnectionOptions;

var sslConfig;
if (process.env.NODE_ENV === "localhost") {
   sslConfig = null;
} else {
   sslConfig = "Test";
}
const clientOps: ClientOptions = {
   type: "postgres",
   host: String(process.env.DB_HOSTNAME),
   port: Number(process.env.PORT),
   username: String(process.env.DB_USERNAME),
   password: String(process.env.DB_PASSWORD),
   database: String(process.env.DB_NAME),
   synchronize: false,
   logging: false,
   entities: [Metadata],
   migrations: [`${process.env.PWD}/db/migrations/*.ts`],
   cli: {
      entitiesDir: `./db/entities`,
      migrationsDir: `./db/migrations`,
   },
   //logNotifications: true,
  // ssl: sslConfig,
   name: "NFT",
};

export default clientOps;