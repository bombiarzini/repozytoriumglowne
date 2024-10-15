//task1
let wydarzenie
nie={
    title: "Koncert zespołu X",
    date: "2024-06-15",
    location:"Warszawa"
};
console.log(wydarzenie);
//task2

let participant ={};
participant.name = "Kacper",
    participant.email = "ut_4009@zsp3zamosc.pl"
console.log(participant.name);
console.log(participant.email);
//task3
let wydarzenia =[
    {
        title: "Koncert zespołu Y",
            date: "2024-07-20",
                location:  "Kraków"
    },
    {
        title:  "Festiwal Filmowy",
            date: "2024-08-05",
                location: "Gdańsk"
    },
    {
        title:"Wystawa Sztuki",
            date: "2024-09-10",
                location:"Wrocław"
    }
];
//task4
let wydarzenie2={
    title:"Seminarium o JavaScript",
    date: "2024-10-15",
    location:"Łódź"
};

wydarzenia.push(wydarzenie2);
console.log(wydarzenia)

//task5
console.log("zadanie5__________________");
let wydarzenie3=wydarzenia.slice(2,4);
console.log(wydarzenie3);

//task6
wydarzenia.shift()
console.log("Dlugosci tablicy: " + wydarzenia.length)
wydarzenia.forEach(title=> console.log("Nazwa wydarzenia: " + title.title));

//task7
wydarzenia.forEach(date=> console.log("Data wydarzenia: " + date.date));
