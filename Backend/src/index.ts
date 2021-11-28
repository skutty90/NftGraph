import 'reflect-metadata';
import { appBoot } from "../../db/createConnection";
import { logger } from "../../log";

async function main() {

}

appBoot().then(() => {
   logger.info(`All Scripts will be run after 10 seconds`);
   setTimeout(async () => {
      await main();
   }, 10000);
});