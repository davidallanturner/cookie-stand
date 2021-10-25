'use strict';

// console.log('Hello, World');
let operatingHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
  '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


function Store(name, minCust, maxCust, avg) {
  this.storeName = name;
  this.minimum = minCust;
  this.maximum = maxCust;
  this.avg = avg;

  this.randomNumOfCustomers = function () {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1) + this.minimum);
  };

  this.estimatedCookiesPerHourCreator = function () {
    let storeCookiesArray = [];
    for (let i = 0; i < operatingHours.length; i++) {
      let currentObject = {};
      currentObject.hour = operatingHours[i];
      currentObject.customers = this.randomNumOfCustomers();
      currentObject.cookies = Math.ceil(currentObject.customers * this.avg);
      storeCookiesArray.push(currentObject);
    }
    return storeCookiesArray; // [{hour: 12AM, customers: 33, cookies: 250}...]
  };

  this.estimatedCookiesPerHour = this.estimatedCookiesPerHourCreator();


  this.getRowTotal = function () {
    let totalStoreCookies = 0;
    for (let i = 0; i < this.estimatedCookiesPerHour.length; i++) {
      totalStoreCookies += this.estimatedCookiesPerHour[i].cookies;
    }
    return totalStoreCookies;
  };

  this.totalStoreCookies = this.getRowTotal();

  this.updateDOM = function () {
    let tableBody = document.querySelector('tbody');
    //crud a body FIRST NAME THEN HOURS
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);

    //TR Name - Column 1
    let tableName = document.createElement('td');
    tableName.innerText = this.storeName;
    tr.appendChild(tableName);

    for (let i = 0; i < this.estimatedCookiesPerHour.length; i++) {

      //{hr,cust,cookies} but only need cookies for this itteration, just good to have customer info for later in case we need it.
      let hourlyTD = document.createElement('td');
      hourlyTD.setAttribute('class', 'a' + this.estimatedCookiesPerHour[i].hour);

      hourlyTD.innerText = this.estimatedCookiesPerHour[i].cookies;
      tr.appendChild(hourlyTD);
    }

    let rowTotal = document.createElement('td');
    rowTotal.innerText = this.totalStoreCookies;
    tr.appendChild(rowTotal);
  };
}


//CREATE A TABLE HEAD HERE!//
function createTableHead() {
  //let tableBody = document.getElementsByTagName('tbody');
  let thead = document.querySelector('thead');

  let headTR = document.createElement('tr');
  thead.appendChild(headTR);

  let tHeadName = document.createElement('th');
  tHeadName.innerText = 'Store Name: ';
  headTR.appendChild(tHeadName);

  for (let i = 0; i < operatingHours.length; i++) {
    //let tHeadHour = document.createElement('th');
    let hourTD = document.createElement('td');
    hourTD.innerText = operatingHours[i];
    headTR.appendChild(hourTD);

  }

  let tHeadTotal = document.createElement('td');
  tHeadTotal.innerText = 'Site Totals';
  headTR.appendChild(tHeadTotal);


}


createTableHead();
let seattleStore = new Store('Seattle', 23, 63, 6.3);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);

seattleStore.updateDOM();
tokyoStore.updateDOM();
dubaiStore.updateDOM();
parisStore.updateDOM();
limaStore.updateDOM();




//create new element by updating the form
let subBtn = document.getElementById('submitter');

let newStoreFunction = function () {
  // console.log('bang');
  let storeName = document.getElementById('storeName');
  let minCustomers = document.getElementById('minCustomers');
  let maxCustomers = document.getElementById('maxCustomers');
  let averageCookies = document.getElementById('averageCookies');

  if (storeName.value === '' || minCustomers.value.length < 1 || maxCustomers.value.length < 1 || averageCookies.value.length < 1 ){
    console.log('storeName:' + storeName, 'typeof:' + typeof minCustomers);
    return;
  }

  console.log('adding the values of: ' + storeName.value, minCustomers.value, maxCustomers.value, averageCookies.value );

  let newStore = new Store(storeName.value, minCustomers.value, maxCustomers.value, averageCookies.value);

  //target the footer and remove it
  let totalRow = document.getElementById('totals');
  totalRow.remove();

  //append new row
  newStore.updateDOM();
  createTableFoot();

  storeName.value = '';
  minCustomers.value = '';
  maxCustomers.value = '';
  averageCookies.value = '';

};

