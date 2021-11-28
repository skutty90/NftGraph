import { getRepository } from "typeorm";
import { Metadata } from "../db/entity/Metadata";

export const getMetadata = async (tokenId: number) => {
    const metadata = await getRepository(Metadata, "NFT")
       .createQueryBuilder("metadata")
       .where("metadata.tokenId =:tokenId", { tokenId })
       .getMany();
    return metadata;
 };