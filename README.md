Vue Email List
===

## Esercizio 

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

##### Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## JavaScript
- salvare l'API come variabile vue 
- creare una funzione che genera gli indirizzi mail attraverso la libreria axios
    - richiama axios con metodo post e ottieni come risultato la mail
    - cicla 10 chiamate per ottenere mail 10 mail diverser 
    - salva ogni risultato in un array (push)
    - cicla l'array con v-for nell'html nei tag ul li

- 