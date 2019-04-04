let studentCounter = 1;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const houseList = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

const students = [];

const addDeleteEvents = () =>{
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
  };

  
  const addStudent=(e)=>{
    e.preventDefault();
    const inputText = document.getElementById("nameInputForm").value;
    const newStudent = {
        name: inputText,
        house: houseList[(getRandomInt(4))], 
        id: studentCounter
    };
    students.push(newStudent);
    studentCounter++;
    //console.log(inputText);
    //printToDom('ingredient-container', inputText); 
    assignHouse();
    
    nameInputForm.value = '';
};

  const deleteFunction = (e) =>{
    const buttonId = e.target.id;
    students.forEach((student, index)=>{
        if(student.id === buttonId){
        students.splice(index, 1);
        };
    });
    assignHouse();
    addDeleteEvents();
};

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

    document.getElementById('sortBtn').addEventListener('click', addStudent);
    document.getElementById('nameInputForm').addEventListener('submit', addStudent);
};

const assignHouse = () => {
    let domString = '';
    document.getElementById('cardArea').innerHTML = '';
    
    
    //console.log( student, house);
    students.forEach((student) => {
        
    domString += `<div id='' class='col-sm-10 col-md-8 col-xl-3'>`;
    domString += `  <div class="card text-center" style="width: 18rem;">`;
    domString += `      <div class="card-body">`;
    domString += `          <h5 class="card-title">${student.name}</h5>`;
    domString += `          <p class="card-text">${student.house}</p>`;
    domString += `          <button class="deleteButton" id='${student.id}' onclick=>Expel</button>`;
    domString += `     </div>`;
    domString += `  </div>`;
    domString += `</div>`;
    
    
});
    printToDom('cardArea', domString);
    addDeleteEvents();
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