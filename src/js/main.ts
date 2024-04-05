import { ToDoList } from './todolist';

//Instans skapad av den importerade klassen
const toDoList = new ToDoList();

//Deklarerar variabler för hämtning av DOM-element.
const form = document.getElementById('toDoForm') as HTMLFormElement;
const input = document.getElementById('toDoInput') as HTMLInputElement;
const prioritySelect = document.getElementById('prioritySelect') as HTMLSelectElement;
const todoListEl = document.getElementById('toDoList') as HTMLUListElement;

//Händelselyssnare vid sumbit av formulär
form.addEventListener('submit', (event) => {
  //Hindrar sidan att ladda om vid submit
  event.preventDefault();

  //Hämtar värde från input
  const task = input.value;
  //Konvertera sträng till nummer samt säkerställ att det är 1,2 eller 3.
  let priority = Number(prioritySelect.value) as 1 | 2 | 3;

  //Kontrollera om metod returnerar true
  if (toDoList.addToDo(task, priority)) {
    //Rensa textfält
    input.value = '';
    //Kör funktion som uppdaterar DOM med data från array
    updateToDoList();
  }

  //Kör metod för att spara i localstorage
  toDoList.saveToLocalStorage();
});

//Funktion för att uppdatera DOM med data från ToDoList-arrayen
function updateToDoList() {
  // Rensa befintliga todos
  todoListEl.innerHTML = '';

  //Hämta array med objekt 
  const toDos = toDoList.getToDos();

  //Itererar över varje objekt för att skapa och visa i DOM
  toDos.forEach((toDo, index) => {
    //Skapa listelement
    const toDoItem = document.createElement('li');
    
    //Skapa p-element och hämtar data från task och infogar detta
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = toDo.task;
    taskParagraph.classList.add('p-task');
    toDoItem.appendChild(taskParagraph);

    //Skapa p-element och hämtar data från priority och infogar detta
    const priorityParagraph = document.createElement('p');
    //Använder funktion för att returnera textsträng hög, medel eller låg
    priorityParagraph.textContent = `Prioritet: ${priorityText(toDo.priority)}`;
    priorityParagraph.classList.add('p-priority');
    toDoItem.appendChild(priorityParagraph);
    
    //Skapa en "Slutförd"-knapp
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Slutförd';
    completeButton.classList.add('button', 'complete-btn');

    toDoItem.appendChild(completeButton);

    todoListEl.appendChild(toDoItem);

    //Lägg till en eventlyssnare på knappen
    completeButton.addEventListener('click', () => {
        //Kör metod som sätter true på vald uppgift
        toDoList.markToDoCompleted(index);
        //Kör metod som sparar till localstorage
        toDoList.saveToLocalStorage();
        updateToDoList();
    });

    //Kontrollerar om toDo är completed -> lägger till class för css-stilar
    if (toDo.completed) {
      taskParagraph.classList.add('completed');
      priorityParagraph.classList.add('completed');
    }
  });
}

//Funktion med argument 1,2 eller 3 för att returnera en textsträng 
function priorityText(priority) {
  switch (priority) {
      case 1: return 'Hög';
      case 2: return 'Medel';
      case 3: return 'Låg';
      default: return 'Okänd';
  }
}

//Anropa funktionen när allting laddats klart på sidan
document.addEventListener('DOMContentLoaded', (event) => {
  updateToDoList();
});