const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const showForm = () =>{
    let domString = '';
    domString += `<form>`;
    domString +=    `<div class="form-group">`;
    domString +=        `<label for="exampleInputEmail1">Student Name</label>`;
    domString +=        `<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ron Weasley">`;
    domString +=    `</div>`;
    domString +=     `<button type="submit" class="btn btn-primary">Sort</button>`;
    domString +=    `</form>`;

    printToDom('lol', domString);
};


const buttonEvents = () =>{
    document.getElementById('getStarted').addEventListener('click', showForm);
};


const init = () =>{
    buttonEvents();
};

init();