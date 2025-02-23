function processUserData(user, successCallback, errorCallback) {
  // Write your code here
  if(user.name && user.age ){
    successCallback(`User ${user.name} is ${user.age} years old.`)
  } else{
    errorCallback("Invalid user data: missing required fields")
  }
}

processUserData(
  { name: "Rayyan", age: 22 },
  (msg) => console.log(msg),
  (err) => console.log(err)
);