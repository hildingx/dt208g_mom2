//Importera interfacet
import { ToDo } from './interface';

//Hanterar en lista med att göra-uppgifter med konstruktor och metoder för att lägga till, markera som slutförd och spara/ladda från localstorage
export class ToDoList {
    //Array som lagrar ToDo-objekt. Strukturen för dessa objekt definieras av ToDo-interfacet.
    toDos: ToDo[];

    //Konstruktorn initierar klassen. Tömmer arrayen, lagrar objekt från localstorage i arrayen.
    constructor() {
        this.toDos = [];
        this.loadFromLocalStorage();
    }

    //Metod för att lägga til ny uppgift i arrayen
    addToDo(task: string, priority: 1 | 2 | 3): boolean {
        //Validera input
        if (!task || priority < 1 || priority > 3) {
            return false;
        }

        //Pusha objekt in i array
        this.toDos.push({ task, completed: false, priority });
        return true;
    }

    //Metod som markerar uppgift som slutförd
    markToDoCompleted(toDoIndex: number): void {
        if (this.toDos[toDoIndex]) {
            this.toDos[toDoIndex].completed = true;
        }
    }

    //Metod som returnerar lista med alla ToDo-objekt
    getToDos(): ToDo[] {
        return this.toDos;
    }

    //Metod som JSON-konverterar arrayen och lagrar i localstorage
    saveToLocalStorage(): void {
        localStorage.setItem('toDos', JSON.stringify(this.toDos));
    }

    //Metod för att hämta data från localstorage och lagra i arrayen
    loadFromLocalStorage(): void {
        const savedToDos = localStorage.getItem('toDos');
        if (savedToDos) {
            this.toDos = JSON.parse(savedToDos);
        }
    }
}