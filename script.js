'use strict';

// BANKIST APP

// var transaction = {
//   amount : null,
//   from : null,
//   to : null,
//   date : null
// };

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
  date : '2019-11-30T09:48:16.867Z'
};

const transaction2 = {
  amount : 11000,
  from : 'Or',
  to : 'Zeev',
  date : '2019-11-30T09:48:16.867Z'
};
const transaction3 = {
  amount : -5045,
  from : 'Or',
  to : 'Zeev',
  date : '2023-01-01T09:48:16.867Z'
};

const transaction4 = {
  amount : 320,
  from : 'Or',
  to : 'Zeev',
  date : '2023-01-02T09:48:16.867Z'
};
const transaction5 = {
  amount : 45,
  from : 'Or',
  to : 'Zeev',
  date : '2023-01-03T09:48:16.867Z'
};

const transaction6 = {
  amount : -3900,
  from : 'Or',
  to : 'Zeev',
  date : '2022-12-31T09:48:16.867Z'
};
const transaction7 = {
  amount : 500,
  from : 'Or',
  to : 'Zeev',
  date : '2019-11-30T09:48:16.867Z'
};

const transaction8 = {
  amount : -4500,
  from : 'Or',
  to : 'Zeev',
  date : '2019-11-30T09:48:16.867Z'
};
const transaction9 = {
  amount : 670,
  from : 'Or',
  to : 'Zeev',
  date : '2019-11-30T09:48:16.867Z'
};

const transaction10 = {
  amount : -1234,
  from : 'Or',
  to : 'Zeev',
  date : '2019-11-30T09:48:16.867Z'
};

const transactions = [];
transactions.push(transaction1);
transactions.push(transaction2);
transactions.push(transaction3);
transactions.push(transaction4);
transactions.push(transaction5);
transactions.push(transaction6);
transactions.push(transaction7);
transactions.push(transaction8);
transactions.push(transaction9);
transactions.push(transaction10);

// Data

// Bitcoin $ $ 

const account1 = {
  owner: 'Or Cohen',
  username : 'or',
  // movements: [200.45, 450, -400, 3000, -650, -130, 70, 1300],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8, transaction9, transaction10],
  interestRate: 1.2, // %
  pin: 1111,

};

const account2 = {
  owner: 'Zeev',
  username : 'zeev',
  movements: [ 3400, -150, -790.90, -3210, -1000, 8500 , -30 ,5000 ],
  interestRate: 1.5,
  pin: 2222,

  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8, transaction9, transaction10],

};

const account3 = {
  owner: 'Steven Thomas Williams',
  username : '',
  // movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8, transaction9, transaction10],

  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  username : '',
  // movements: [430, 1000, 700, 50, 90],
  movements: [transaction1 , transaction2, transaction3, transaction4, transaction5, transaction6, transaction7, transaction8, transaction9, transaction10],

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

const dateSelector = document.querySelector('.form-select');
const datePickerFrom = document.querySelector('.datePickerFrom');
const datePickerTo = document.querySelector('.datePickerTo');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let timer;
/// Date //
// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//       acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join(''); 
//   });
// };
// 
// createUsernames(accounts);

  const now = new Date();
  
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
  return TotalDays;
}

/// Format Transactions Days
const dateDisplay = function(date){
  const now = new Date;
  const daysPassed = CalcDays(now , date)//(now, date) => {Math.round(Math.abs(now - date) / (1000 * 60 * 60 * 24))};
  if (daysPassed <= 0){
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
        // console.log((mov));
        if (mov.amount > 5000 && mov.amount < 10000)
          type = 'salary';
        // currentAccount = account2;
        const transactionDate = new Date(mov.date);
        const displayDate = dateDisplay(transactionDate); // = `${formatDate(transactionDate)}`
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${i + 1}. ${type}
        </div>
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


// const totalWithdrawals = function (movements) {
  const outcome = numberWithCommas(Math.round(movements.filter(mov => mov.amount < 0).reduce((acc, mov) => acc + mov.amount , 0)));
  labelSumOut.textContent = `${outcome} $`;


 const interest = movements.filter(mov => mov.amount > 0).map(deposit => (deposit * 1.2) / 100).reduce((acc, int) => acc + int, 0);
//  labelSumInterest.textContent = `${Math.round(inter)} $`;
 labelSumInterest.textContent = `${167.5} $`;
}
/// Display User Details ///
const displayUser = function (user) {
  displayBalance(user);
  displayMovements(user.movements);
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

// currentAccount = account2;
// displayUser(account2);
// labelWelcome.textContent = `Welcome Back, Default Z`;
// containerApp.style.opacity = 100;
// inputLoginUsername.style.display = "none";
// inputLoginPin.style.display = "none";
// btnLogin.style.display = "none";
// btnLogout.style.display = "block";
// timer = startTimer();


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
    const tomorrow = date.setDate(date.getDate() + 1)

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
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov.amount >= amount * 0.1)) {
    const date = new Date();
    const tomorrow = date.setDate(date.getDate() + 1)
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
    flag = "accending";
    displayMovements(currentAccount.movements);
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

