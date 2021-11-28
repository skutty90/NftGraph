import { gql } from "apollo-server-express";

export const typeDefs = gql`

input TokenWhere {
    tokenId: String!
 }

type Attributes {
    id: ID!
    name: String!
    icon: String!
    description: String!
 }

type Metadata {
    "Registered Id of particular token in single cohort."
    id: ID!
    tokenId: String!
    name: String!
    icon: String!
    attributes: Attributes!
    extraLink: String!
 }`;
