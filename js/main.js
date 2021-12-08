let elForm = document.querySelector('#book-form');
let elBtnGroup = document.querySelector('.btn-group');
let elListGroup = document.querySelector('.list-group');

let title = elForm.querySelector('#title');
let type = elForm.querySelector('#type');

let newArr = [];
let newListArr = [];
let oldListArr = [];
let oldArr = [
  {
    title: "Ikki eshik orasi",
    type: "Badiiy"
  },
  {
    title: "Ilon tog'a",
    type: "Biznes"
  },
  {
    title: "Hidoyat sari",
    type: "Diniy"
  },
  {
    title: "Shum bola",
    type: "Badiiy"
  },
];
for(let item of oldArr){
  newArr.push(item);
}
newListArr = newArr.map(function (val) {
  return `<li class="list-group-item">${val.title}<span class="float-end badge bg-info">${val.type}</span></li>`
});

elListGroup.innerHTML = newListArr.join('');

elForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let someBool = newArr.some(function (val) {
    return val.title.toLowerCase() == title.value.toLowerCase();
  });
  if (!someBool && title.value != "" && type.value != "") {
    let newObj = {
      title: title.value,
      type: type.value
    }
    newArr.push(newObj);
    title.value = '', type.value = '';
  } else {
    alert('Bunday qiymat mavjud');
  }
  newListArr = newArr.map(function (val) {
    return `<li class="list-group-item">${val.title}<span class="float-end badge bg-info">${val.type}</span></li>`
  });

  elListGroup.innerHTML = newListArr.join('');
});

elBtnGroup.addEventListener('click', function (e) {
  function myFunc(index) {
    if (e.target.textContent == index) {
      let newBadiiy = newArr.filter(function (val) {
        return val.type == index;
      });
      newListArr = newBadiiy.map(function (val) {
        return `<li class="list-group-item">${val.title}<span class="float-end badge bg-info">${val.type}</span></li>`
      });
      elListGroup.innerHTML = newListArr.join('');
    }
  }
  myFunc(e.target.textContent);
  if (e.target.textContent == 'Hammasi') {
    newListArr = newArr.map(function (val) {
      return `<li class="list-group-item">${val.title}<span class="float-end badge bg-info">${val.type}</span></li>`
    });
    elListGroup.innerHTML = newListArr.join('');
  }
});