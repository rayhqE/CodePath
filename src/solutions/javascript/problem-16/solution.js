function extractInfo(user, scores) {
  const {name:userName,address:{city: userCity }} = user;

  const bestScore = Math.max(...scores);

  return { userName, userCity, bestScore };
}
console.log(extractInfo({ name: "John", address: { city: "NY", country: "USA" } }, [56, 76, 89]));
