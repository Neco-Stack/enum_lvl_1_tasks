// wir erstellen ein enum für die wochentage 
enum Weekday {
    Monday, 
    Tuesday,
    Wednesday, 
    Thursday,
    Friday,
    Saturday,
    Sunday
}
// wir erstellen ein enum für die monatstage 
enum Monate {
    January, 
    February,
    March, 
    April, 
    May, 
    June, 
    July, 
    August, 
    September, 
    October, 
    November, 
    December
}
console.log(Monate);
// wir zeigen die wochentage an 
// console.log("monday", Weekday[Weekday.Monday]);
// console.log("monday", Weekday[Weekday.Tuesday]);
// console.log("monday", Weekday[Weekday.Wednesday]);
// console.log("monday", Weekday[Weekday.Thursday]);
// console.log("monday", Weekday[Weekday.Friday]);
// console.log("monday", Weekday[Weekday.Saturday]);
// console.log("monday", Weekday[Weekday.Sunday]);
// // wir zeigen die jahrestage an 
// console.log(Monate[Monate.January]);
// console.log(Monate[Monate.February]);
// console.log(Monate[Monate.March]);
// console.log(Monate[Monate.April]);
// console.log(Monate[Monate.May]);
// console.log(Monate[Monate.June]);
// console.log(Monate[Monate.July]);
// console.log(Monate[Monate.August]);
// console.log(Monate[Monate.September]);
// console.log(Monate[Monate.October]);
// console.log(Monate[Monate.November]);
// console.log(Monate[Monate.December]);
// // jetzt wenden wir einen for..in loop an, weil einfacher und schneller 
// console.clear()
for (let day in Weekday) {
    if (typeof day === 'string'){
        console.log(`${day}: ${Weekday[day]}`);
        
    }
}
// jetz wenden wir eine for...in schleife für die monate an 
for (let month in Monate){
    if(typeof month === 'string'){
        console.log(`${month}: ${Monate[month]}`)
    }
}
// wir sparen sehr viele zeilen und gebe alle enums an 
// noch einfacher und sinnvoler ist die anwendung einer for schleife 
for (let key in Weekday){
    console.log(key);
}
for (let key in Monate){
    console.log(key);
}


