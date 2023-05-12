// Write an asynchronous function that accepts a
// message string and a delay time in milliseconds.
// The function should log the message to the console 
//after the specified delay time

function delayLog(message, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delayTime);
  });
}


delayLog('i will go home', 3000)
  .then(() => {
    console.log('i am studying for my future kids');
  });


// You have an array of user IDs and a function 
//getUserData(id) that returns a Promise with user 
//data when given a user ID. Write an asynchronous 
//function that fetches and logs the data for each 
//user ID one by one, in sequence.

 const userIds = [1, 2, 3, 4, 5]; 

function getUserData(id) {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User data for ID ${id}`);
    }, Math.random() * 1000); 
    });
}

async function fetchUserDataSequentially() {
  for (const id of userIds) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.log(`Error fetching user data for ID ${id}: ${error}`);
    }
  }
}

fetchUserDataSequentially();

 
//You have an asynchronous function performTask() 
//that returns a Promise. The Promise resolves if 
//the task is successful and rejects if there's an 
//error. Write a function that calls performTask() 
//and logs a custom success message if the task is
// successful, and a custom error message if there's
// an error.

function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Task completed successfully!');
      }, Math.random() * 1000); 
    });
  }
  
  function taskHandler() {
    performTask()
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  
  
  taskHandler();
  