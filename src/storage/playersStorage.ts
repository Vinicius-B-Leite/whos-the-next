import { PlayerType } from "@/types/Player";
import { storage } from "./storage";
import { PLAYERS_KEY } from "./keys";

export function setPlasyers(plasyers: PlayerType[]) {
    storage.set(PLAYERS_KEY, JSON.stringify(plasyers))
}

export function getPlayers() {
    const players = storage.getString(PLAYERS_KEY)

    return players ? JSON.parse(players) as PlayerType[] : null
}