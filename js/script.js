// const shoppingList = ["mozzarella", "fish", "pasta", "ketchup"];
const shoppingList = [];
console.log(shoppingList);

let listString = "";
let i = 0;
let j = 0;
let listLength;

do{
    listLength = parseInt(prompt("How many items do you have to buy?"));
    if(!isNaN(listLength) && listLength != 0){
        j++;
    }

}while(j < 1)
console.log(listLength);

// while (i < shoppingList.length){
    while (i < listLength){
        let curItem = prompt("Which items do you have to buy?");
        // const curItem = shoppingList[i];
        listString += `<li>${curItem}</li>`;
        i++;
}

document.querySelector("ul").innerHTML = listString;