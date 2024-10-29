'use strict'

// Search Books

let searchInput = document.querySelector('.search')
let bSub = document.querySelector('.bsub')
let searchBooks = document.querySelector('.searchbooks')
let form = document.querySelector('form')
let querySearch 


function searchRes(){
    querySearch = document.querySelector('input').value
    let searchUrl = `https://openlibrary.org/search.json?q=${querySearch}&&limit=10`
    fetch(searchUrl).then(response => response.json())
    .then(data => {
   let books = data.docs
   let resultHtml = ''
   for(let i = 0; i < books.length; i ++){
    let bookItem = books[i]
    let bookName = bookItem.title
    let bookAuthor = bookItem.author_name
    resultHtml += `<p><b>Title:</b> ${bookName} , <b>Author:</b> ${bookAuthor} </p>`
   }
   searchBooks.innerHTML = resultHtml
   document.querySelector('.bg-white').innerHTML = ``
    })
}


function mySearch(e){
    e.preventDefault()
        searchRes()
    console.log(searchRes())
    }

bSub.addEventListener('click', mySearch)
form.addEventListener('submit', mySearch)

// End of Search Books

