import { gql } from "graphql_tag";

export const typeDefs = gql`
    type User {
        id: ID !
        username: String!
        password: String!
        email: String!
    }

    Enum Status{
        not_started
        started
        finished
    }

    type Match {
        team1: Team!
        team2: Team!
        id: ID!
        goalst1: Int!
        goalst2: Int!
        status: Status!
        time: Int!
    }
    type Team {
        id: ID!
        out: Boolean!
        name: String!
        players: [String!]!
        gf: Int!
        gc: Int!
        points: Int!
        played: [Match!]!
    }
    type Query {
        getMatches(status:[status!],Team:ID):[Match!]!
        getMatch(id:ID!):Match
        getTeam(id:ID!):Team
        getTeams(out:Boolean,played:Boolean):[Team!]!
    }
    type Mutation {
        addTeam(name: String!, players: [String!]!):Team!
        addMatch(Team1:ID!,Team2:ID!):Match!
        updateMatch(id:ID!,status:Status ,goalst1: Int,goalst2:Int,time:Int ):Match!
    }
`;