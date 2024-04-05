//Definiera struktur för objekten hanterade av ToDoList-klassen
export interface ToDo {
    task: string;           //Beskrivning av uppgift som ska utföras 
    completed: boolean;     //Uppgift avklarad eller ej
    priority: 1 | 2 | 3;    //Prioritetsnivå på inlagd uppgift.
}