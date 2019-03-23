const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const houseList = ['Griffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];


const showForm = () =>{
    let domString = '';
    domString += `<form>`;
    domString +=    `<div class="form-group">`;
    domString +=        `<label for="nameInputForm">Student Name</label>`;
    domString +=        `<input type="text" class="form-control" id="nameInputForm" value='' aria-describedby="emailHelp" placeholder="Ron Weasley">`;
    domString +=    `</div>`;
    domString +=     `<button type="button" class="btn btn-primary" id='sortBtn'>Sort</button>`;
    domString +=    `</form>`;
    
    printToDom('lol', domString);

    document.getElementById('sortBtn').addEventListener('click', assignHouse);
    document.getElementById('nameInputForm').addEventListener('submit', assignHouse);
    document.getElementById('jumbotron-id').innerHTML = '';
};

const assignHouse = () => {
    let domString = '';
    const student = document.getElementById("nameInputForm").value;
    const house = houseList[(getRandomInt(4))];
    console.log( student, house);
    
}

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