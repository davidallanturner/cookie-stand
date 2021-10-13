'use strict';

console.log('Hello, World');



let SeattleStore = {
 name: 'Seattle'
 , operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am',
  '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 , estimatedCookiesPerHourArr: []
 , minCustomers: 23
 , maxCustomers: 65
 , avgSoldPerHour: 6.3
 , randomNumOfCustomers: function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 }
 , estimatedCookiesPerHour: function () {
  //create a loop for the hours
  for (let i = 0; i < this.operatingHours.length; i++) {
   let answer = `${this.operatingHours[i]}: ${this.randomNumOfCustomers()}`

   //push to estimatedCookiesPerHourArray
   this.estimatedCookiesPerHourArr.push(answer)
   console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
  }
  return
 }
 , updateDOM: function () {
  this.estimatedCookiesPerHour()
  let dom = document.getElementById('domTarget');
  let ulVDOM = document.createElement('ul');
  dom.appendChild(ulVDOM)
  for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
   let liVDOM = document.createElement('li');
   liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
   ulVDOM.appendChild(liVDOM)
  }
  return
 }
}


let TokyoStore = {
 name: 'Tokyo'
 , operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am',
  '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 , estimatedCookiesPerHourArr: []
 , minCustomers: 3
 , maxCustomers: 24
 , avgSoldPerHour: 1.2
 , randomNumOfCustomers: function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 }
 , estimatedCookiesPerHour: function () {
  //create a loop for the hours
  for (let i = 0; i < this.operatingHours.length; i++) {
   let answer = `${this.operatingHours[i]}: ${this.randomNumOfCustomers()}`

   //push to estimatedCookiesPerHourArray
   this.estimatedCookiesPerHourArr.push(answer)
   console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
  }
  return
 }
 , updateDOM: function () {
  this.estimatedCookiesPerHour()
  let dom = document.getElementById('domTarget');
  let ulVDOM = document.createElement('ul');
  dom.appendChild(ulVDOM)
  for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
   let liVDOM = document.createElement('li');
   liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
   ulVDOM.appendChild(liVDOM)
  }
  return
 }
}



let DubaiStore = {
 name: 'Dubai'
 , operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am',
  '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 , estimatedCookiesPerHourArr: []
 , minCustomers: 11
 , maxCustomers: 38
 , avgSoldPerHour: 3.7
 , randomNumOfCustomers: function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 }
 , estimatedCookiesPerHour: function () {
  //create a loop for the hours
  for (let i = 0; i < this.operatingHours.length; i++) {
   let answer = `${this.operatingHours[i]}: ${this.randomNumOfCustomers()}`

   //push to estimatedCookiesPerHourArray
   this.estimatedCookiesPerHourArr.push(answer)
   console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
  }
  return
 }
 , updateDOM: function () {
  this.estimatedCookiesPerHour()
  let dom = document.getElementById('domTarget');
  let ulVDOM = document.createElement('ul');
  dom.appendChild(ulVDOM)
  for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
   let liVDOM = document.createElement('li');
   liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
   ulVDOM.appendChild(liVDOM)
  }
  return
 }
}


let ParisStore = {
 name: 'Paris'
 , operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am',
  '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 , estimatedCookiesPerHourArr: []
 , minCustomers: 20
 , maxCustomers: 38
 , avgSoldPerHour: 2.3
 , randomNumOfCustomers: function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 }
 , estimatedCookiesPerHour: function () {
  //create a loop for the hours
  for (let i = 0; i < this.operatingHours.length; i++) {
   let answer = `${this.operatingHours[i]}: ${this.randomNumOfCustomers()}`

   //push to estimatedCookiesPerHourArray
   this.estimatedCookiesPerHourArr.push(answer)
   console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
  }
  return
 }
 , updateDOM: function () {
  this.estimatedCookiesPerHour()
  let dom = document.getElementById('domTarget');
  let ulVDOM = document.createElement('ul');
  dom.appendChild(ulVDOM)
  for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
   let liVDOM = document.createElement('li');
   liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
   ulVDOM.appendChild(liVDOM)
  }
  return
 }
}




let LimaStore = {
 name: 'Lima'
 , operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am',
  '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 , estimatedCookiesPerHourArr: []
 , minCustomers: 2
 , maxCustomers: 16
 , avgSoldPerHour: 4.6
 , randomNumOfCustomers: function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 }
 , estimatedCookiesPerHour: function () {
  //create a loop for the hours
  for (let i = 0; i < this.operatingHours.length; i++) {
   let answer = `${this.operatingHours[i]}: ${this.randomNumOfCustomers()}`

   //push to estimatedCookiesPerHourArray
   this.estimatedCookiesPerHourArr.push(answer)
   console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
  }
  return
 }
 , updateDOM: function () {
  this.estimatedCookiesPerHour()
  let dom = document.getElementById('domTarget');
  let ulVDOM = document.createElement('ul');
  dom.appendChild(ulVDOM)
  for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
   let liVDOM = document.createElement('li');
   liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
   ulVDOM.appendChild(liVDOM)
  }
  return
 }
}

SeattleStore.updateDOM();
TokyoStore.updateDOM();
DubaiStore.updateDOM();
ParisStore.updateDOM();
LimaStore.updateDOM();