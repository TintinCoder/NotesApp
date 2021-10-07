const btn = document.getElementById('addBtn');
var textInp = document.getElementById('addTxt');
showNotes()
btn.addEventListener('click', ()=> {
    var notes = localStorage.getItem('notes');
    if (notes === null) {
        var notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(textInp.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    console.log(localStorage);
    textInp.value = "";
    showNotes()
})

function showNotes(params) {
    var notes = localStorage.getItem('notes');
    if (notes === null) {
        var notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    var html = "";
    notesObj.forEach(function(element, index){
        html += `
            <div class="card" style="width: 18rem;" id="cardBox">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete</a>
                </div>
            </div>
        `
    })
    var notesElem = document.getElementById('notes');
    if (notesElem.length != 0) {
        notesElem.innerHTML = html;
    }
}

function deleteNote(index) {
    var notes = localStorage.getItem('notes');
    if (notes === null) {
        var notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes()
    textInp.value = "";
}