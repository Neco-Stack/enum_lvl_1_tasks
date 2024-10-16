type Pizza= {
    size: PizzaSize[]; 
    ingredients: PizzaIngredients[];
}

enum PizzaSize {
    Small, 
    Medium, 
    Large, 
    Familie
}
enum PizzaIngredients {
    Cheese,
    Onion, 
    Salami, 
    Putenformschinken, 
    Mais, 
    Rindercarpaccio
}
// ?oben haben wir eine type und enums erstellt 
// TODO jetzt erstellen wir 4 objects 
const maisPutenSpecial: Pizza = {
    size: [PizzaSize.Medium],
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Putenformschinken]
};
const onionCheesSpecial: Pizza = {
    size: [PizzaSize.Small],
    ingredients: [PizzaIngredients.Onion, PizzaIngredients.Salami]
}
const rinderCarpaccioSpeciale: Pizza = {
    size: [PizzaSize.Familie],
    ingredients: [PizzaIngredients.Cheese]
}
console.log(onionCheesSpecial);
console.log(rinderCarpaccioSpeciale);
console.log(maisPutenSpecial);
