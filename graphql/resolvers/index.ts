import { logger } from "../../log";
import {getMetadata} from "../graph-helpers";

export const resolvers = {
  Query: {
    getMetadata: async (_parent: any, args: { where: { tokenId: any; }; }, _context: any, _info: any) => {
      try {
        const { tokenId } = args.where;
        return await getMetadata(tokenId);
      } catch (err) {
        logger.error(
            `GET_METADATA:: Metadata derivation failed please try again. reason ${err}`
        );
        throw new Error(
            `GET_METADATA:: Metadata derivation failed please try again. reason ${err}`
        );
      }
    }

  }
}