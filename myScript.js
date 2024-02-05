let title;
let author;
let pages;
let read;


const myLibrary = [];

function bookObject(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}
//function will clear the form after its been reset.
function clearForm() {
    let form = document.getElementById('libForm');
    form.reset();
}

//function will handle the radio button
function readOrNot() {
    let readRadio = document.getElementsByName('yesOrNo');
        for (let i = 0; i < readRadio.length; i++) {
            if (readRadio[i].checked) {
                return readRadio[i].value;
            }
        }
        return ' ';
}




//this is where the program will run everytime submit is clicked, most of the functions will run through here.
document.getElementById('libForm').addEventListener('submit', function(e) {
    e.preventDefault()
    title = document.getElementById('titleForm').value;
    author = document.getElementById('authorForm').value;
    pages = document.getElementById('pagesForm').value;
    read = readOrNot();
    clearForm();

    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);
})




