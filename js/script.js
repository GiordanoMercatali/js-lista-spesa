const shoppingList = ["mozzarella", "fish", "pasta", "ketchup"];
console.log(shoppingList);

let listString = "";
let i = 0;

while (i < shoppingList.length){
        const curItem = shoppingList[i];
        listString += `<li>${curItem}</li>`;
        i++;
}

document.querySelector("ul").innerHTML = listString;