subBtn.addEventListener('click', newStoreFunction);










//CREATE A TABLE FOOT HERE!//

function createTableFoot() {
  //target tfoot
  let tfoot = document.querySelector('tfoot');

  let tfootTR = document.createElement('tr');
  tfootTR.id = 'totals';
  tfoot.appendChild(tfootTR);

  let tfootStart = document.createElement('td');
  tfootStart.innerText = 'Needed Per Hour';
  tfootTR.appendChild(tfootStart);

  //Practice scraping!! B/C why not!!
  for (let i = 0; i < operatingHours.length; i++) {
    console.log(operatingHours[i]);
    //https://stackoverflow.com/questions/34777481/failed-to-execute-query-selector-on-document-id-is-not-a-valid-selector/34777644
    //HTML5 is supposed to do it, but NNNNOOOOO...
    let targetlist = document.querySelectorAll('.a' + operatingHours[i]);
    //console.log(targetlist[1].innerText);
    let totalHourCookies = 0;

    for (let j = 0; j < targetlist.length; j++) {
      totalHourCookies += parseInt(targetlist[j].innerHTML);
      console.log(totalHourCookies);
    }

    let totalPerHrTD = document.createElement('td');
    totalPerHrTD.innerText = totalHourCookies;

    tfootTR.appendChild(totalPerHrTD);
  }

  let dummyTD = document.createElement('td');
  tfootTR.appendChild(dummyTD);
}

createTableFoot();













// let SeattleStore = {
//   name: 'Seattle'

//   , estimatedCookiesPerHourArr: []
//   , estimatedCookiesPerHourRaw: 0
//   , minCustomers: 23
//   , maxCustomers: 65
//   , avgSoldPerHour: 6.3

//   , randomNumOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//   }

//   , estimatedCookiesPerHour: function () {
//     //create a loop for the hours
//     for (let i = 0; i < operatingHours.length; i++) {
//       let answerNum = `${this.randomNumOfCustomers()}`;
//       this.estimatedCookiesPerHourRaw += answerNum

//       console.log(answerNum)
//       let answer = `${this.operatingHours[i]}: ${answerNum}`;

//       //push to estimatedCookiesPerHourArray
//       this.estimatedCookiesPerHourRaw += answerNum;
//       this.estimatedCookiesPerHourArr.push(answer)
//       console.log('i: ' + i, 'Random: ' + answer, 'estimatedCookiesPerHourArr: ' + this.estimatedCookiesPerHourArr)
//     }
//     return
//   }

//   ,  updateDOM: function () {
//     this.estimatedCookiesPerHour()
//     let dom = document.getElementById('domTarget');
//     let ulVDOM = document.createElement('ul');
//     ulVDOM.textContent = this.name
//     dom.appendChild(ulVDOM)



//     for (let j = 0; j < this.estimatedCookiesPerHourArr.length; j++) {
//       let liVDOM = document.createElement('li');
//       liVDOM.textContent = this.estimatedCookiesPerHourArr[j]
//       ulVDOM.appendChild(liVDOM)
//     }
//     let liVDOM = document.createElement('li');
//     liVDOM.textContent = `Total: ${this.estimatedCookiesPerHourRaw}`;
//     ulVDOM.appendChild(liVDOM);

//     return
//   }
// }

// SeattleStore.updateDOM();
// TokyoStore.updateDOM();
// DubaiStore.updateDOM();
// ParisStore.updateDOM();
// LimaStore.updateDOM();




