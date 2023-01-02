'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// const transaction1 = {
//   amount : 9000,
//   from : 'Or',
//   to : 'Zeev',
//   date : '2019-11-30T09:48:16.867Z'
// };

// const transaction2 = {
//   amount : 11000,
//   from : 'Or',
//   to : 'Zeev',
//   date : '2019-11-30T09:48:16.867Z'
// };

// const transactions [transaction1];
// transactions.push(transaction2);
// console.log(transactions);

// Data

// Bitcoin $ ฿ 

const account1 = {
  owner: 'Or Cohen',
  username : 'or',
  movements: [200.45, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ]
};

const account2 = {
  owner: 'Zeev',
  username : 'zeev',
  movements: [ 3400, -150, -790.90, -3210, -1000, 8500 , -30 ,5000 ],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-12-31T14:43:26.374Z',
    '2023-01-01T18:49:59.371Z',
    '2023-01-02T12:01:20.894Z',
  ],
 const account11 = {
  owner: 'Or Cohen',
  username : 'Or',
  movements: [200.45, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ]
};
};
const account20 = {
  owner: 'Zeev',
  username : 'Zeev',
  movements: [ 3400, -150, -790.90, -3210, -1000, 8500 , -30 ,5000 ],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-12-31T14:43:26.374Z',
    '2023-01-01T18:49:59.371Z',
    '2023-01-02T12:01:20.894Z',
  ],
 
};




const account3 = {
  owner: 'Steven Thomas Williams',
  username : '',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  username : '',
  movements: [430, 1000, 700, 50, 90],
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

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

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
        var type = mov > 0 ? 'deposit' : 'withdrawal';
        // console.log((mov));
        if (mov > 5000 && mov < 10000)
          type = 'salary';
        // currentAccount = account2;
        const transactionDate = new Date(currentAccount.movementsDates[i]);
        const displayDate = dateDisplay(transactionDate); // = `${formatDate(transactionDate)}`
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${i + 1}. ${type}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${numberWithCommas(mov)} ฿</div>
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
  acc.balance = acc.movements.reduce((acc , mov) => acc + mov , 0);
  labelBalance.textContent = `${numberWithCommas((acc.balance).toFixed(2))} ฿`;
}

/// Format Money ///
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");  
  return x;
}

/// Display Summery ///
const displaySummery = function (movements) {
  const income = numberWithCommas(Math.round(movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov , 0)));
  labelSumIn.textContent = `${income} ฿`;


// const totalWithdrawals = function (movements) {
  const outcome = numberWithCommas(Math.round(movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov , 0)));
  labelSumOut.textContent = `${outcome} ฿`;


 const interest = movements.filter(mov => mov > 0).map(deposit => (deposit * 1.2) / 100).reduce((acc, int) => acc + int, 0);
 labelSumInterest.textContent = `${Math.round(interest)} ฿`};

/// Display User Details ///
const displayUser = function (user) {
  displayBalance(user);
  displayMovements(user.movements);
  displaySummery(user.movements);
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
}

/// Default Account Initialize ///
currentAccount = account2;
let timer;
// displayUser(account2);
// labelWelcome.textContent = `Welcome Back, Default Z`;
// containerApp.style.opacity = 100;


/// LOGIN ///
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === Number(inputLoginPin.value))
  {
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    displayUser(currentAccount);
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
  console.log(reciever.owner, amount, currentAccount.owner);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && reciever && currentAccount.balance >= amount && reciever?.username !== currentAccount.username)
  {
    console.log("Valid");
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    const date = new Date();
    date.setMonth(date.getMonth());
    const tomorrow = date.setDate(date.getDate() + 1)
    currentAccount.movementsDates.push(date);
    reciever.movementsDates.push(tomorrow);
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
});

/// Loan ///
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    const date = new Date();
    const tomorrow = date.setDate(date.getDate() + 1)
    currentAccount.movementsDates.push(date);
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(tomorrow);
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
    const sortedAccending = currentAccount.movements.slice().sort((a, b) => a - b);
    console.log(sortedAccending);
    flag = "decending";
    displayMovements(sortedAccending);
  } else if (flag === "decending") {
    const sorteddecending = currentAccount.movements.slice().sort((a, b) => b - a);
    console.log(sorteddecending);
    flag = "";
    displayMovements(sorteddecending);
  }
  else {
    flag = "accending";
    displayMovements(currentAccount.movements);
  };
  clearInterval(timer);
  timer = startTimer();
});


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
    };
    time--;
  };
  let time = 5 * 60;
  tick();
  const timer = setInterval(tick, 1000);
    return timer;
};

