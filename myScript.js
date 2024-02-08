let title;
let author;
let pages;
let read;
let delBTN;

const titleLog = document.querySelector('.title');
const authorLog = document.querySelector('.author');
const pagesLog = document.querySelector('.pages');
const readLog = document.querySelector('.readYN');
const delLog = document.querySelector('.delete');

const myLibrary = [];
let delArray = [];
let yesOrNoArray = [];

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
//Function will delete a row when the delete button is clicked.
function deleteRow(index) {
    myLibrary.splice(index, 1);
    delArray.splice(index, 1);

    libraryDisplay(myLibrary);

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
        const contentRead = document.createElement('button');
        contentRead.classList.add('contentRead');
        contentRead.textContent = myLibrary[i].haveRead;
        readLog.appendChild(contentRead);


        //adding the delete option
        delBTN = document.createElement('button');
        delBTN.innerHTML = 'DEL';
        delLog.appendChild(delBTN);

        
        //Putting the delete button in to an array
        while (delArray.length < array.length) {
            delArray.push(delBTN);
        }

        delBTN.addEventListener('click', function() {
            deleteRow(i);
        })

        contentRead.addEventListener('click', function() {
                contentRead.classList.toggle('clicked');

                setTimeout(function() {
                    contentRead.classList.remove('clicked');
                }, 100);
               
                let currentHaveRead = myLibrary[i].haveRead;
                

                if (currentHaveRead === 'Yes') {
                        myLibrary[i].haveRead = 'No';
                }
                if (currentHaveRead === 'No') {
                        myLibrary[i].haveRead = 'Yes';
                }
               contentRead.textContent = myLibrary[i].haveRead;
               
        })

        
        
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




