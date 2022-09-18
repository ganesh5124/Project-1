// // "use strict";
// // const model = document.querySelector(".model");
// // const overlay = document.querySelector(".overlay");
// // const btnCloseModel = document.querySelector(".close-model");
// // const btnOpenModel = document.querySelectorAll(".show-model");

// // const openModel = function () {
// //   model.classList.remove("hidden");
// //   overlay.classList.remove("hidden");
// // };

// // const closeModel = function () {
// //   model.
// //   classList.add("hidden");
// //   overlay.classList.add("hidden");
// // };

// // for (let i = 0; i < btnOpenModel.length; i++)
// //   btnOpenModel[i].addEventListener("click", openModel);

// // btnCloseModel.addEventListener("click", closeModel);

// // overlay.addEventListener("click", closeModel);

// // document.addEventListener("keydown", function (e) {
// //   if (e.key === "Escape" && !model.classList.contains("hidden")) {
// //     closeModel();
// //   }
// // });



// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderPasta:function(ing1,ing2,ing3){
//     console.log(`Here is your declicious pasta with ${ing1} ,${ing2},${ing3}`);},
//   orderPizza:function(minIngrident, ... otheringredient){
//     console.log(minIngrident);
//     console.log(otheringredient);
//   }

// };


//  const arr =[7,8,9];
//  const newarr = [1,2,3,...arr];
// console.log(newarr);
// console.log(...newarr);
// console.log(1,2,7,8,9);

// const newMenu =[...restaurant.mainMenu,'ll'];
// console.log(newMenu);

// const copyArray = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(copyArray);

// const str = "Ganesh";

// const letters = [...str,' ','.S'];
// console.log(letters);
// console.log(...str);
 
// // const ingredients = [
// //   prompt("Lets make dish Ingredient 1"),
// //   prompt("Ingredient 2"),
// //   prompt("Ingredient 3"),
// // ]

// //console.log(ingredients);


// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// // restaurant.orderPasta(...ingredients);


// const newRestrauant = {foundedIn:1998,...restaurant,founder:"Ganesh"}

// console.log(newRestrauant);

// // const restaurantCopy = {...restaurant};
// // console.log(restaurantCopy);
// console.log(restaurant);

// const restaurantCopy ={...restaurant};
// restaurantCopy.name = 'Roma';
// console.log(restaurantCopy.name);

// const arr2 = [1,2,3, ...[3,4]];

// const add =function(...numbers){
//   console.log(numbers);
//   let sum =0;
//   for(let i=0;i<numbers.length;i++)
//   sum=sum+numbers[i];

//   console.log(sum);

// };
// add(2,4);
// add(4,6,7,7);

// restaurant.orderPizza("nkdncdknd",'mcnmadnadsm','ncncacnac','bcdbnccdc')
// restaurant.orderPizza("mushroom");

// // AND and OR operators
// //use any data type, return any data type, thats called shortcircuiting
 
// console.log(3|| "Ganesh");
// console.log(''|| "Ganesh");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined ||0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 2;

// const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
// console.log(guests1);

// const guests2 = restaurant.numGuests ||10;
// console.log(guests2);


// console.log("..........AND.......");
// console.log(0 && 'Jonas');
// console.log(8 && 8);

// console.log('Hello' && 23 && ' ' && null && undefined);

// if(restaurant.orderPizza){
//   restaurant.orderPizza("mushroom","burger","slice");
// }
// restaurant.orderPizza && restaurant.orderPizza("mushroom","burger","slice");
// restaurant.numGuest =50;
// const guests = restaurant.numGuest||10;
// console.log(guests);
// // ?? nulliesh Coalescing operator null and undefined (Not 0 or '')
// const guestcorrect =restaurant.numGuest ?? 10;
// console.log(guestcorrect);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu.entries()) {
//   console.log(menu);
  
// }
// const arr3 = [4,6,7,8];
// for (const item of arr3) {
//   console.log(item);
// }
// for (const [i,el] of menu.entries()) {
//   console.log(`${i+1}:${el}`);
  
// }

// // We're building a football betting app (soccer for my American friends 😅)!

// // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. 
// // So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// // GOOD LUCK 😀
// // */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };



// // 1
// const [players1,players2]  = game.players;
// console.log(players1,players2);
// // 2
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1,fieldPlayers1);
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2,fieldPlayers2);
// // 3
// const allPlayers =[...players1,...players2];
// console.log(allPlayers);

// // 4
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. 
// // So create a new array ('players1Final') containing all the original team1 players 
// // plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const od = game.odds;
// console.log(od);

// const { odds:{team1,x:draw,team2},
// }=game;
// console.log(team1,draw,team2);

// // 6
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
// // prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals =function(...players){
//   console.log(players);
//   console.log(`number of player names passed in ${players.length}`);
// }

// printGoals(...game.scored);
// // 7
// team1>team2 && console.log(`Team 1 is more likely to win`);
// team1<team2 && console.log(`Team 2 is more likely to win`);

