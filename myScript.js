let title;
let author;
let pages;
let read;

const titleLog = document.querySelector('.title');
const authorLog = document.querySelector('.author');
const pagesLog = document.querySelector('.pages');
const readLog = document.querySelector('.readYN');
const delLog = document.querySelector('.delete');

const myLibrary = [];
//new book constructor to be used later
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

//This function will go through the array and display the books on the page
function libraryDisplay(array) {
    titleLog.innerHTML = '';
    authorLog.innerHTML = '';
    pagesLog.innerHTML = '';
    readLog.innerHTML = '';
    delLog.innerHTML = '';

    for (let i = 0; i < array.length; i++){
        //adding title to DOM
        const contentTitle = document.createElement('div');
        contentTitle.classList.add('contentTitle');
        contentTitle.textContent = myLibrary[i].title;
        titleLog.appendChild(contentTitle);

        //adding author to DOM
        const contentAuthor = document.createElement('div');
        contentAuthor.classList.add('contentAuthor');
        contentAuthor.textContent = myLibrary[i].author;
        authorLog.appendChild(contentAuthor);

        //adding pages to DOM
        const contentPages = document.createElement('div');
        contentPages.classList.add('contentPages');
        contentPages.textContent = myLibrary[i].pages;
        pagesLog.appendChild(contentPages);

        //adding read or not to DOM
        const contentRead = document.createElement('div');
        contentRead.classList.add('contentRead');
        contentRead.textContent = myLibrary[i].haveRead;
        readLog.appendChild(contentRead);

        //adding the delete option
        const delBTN = document.createElement('button');
        delBTN.innerHTML = 'DEL';
        delLog.appendChild(delBTN);
    }
}





//this is where the program will run everytime submit is clicked, most of the functions will run through here.
document.getElementById('libForm').addEventListener('submit', function(e) {
    e.preventDefault()
    title = document.getElementById('titleForm').value;
    author = document.getElementById('authorForm').value;
    pages = document.getElementById('pagesForm').value;
    read = readOrNot();
    const newBook = new bookObject(title, author, pages, read);
    myLibrary.push(newBook);
    libraryDisplay(myLibrary);
    
    clearForm();
})




