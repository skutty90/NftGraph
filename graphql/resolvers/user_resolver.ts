import { Resolver, Query, Mutation, Arg} from "type-graphql";
import { NFT } from '../../db/entity/Nft';
import { CreateNFTInput } from '../../backend/src/inputs/create_user_input';

@Resolver()
export class NftResolver {

  @Mutation(() => NFT)
  async createNFT(@Arg("data") data: CreateNFTInput) {
  const nft1 = NFT.create(data);
  await nft1.save();
  return nft1;
  }

  @Query(() => [NFT])
  nft() {
    return NFT.find();
  }


}

