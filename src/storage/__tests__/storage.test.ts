import { deletePlayerStorage, getPlayerStorage, setPlayerStorage } from "../playersStorage"
import { storage } from "../storage"
import { mocks } from "./mocks"

describe('Storage', () => {
    describe('Player Storage', () => {
        describe('setPlayer', () => {
            it('should did nothing when players array prop is empty', () => {
                setPlayerStorage([])

                expect(getPlayerStorage()).toBeNull()
            })
            it('should create player in storage when players array NOT empty', () => {
                setPlayerStorage(mocks.mockPlayers)

                expect(getPlayerStorage()).toEqual(mocks.mockPlayers)
            })
        })
        describe('getPlayerStorage', () => {
            it('should return null when players storage is empty', () => {
                storage.clearAll()
                const playerdStorage = getPlayerStorage()

                expect(playerdStorage).toBeNull()
            })
            it('should return players when players storage is not empty', () => {
                setPlayerStorage(mocks.mockPlayers)
                const playerdStorage = getPlayerStorage()

                expect(playerdStorage).toEqual(mocks.mockPlayers)
            })
        })
        describe('deletePlayerStorage', () => {
            it('should did nothing when players storage is empty', () => {
                storage.clearAll()

                const playersStorageUpdated = deletePlayerStorage(mocks.mockPlayers[0])

                expect(playersStorageUpdated).toBeNull()
            })
            it('should delete players provided', () => {
                setPlayerStorage(mocks.mockPlayers)

                deletePlayerStorage(mocks.mockPlayers[0])

                expect(getPlayerStorage()?.includes(mocks.mockPlayers[0])).toBeFalsy()
            })
        })
    })

})