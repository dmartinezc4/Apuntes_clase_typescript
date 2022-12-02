export type User= {
    id: string,
    username: string,
    password: string,
    email: string
}

export enum Status{
    not_started= "not_started" ,
    started= "started" ,
    finished= "finished"
}

export type Match = {
    id: string,
    team1: Team,
    team2: Team,
    goalst1: number,
    goalst2: number,
    status: Status,
    time: number
}
export type Team = {
    id: string,
    out: boolean,
    name: string,
    players: string[]
    gf: number,
    gc: number,
    points: number,
    played: Match[]
}