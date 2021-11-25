import 'reflect-metadata';
import { appBoot } from "../../db/createConnection";
import { logger } from "../../log";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { NftResolver } from '../../graphql/resolvers/user_resolver';

async function main() {

   const schema = await buildSchema({
      resolvers: [NftResolver]
    });
  
    const server = new ApolloServer({ schema });
    await server.listen(8050);
  
    console.log('Server started at port ::8050');

}

appBoot().then(() => {
   logger.info(`All Scripts will be run after 10 seconds`);
   setTimeout(async () => {
      await main();
   }, 10000);
});