'use strict';

// BANKIST APP
let filteredData = null;

function getDateXDaysAgo(numOfDays, date = new Date()) {
  const daysAgo = new Date(date.getTime());

  daysAgo.setDate(date.getDate() - numOfDays);

  return daysAgo;
}

function transaction(amount, from, to, date) {
  this.amount = amount,
  this.from = from,
  this.to = to,
  this.date = date
}

const transaction1 = {
  amount : 9000,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(345)
};

const transaction2 = {
  amount : 13407,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(298)
};
const transaction3 = {
  amount : -6140,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(215)
};

const transaction4 = {
  amount : 230,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(200)
};
const transaction5 = {
  amount : 45,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(158)
};

const transaction6 = {
  amount : -3900,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(128)
};
const transaction7 = {
  amount : 800,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(113)
};

const transaction8 = {
  amount : -4500,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(99)

};
const transaction9 = {
  amount : 670,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(85)
};

const transaction10 = {
  amount : 11900,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(64)
};
const transaction11 = {
  amount : -432,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(49)
};
const transaction12 = {
  amount : 514,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(33)
};
const transaction13 = {
  amount : 34,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(26)
};
const transaction14 = {
  amount : -12,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(15)
};
const transaction15 = {
  amount : -12,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(9)
};
const transaction16 = {
  amount : 59,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(7)
};
const transaction17 = {
  amount : 1350,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(3)
};
const transaction18 = {
  amount : -78,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(1)
};
const transaction19 = {
  amount : -56,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(0)
};
console.log(`TRANS: ${transaction19.date}`);
const transaction21 = {
  amount : 8500,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(347)
};

const transaction22 = {
  amount : 11000,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(291)
};
const transaction23 = {
  amount : -5045,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(275)
};

const transaction24 = {
  amount : 320,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(210)
};
const transaction25 = {
  amount : 54,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(188)
};

const transaction26 = {
  amount : -2600,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(178)
};
const transaction27 = {
  amount : 750,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(133)
};

const transaction28 = {
  amount : -7850,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(91)

};
const transaction29 = {
  amount : 570,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(80)
};

const transaction210 = {
  amount : 2900,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(54)
};
const transaction211 = {
  amount : -234,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(43)
};
const transaction212 = {
  amount : 154,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(23)
};
const transaction213 = {
  amount : 43,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(20)
};
const transaction214 = {
  amount : -122,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(19)
};
const transaction215 = {
  amount : -21,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(17)
};
const transaction216 = {
  amount : 95,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(15)
};
const transaction217 = {
  amount : 1650,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(14)
};
const transaction218 = {
  amount : -260,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(13)
};
const transaction219 = {
  amount : -166,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(325)
};
const transaction220 = {
  amount : -45,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(315)
};
const transaction221 = {
  amount : 550,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(225)
};
const transaction222 = {
  amount : -95,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(240)
};
const transaction224 = {
  amount : -613,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(256)
};
const transaction225 = {
  amount : 576,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(261)
};
const transaction226 = {
  amount : -35,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(246)
};
const transaction227 = {
  amount : 155,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(235)
};
const transaction228 = {
  amount : -11735,
  from : 'Or',
  to : 'Zeev',
  date : getDateXDaysAgo(323)
};

// Data

// Bitcoin $ $ 

const account1 = {
  owner: 'Or Cohen',
  username : 'or',
  // movements: [200.45, 450, -400, 3000, -650, -130, 70, 1300],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8,
     transaction9, transaction10, transaction11, transaction12, transaction13, transaction14, transaction15, transaction16, transaction17,
      transaction18, transaction19, transaction21, transaction22, transaction23, transaction24, transaction25, transaction26, transaction27,
       transaction28, transaction29, transaction210, transaction211, transaction212, transaction213, transaction214, transaction215,
        transaction216, transaction217, transaction218, transaction219, transaction220, transaction221, transaction222, transaction224,
         transaction225, transaction226, transaction227,transaction228 ],
  interestRate: 1.2, // %
  pin: 1111,

};

const account2 = {
  owner: 'Shir Golan',
  username : 'user',
  movements: [ 3400, -150, -790.90, -3210, -1000, 8500 , -30 ,5000 ],
  interestRate: 1.5,
  pin: 2222,

  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8,
     transaction9, transaction10, transaction11, transaction12, transaction13, transaction14, transaction15, transaction16, transaction17,
      transaction18, transaction19, transaction21, transaction22, transaction23, transaction24, transaction25, transaction26, transaction27,
       transaction28, transaction29, transaction210, transaction211, transaction212, transaction213, transaction214, transaction215,
        transaction216, transaction217, transaction218, transaction219, transaction220, transaction221, transaction222, transaction224,
         transaction225, transaction226, transaction227,transaction228 ],

};

const account3 = {
  owner: 'Steven Thomas Williams',
  username : '',
  // movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8,
     transaction9, transaction10],

  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  username : '',
  // movements: [430, 1000, 700, 50, 90],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8,
     transaction9, transaction10],

  interestRate: 1,
  pin: 4444,
};


