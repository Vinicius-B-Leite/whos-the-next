import { PlayerType } from "@/types/Player";
import { storage } from "./storage";
import { PLAYERS_KEY } from "./keys";

export function setPlayerStorage(plasyers: PlayerType[]) {
    if (plasyers.length === 0) return
    storage.set(PLAYERS_KEY, JSON.stringify(plasyers))
}

export function getPlayerStorage() {
    const players = storage.getString(PLAYERS_KEY)

    return players ? JSON.parse(players) as PlayerType[] : null
}

export function deletePlayerStorage(player: PlayerType) {
    let allPlayers = getPlayerStorage()
    if (!allPlayers) return null

    const indexOfPlayer = allPlayers.findIndex(p => p.id === player.id)
    allPlayers.splice(indexOfPlayer, 1)
    setPlayerStorage(allPlayers)

    return allPlayers
}