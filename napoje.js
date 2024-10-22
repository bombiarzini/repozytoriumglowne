//task1
let napoj={
    nazwa: "Napoj orzezwiajacy",
    objętość: 500,
    cena: 3.20
};g


//task2
let napoje=[
    {  nazwa: "Cisowianka",
        objętość: 1000,
        cena: 2.20
    },
    {  nazwa: "Oranzada",
        objętość: 300,
        cena: 5.30
    },
    {  nazwa: "Coca Cola",
        objętość: 250,
        cena: 6.90
    }
];
console.log("Dlugosc tablicy: ", napoje.length)

//task3
function dane(napooj)
{
    console.log(napooj);
}
dane(napoj);
//task4

napoje.push(napoj)
console.log(napoje)

//task5
console.log("___________________________")
let kopiatablicy =  [...napoje]
console.log(kopiatablicy)
kopiatablicy.pop()
console.log("Dlugosc tablicy: ", kopiatablicy.length)
console.log("Dlugosc tablicy: ", napoje.length)

//task6