const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('.btn_logout');
const btnDateFilter = document.querySelector('#btnDateFilter');
const btnClearFilter = document.querySelector('#btnClearFilter');

let dateSelector = document.querySelector('.form-select');
let datePickerFrom = document.querySelector('#datePickerFrom');
let datePickerTo = document.querySelector('#datePickerTo');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let timer;
/// Date //

  const now = new Date();
  // datePickerTo = now;
  
const formatDate = function (date){
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
const formatHour = function(date){
const hour = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');
return `${hour}:${min}`;
}

labelDate.textContent = `${formatDate(now)}, ${formatHour(now)}`;

/////// Calculate Days ///////
 const CalcDays = (date_1, date_2) =>{
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays - 1;
}

const IsNew = (date_1, date_2) =>{
  let date1 = new Date(date_1);
  let date2 = new Date(date_2);
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  if(TotalDays <= 4)
  return true;
  return false;
}

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

/// Format Transactions Days
const dateDisplay = function(date){
  const now = new Date;
  const daysPassed = CalcDays(now , date)//(now, date) => {Math.round(Math.abs(now - date) / (1000 * 60 * 60 * 24))};
  if (daysPassed === 0){
    return 'Today'
  }
  else if (daysPassed === 1){
    return 'Yesterday';
  }

  else if (daysPassed <= 7){
    return `${daysPassed} Days Ago`;
  }
  
  else {
    var originalDateFormat;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    originalDateFormat = `${day}/${month}/${year}`;
    return originalDateFormat;
  }
   

}

containerApp.style.opacity = 0;
let currentAccount;

/// Display Transactions ///
const displayMovements = function (movements, i) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i)  {
        var type = mov.amount > 0 ? 'deposit' : 'withdrawal';  
        const newTransHTML = `<div class="movements__type movements__type--new">NEW</div>`;
        var isNew;
        if(IsNew(now, mov.date))
          isNew = newTransHTML;
          else
          isNew = '';

        const transactionDate = new Date(mov.date);
        const displayDate = dateDisplay(transactionDate); // = `${formatDate(transactionDate)}`
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${i + 1}. ${type}
        </div>${isNew}
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${numberWithCommas(mov.amount)} $</div>
      </div>`;

      containerMovements.insertAdjacentHTML("afterbegin",html);
        
    });
} ;



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/// Display Balance ///

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc , mov) => acc + mov.amount , 0);
  labelBalance.textContent = `${numberWithCommas((acc.balance).toFixed(2))} $`;
}

/// Format Money ///
function numberWithCommas(x) {
  x = String(x);
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");  
  return x;
}

/// Display Summery ///
const displaySummery = function (movements) {
  const income = numberWithCommas(Math.round(movements.filter(mov => mov.amount > 0).reduce((acc, mov) => acc + mov.amount , 0)));
  labelSumIn.textContent = `${income} $`;


  const outcome = numberWithCommas(Math.round(movements.filter(mov => mov.amount < 0).reduce((acc, mov) => acc + mov.amount , 0)));
  labelSumOut.textContent = `${outcome} $`;


 const interest = movements.filter(mov => mov.amount > 0).map(deposit => (deposit * 1.2) / 100).reduce((acc, int) => acc + int, 0);
 labelSumInterest.textContent = `${167.5} $`;
}
/// Display User Details ///
const displayUser = function (user) {
  displayBalance(user);
  const sortedByDate = user.movements.slice().sort((a, b) => a.date - b.date);
  displayMovements(sortedByDate);
  // displayMovements(user.movements);
  displaySummery(user.movements);
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
}

/// Timer ///
const startTimer = function(){
  const tick = function () {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    labelTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if ( time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log In To Get Started';
      containerApp.style.opacity = 0 ;
logOut();
    };
    time--;
  };
  let time = 5 * 60;
  tick();
  const timer = setInterval(tick, 1000);
    return timer;
};

/// Default Account Initialize ///

currentAccount = account2;
displayUser(account2);
labelWelcome.textContent = `Welcome Back, Default Z`;
containerApp.style.opacity = 100;
inputLoginUsername.style.display = "none";
inputLoginPin.style.display = "none";
btnLogin.style.display = "none";
btnLogout.style.display = "block";
timer = startTimer();


/// LOGIN ///
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === Number(inputLoginPin.value))
  {
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    displayUser(currentAccount);
    inputLoginUsername.style.display = "none";
    inputLoginPin.style.display = "none";
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
    if (timer) clearInterval(timer);
    timer = startTimer();
  }
  else {
    alert("Wrong User / Password");
  }
});

/// Transfer Money ///
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(reciever.owner, amount, currentAccount.owner);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && reciever && currentAccount.balance >= amount && reciever?.username !== currentAccount.username)
  {
    console.log("Valid");
    const date = new Date();
    date.setMonth(date.getMonth());
    // const today = date.setDate(date.getDate())

    var newSenderTransaction = new transaction (-amount,currentAccount.owner ,reciever.owner ,date);
    var newRecieverTransaction = new transaction (amount,reciever.owner ,currentAccount.owner ,date);
    console.log("Today: "+date,"reciever"+ date);
    currentAccount.movements.push(newSenderTransaction);
    reciever.movements.push(newRecieverTransaction);
    displayUser(currentAccount);
  }
  else if (amount > currentAccount.balance){
    alert("Yoy Don't Have Enought Money in Your Balance.")
  }
  else {console.log("Problem");}
  clearInterval(timer);
    timer = startTimer();
});

/// Close Account ///
btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if (inputCloseUsername.value == currentAccount.username && Number(inputClosePin.value) === currentAccount.pin )
  {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value ='';
  clearInterval(timer);
    timer = startTimer();
logOut();
});

/// Loan ///
btnLoan.addEventListener('click', function(e){
  // dateSelector.value = null;
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov.amount >= amount * 0.1)) {
    const date = new Date();
    const today = date.setDate(date.getDate())
    // currentAccount.movementsDates.push(date);
    var newLoan = new transaction (amount,'Bank',currentAccount.owner,date);
    currentAccount.movements.push(newLoan);
    displayUser(currentAccount);
  };
  inputLoanAmount.value = '';
  clearInterval(timer);
    timer = startTimer();
});

/// Sort Transactions ///
let flag = "accending";
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  if (flag === "accending") {
    const sortedAccending = currentAccount.movements.slice().sort((a, b) => a.amount - b.amount);
    console.log(sortedAccending);
    flag = "decending";
    displayMovements(sortedAccending);
    btnSort.textContent = `Sorted By:\n⬇ Price `;
  } else if (flag === "decending") {
    const sorteddecending = currentAccount.movements.slice().sort((a, b) => b.amount - a.amount);
    console.log(sorteddecending);
    flag = "";
    displayMovements(sorteddecending);
    btnSort.textContent = 'Sorted By:\n⬆ Price';

  }
  else {
    const sortedByDate = currentAccount.movements.slice().sort((a, b) => a.date - b.date);
    flag = "accending";
    displayMovements(sortedByDate);
    btnSort.textContent = 'Sorted By: \n⬇ Date';
  };
  clearInterval(timer);
  timer = startTimer();
});



/// Log Out ///

btnLogout.addEventListener('click', function(e){
  e.preventDefault();
  logOut();
});

const logOut = function () {
  clearInterval(timer);
      labelWelcome.textContent = 'Log In To Get Started';
      containerApp.style.opacity = 0 ;
      inputLoginUsername.style.display = "block";
      inputLoginPin.style.display = "block";
      btnLogin.style.display = "block";
      btnLogout.style.display = "none";
}

/// Date Filter ///
let selectedDate;
const isCurrentYear = function(date){
  // const month = date.getMonth() + 1;
  const recievedDate = new Date(date);
  if( now.getMonth() < recievedDate.getMonth())
  return false;
  else 
  return true;
};

function filter(mov) {
  if (isCurrentYear(mov.date)){
    return ((mov.date).getMonth() + 1 == selectedDate && (mov.date).getFullYear() ==  now.getFullYear());
  }
    else
    return ((mov.date).getMonth() + 1 == selectedDate && (mov.date).getFullYear() ==  now.getFullYear() - 1);
  };




























//const tomorrow = date.setDate(date.getDate() + 1)
  function filterRange(mov) {
    
    const dateFrom = new Date(datePickerFrom.value);
    const dateTo = new Date(datePickerTo.value);
    const date = new Date(mov.date);
    // Need to fix Day To is +1 (except Today)
    return (CalcDays(date , dateFrom) >= 0 && CalcDays(dateTo, date) + 1  >= 0); 
  
    };







  /// FILTER BOTTON /// 
btnDateFilter.addEventListener('click', function(e){
  // var dayFrom, dayTo;
  e.preventDefault();
  if (timer) clearInterval(timer);
  timer = startTimer();

  if (dateSelector.value){
    selectedDate = dateSelector.value;
    
    filteredData = currentAccount.movements.filter(filter)//(mov => (mov.date).getMonth() + 1 == selectedDate && isCurrentYear(mov.date));
    displayMovements(filteredData);
    document.querySelector('.btn--sort').style.display = "none"; 
  }
  else if (datePickerFrom.value && datePickerTo.value){
    console.log("Reach");
    const dateFrom = datePickerFrom.value;
    const dateTo = datePickerTo.value;
    filteredData = currentAccount.movements.filter(filterRange);
    console.log(filteredData);
    displayMovements(filteredData);
    document.querySelector('.btn--sort').style.display = "none"; 
  }
  console.log(selectedDate);
});












dateSelector.addEventListener('click', function(e){
  datePickerFrom.value = null;
  datePickerTo.value = null;
});

datePickerFrom.addEventListener('click', function(e){
  dateSelector.value = null;
});

datePickerTo.addEventListener('click', function(e){
  dateSelector.value = null;
});
// May Feb

btnClearFilter.addEventListener('click', function(e){
  e.preventDefault();
  if (timer) clearInterval(timer);
  timer = startTimer();
  document.querySelector('.btn--sort').style.display = "block";
  const sortedByDate = currentAccount.movements.slice().sort((a, b) => a.date - b.date);
  displayMovements(sortedByDate);
});