// const person ={
//   name: "Dome",
//   age: 30,
 
//   vehicle: {
//     year:2022,
//     warrenty :{
//       experydate: 20330,
//     },
//     drives(){
//       return `Iam eligible to drive because my age is ${person.age}`;
//     }
//   }
// }

// // const vehicleYear =person.vehicle? person.vehicle.year:"Not Present";
// const vehicleYear = person.vehicle?.year;
// const warrentExpertDate = person.vehicle?.warrenty?.experydate;
// console.log(warrentExpertDate);


// const drive = person.vehicle?.drives?.();
// console.log(drive);

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// let openstr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openstr +=` ${day}`;
//   console.log(openstr);
// }
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, {open,close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close ${close}`);
  
// }

// const user ={
//   fname :'John',
//   email: 'john@gmail.com',
//   age:34,
//   active: true 
// }
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// const courses = {
//   java: 10,

//   javascript: 55,

//   nodejs: 5,

//   php:0
// };

// const keys = Object.entries(courses);
// console.log(keys);
// for (const item of keys) {
//   console.log(item);
// }
// for (const [key,value] of Object.entries(courses)) {
//   console.log(`${key} : ${value}`);
// }

// // Let's continue with our football betting app!
// // 1. Loop over the game.scored array and print each player name to the console, 
// // along with the goal number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it to the console
// //  (We already studied how to calculate averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }
// // GOOD LUCK 😀
// // */
// const ssc = game.scored;
// console.log(ssc);
// for (const [key,value] of ssc.entries()) {
//   console.log(`Goal ${key+3}:  ${value}`);
// }

// // const odd = game.odds;
// // const oddValues = game?.odds?.values?.();
// // console.log(oddValues);
// let avg =0;

// // console.log(len);
// const ll = Object.values(game.odds);
// avg =0;
// for (const odd of ll)
//     avg +=odd;
//     avg /= ll.length;
//     console.log(avg);
// for (const [team,odd] of Object.entries(game.odds)) {
//   const teamStr = team ==='x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd of ${teamStr} ${odd}`);
// }

// const orderSet = new Set(['pizza','burger','pizza','burger','samosa','samosa']);
// console.log(orderSet.add('Yummy'));
// console.log(orderSet.add('Yummy'));
// console.log(orderSet.delete('Yummy'));
// console.log(orderSet);
// for (const order of orderSet) 
//   console.log(order);

// const rest = new Map();
// rest.set("name","Ganesh");
// rest.set(1,2);
// rest.set(2,2);
// rest.set(3,2);
// console.log(rest);
// console.log(rest.values());
// rest.set('categories',['italian','pdksdj','jskjsakd'])
// .set('open',11)
// .set('close',20)
// .set(true, "we are open ")
// .set(false,"we are closed");
// console.log(rest);
// console.log(rest.get(1));
// console.log(rest.get('categories'));

// const time =14;
// console.log(rest.get(time>rest.get("open") && time<rest.get("close")));
// console.log(rest.has("categories"));
// console.log(rest);
// console.log(rest.delete("categores"));
// console.log(rest);
// // rest.clear();
// console.log(rest.delete("categories"));
// console.log(rest);
// console.log(rest.size);
// const arr4 = [1,2];
// rest.set(arr4,"test");
// console.log(rest.get(arr4));

// rest.set(document.querySelector('h1'),"heading");

// console.log(rest);

// const ques = new Map([
//  ["question","What is the best Progm language"],
//  [1,"C"],
//  [2,"Java"],
//  [3,"Javascript"],
//  ["correct",3],
//  [true,"correct"],
//  [false,"Try Again"],]
//  );
//  console.log(ques.get(true));

// console.log(Object.entries(restaurant.openingHours));

// const hoursMap = new Map(Object.entries(restaurant.openingHours))

// console.log(hoursMap);
// console.log(ques.get('question'));
// for (const [key , value] of ques) {
//     if(typeof key ==="number")
//      console.log(`Answer is ${key} :${value}`);
// }

// // const Answer = Number(prompt("Your Answer is "));
// // console.log(`The answer is ${Answer}`);

// // console.log(ques.get(ques.get("correct") === Answer));

// console.log(...ques);
// console.log(...ques.keys());
// console.log(...ques.values());

// const announcement =`All passengers come to boarding door 23. Boarding door 23!`;
// console.log(announcement.replaceAll('door','gate'));
// const [firstName,lastName] = 'Jonas Schmdfknk'.split(' ');
// console.log(firstName,lastName);
// const newName = [ 'Mr.', firstName,lastName.toUpperCase()].join("9");
// console.log(newName);


// // console.log(``.captialize());

// const captialize = function(captName){
//   const name1 = captName.split(" ");
//   const nameUpper = [];
//   for (const n of name1) {
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    
//   }
//   console.log(nameUpper.join(" "));
// }
// captialize("hey they is children going on");

// captialize(`objects also give different results when using eval().`)


