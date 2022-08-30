
  fetch('https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?skip=0&limit=9')
  .then((response) => response.json())
  .then((data) => console.log(data));