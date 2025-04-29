const user = {
  hobby: "drums",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  const {[key]: value } = user;
  console.log(`${key}: ${value}`);
}
