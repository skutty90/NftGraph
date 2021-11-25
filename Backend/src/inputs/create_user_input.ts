import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateNFTInput {
  @Field()
  metadata: string;

  @Field()
  nftimage: string;

  @Field()
  erc20addr: string;

  @Field()
  erc20amount: number;

  @Field()
  collectionaddr: string;

  @Field()
  ordertype: string;

}