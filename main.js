const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const houseList = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];


const showForm = () =>{
    let domString = '';
    domString += `<form>`;
    domString +=    `<div class="form-group">`;
    domString +=        `<label for="nameInputForm">Student Name</label>`;
    domString +=        `<input type="text" class="form-control" id="nameInputForm" value='' aria-describedby="emailHelp" placeholder="Ron Weasley">`;
    domString +=    `</div>`;
    domString +=     `<button type="button" class="btn btn-primary" id='sortBtn'>Sort</button>`;
    domString +=    `</form>`;
    
    printToDom('nameform', domString);

    document.getElementById('sortBtn').addEventListener('click', assignHouse);
    document.getElementById('nameInputForm').addEventListener('submit', assignHouse);
};

const assignHouse = () => {
    let domString = '';
    const student = document.getElementById("nameInputForm").value;
    const house = houseList[(getRandomInt(4))];
    console.log( student, house);
    domString += `<div class='col-sm-10 col-md-8 col-xl-3'>`;
    domString += `  <div class="card text-center" style="width: 18rem;">`;
    domString += `      <div class="card-body">`;
    domString += `          <h5 class="card-title">${student}</h5>`;
    domString += `          <p class="card-text">${house}</p>`;
    domString += `          <button class="btn btn-secondary" id='expelBtn'>Expel</button>`;
    domString += `      </div>`;
    domString += `  </div>`;
    domString += `</div>`;

    printToDom('cardArea', domString);
    
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};


const buttonEvents = () =>{
    document.getElementById('getStarted').addEventListener('click', showForm);
    
};


const init = () =>{
    buttonEvents();
};

init();