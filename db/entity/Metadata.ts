import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';


@ObjectType()
@Entity()
export class Metadata extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
  tokenId: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  icon: string;

  @Column("numeric")
  erc20amount: number;

  @Column("string")
  attributes: string;

  @Column("string")
  extraLink: string;

}