import { Resolver, Query, Mutation, Arg} from "type-graphql";
import { NFT1 } from '../models/user';
import { CreateNFTInput } from '../inputs/create_user_input';

@Resolver()
export class UserResolver {

  @Mutation(() => NFT1)
  async createNFT(@Arg("data") data: CreateNFTInput) {
  const nft1 = NFT1.create(data);
  await nft1.save();
  return nft1;
  }

  @Query(() => [NFT1])
  users() {
    return NFT1.find();
  }


}

