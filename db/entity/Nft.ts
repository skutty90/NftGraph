import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';


@ObjectType()
@Entity()
export class NFT extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
  metadata: string;

  @Column("varchar")
  nftimage: string;

  @Column("varchar")
  erc20addr: string;

  @Column("numeric")
  erc20amount: number;

  @Column("string")
  collectionaddr: string;

  @Column("string")
  ordertype: string;

}