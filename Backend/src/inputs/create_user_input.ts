import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateNFTInput {
  @Field()
  metadata: string;

  @Field()
  nftimage: string;
}