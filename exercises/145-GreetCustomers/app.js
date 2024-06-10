let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greetin = '';
  // your code here
  if (!customerData[firstName]) 
    greetin = 'Welcome! Is this your first time?';

  if (customerData[firstName] && customerData[firstName].visits === 1)
    greetin = `Welcome back, ${firstName}! We're glad you liked us the first time!`;

  if (customerData[firstName] && customerData[firstName].visits > 1)
    greetin = `Welcome back, ${firstName}! So glad to see you again!`;
	
  return greetin;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