// // Padding
// const message = 'jonas';
// console.log(message.padStart(25,"0").padEnd(40,"jjs"));

// const mastercard = function(number){
//   const str = number.toString();
//   const last = str.slice(-4);
//   return last.padStart(str.length,"*");

// }
// console.log(mastercard(243546789));

// //Repeat
// const flighttime ='all flights are deperature.... please wait for upto 5:00 ';
// console.log(flighttime.repeat(5));

// // Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
// //  The values are the events themselves, and the keys are the minutes in which each event happened 
// // (a football game has 90 minutes plus some extra time).
// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// // 3. Print the following string to the console: "An event happened, on average, 
// // every 9 minutes" (keep in mind that a game has 90 minutes)
// // 4. Loop over the events and log them to the console,
// //  marking whether it's in the first half or second half 
// // (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// // GOOD LUCK 😀
// // */




// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [30, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// console.log(gameEvents);

// // const events1 = [gameEvents];
// const events = gameEvents.values();
// const val2 = new Set(events);

// console.log(val2);
                
// gameEvents.delete(64);
// console.log(gameEvents);

// const time1 = [...gameEvents.keys()].pop();
// console.log(time1);
// console.log(`An event happened, on average, every ${time1/gameEvents.size} minutes`);

// for (const [min,event] of gameEvents) {
//   // const non2 = new Set(non);
//   const half = min <=45 ? 'FIRST': 'SECOND';
//  console.log(`[${half} HALF] ${min} :${event}`);
//   // console.log(`[FIRST HALF] ${non.keys}: ${non.values}`);
//   // console.log(non);
// }




// const copywith = [1,4,5,7,8,67,7,8];
// console.log(copywith.copyWithin(0,3,4));


// // const high5 = function(){
// //   console.log("👏👏👏");
// // }


// //document.body.addEventListener('click',high5);

// //["3","6","jdjdj"].forEach(high5);


// // const greet = function(greetings){
// //   return function(name){
// //     console.log(`${greetings} ${name}`);

// //   }
// // }

// // const grree = greet("hey");
// // const greee= grree("ganesh");
// // console.log(greee);


// const greet = (greetings) =>{
//   return function(name) {
//     console.log(`${greetings} ${name}`);
//   };

// };
// const greetHey = greet('hey');
// greetHey("ganesh");

// const greetR = greetings => name => console.log(`${greetings} ${name}`);

// greetR("Hi")("Ganesh");


// // const lufthansa = {
// //   airline : "Lufthansa",
// //   istacode : "LAD45",
// //   bookings : [],
// //   book(flightNum,name){
// //     console.log(`${name} booked a seat on ${this.airline} flight ${this.istacode} ${flightNum}`);
// //   },
// // };


// //lufthansa.book(238,"Ganesh");
// const lufthansa = {
//   airline : "Lufthansa",
//   istacode : "LAD45",
//   bookings : [],
//   book(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.istacode} ${flightNum}`);
//     this.bookings.push({flight : `${this.istacode} ${flightNum}`});
//   },
  
  
// };


// // lufthansa.book(238,"Ganesh");
// // console.log(lufthansa);
// book = lufthansa.book;
// const euroings = {
//   airline : "Euroings",
//   istacode : "EDF",
//   bookings :[],
// };

// book.call(lufthansa,23,"JOnass");
// console.log(euroings);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer(){
//     // const lol = Number(prompt(`What is your favourite programming language?`));
//     // const lol1 = this.options;
//     // const lol2 = lol1.entries();
//     // for (const [key,value] of lol2) {
//     //   if(lol ===key)
//     //   console.log(`${key}: ${value}`);
//     //   else{
//     //     console.log("Try again");
//     //   }
//     const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(write option number)`));
//     console.log(answer);
//     typeof answer === 'number' && answer<this.options.length && this.answers[answer]++;
//    // console.log(this.answers);
// this.displayResults();
// this.displayResults('string')
//   },
//   displayResults(type = 'array'){
//     if(type==='array'){
//       console.log(this.answers);
//     }
//     else if(type ==='string'){
//       console.log(`Polled Results are ${this.answers.join(', ')}`);
//     }
//   }
//   };
// poll.registerNewAnswer();

// //document.querySelector(".poll").addEventListener('click',poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5,3,4]});

const secureBooking = function(){
  let passengerCount =0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}
const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();
booker();
console.dir(booker);

let f;

const g = function(){
  const a = 23;
  f = function(){
    console.log(a*2);
  }
}

console.dir(g);
console.dir(f);
const  h = function(){
  const b = 555;
   f = function(){
     console.log(b*44);
   }
}


g();
h();
f();
// console.dir(f);

const boardPassengers = function(n,wait){
  const perGroup = n/3;
  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers `);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  },wait * 1000);
  console.log(`we start boardig in ${wait}`);
}
boardPassengers(180,3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'pink';
  });
})();
// slice Method
let ar = ['a','b','c','d','e'];
console.log(ar.slice(3));
console.log(ar.slice(3,4));
// splice Method


























