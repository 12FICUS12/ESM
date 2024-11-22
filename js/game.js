import Character from './domain.js'; 

export default class Game {
    start() {
        console.log('game started'); 
    }
}

export class GameSavingData {
    // Логика для сохранения данных игры
}

export function readGameSaving() {
    // Логика для чтения сохранений игры
}

export function writeGameSaving() {
    // Логика для записи сохранений игры
}