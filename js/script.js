let currentBooks = document.querySelector('.currentbooks')
let cartMenu = document.querySelector('.cartmenu')
let cartDets = document.querySelector('.cartdets')
async function bookTrends() {
    // let currentdUrl = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=QBnjI4HVaX6zpVgapT5JwcmyS0i8Ksv9`)
    let currentdUrl = await fetch(`https://himansu1990.github.io/book/api.json`)
    let currentBookData = await currentdUrl.json()
    let currntBookRes = currentBookData.results.books
    for(let i = 0; i < currntBookRes.length; i++){
        let currentBookItems = currntBookRes[i]
        let id = currentBookItems.primary_isbn10
        let currentAuthor = currentBookItems.author
        let bookCurrent = currentBookItems.title
        let currentCoverImg = currentBookItems.book_image
        currentBooks.innerHTML += `<div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="${currentCoverImg}" alt="">
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1" id="${id}"><a href="details.html?id=${id}">${bookCurrent}</a></div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">${currentAuthor}</div>
        </div>`
    }
}
bookTrends()


//Open and close shopping cart

cartMenu.addEventListener('click', function(){
    if(cartDets.style.display === 'none' || cartDets.style.display === ''){
      cartDets.style.display = 'block'
    }
    else{
      cartDets.style.display = 'none'
    }
  })


  