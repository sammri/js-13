const userInfo = {
    name: "Samir",
    age: 17,
    homeland: "Ukr",
  };
  
  const countProps = ({ ...obj }) => Object.keys(obj).length;
  
  console.log(countProps(userInfo));