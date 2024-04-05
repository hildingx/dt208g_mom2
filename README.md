# DT208G - Moment 2
## Att-göra-lista-applikation

Initierat projektet med npm och parcel.
Skapat ts-filer som transpileras till js mha parcel. 

Skapat scaffoldingen (nytt ord jag fick lära mig) vilket omfattar nödvändiga configfiler och katalogstruktur.

Skapat en interface.ts med ett interface som lägger grunden för hur datastrukturen i projektet ska se ut. Den fungerar som en mall för strukturen till objekten samt deras datatyper.
Här skapades egenskaperna task, completed och priority. Dessa typades med lämplig datatyp.

Interface.ts exporteras och importeras till todolist.ts som innehåller en definierad klass för projektet.

I todolist.ts skapades klassen ToDoList som hanterar en lista med att göra-uppgifter med konstruktor och metoder för att lägga till, markera som slutförd och spara/ladda från localstorage. 

I konstruktorn skapas en tom array med struktur definerad från interfacet. I konstruktorn laddas också data från local storage in i arrayen. Därefter följer metoder för at lägga till ny uppgift som ett objekt i arrayen, markera uppgift som slutförd, lagra data i localstorage samt hämta data från localstorage.

I main.ts importerades sedan klassen och av den skapades en instans/objekt som har tillgång till klassens metoder. 

Händelselyssnare skapades vid submit av formulär som bland annat kör en funktion som skriver ut listan i DOM. Metoderna från klassen används för att lägga till ny uppgift i arrayen, markera uppgift som slutförd, returnear lista med alla ToDo-objekt, ladda och spara från local storage.
En liten funktion lades till som tar emot ett argument (prioritetsvärde 1, 2 eller 3) och returnernar en textsträng (hög, medel eller låg).

**Av: Alexander Hilding**