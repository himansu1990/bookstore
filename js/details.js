let description = document.querySelector('.description')
let briefDesc = document.querySelector('.brief-description')
let productImg = document.querySelector('.product-image')
let bookDetTitle = document.querySelector('.title')
let cartMenu = document.querySelector('.cartmenu')
let cartDets = document.querySelector('.cartdets')
let price = document.querySelector('.bookprice')
let rankCat = document.querySelector('.category')

let urlParam = new URLSearchParams(window.location.search)
let bookId = urlParam.get('id')
let addBtn = document.querySelector('.addBtn')
let btnRemove = document.querySelector('.btn-remove')
let cartItem = document.querySelector('.cartitem')
//The below line has been commented. If there's an error, uncomment the below line and check if the code is working
// let bookUrlId = `details.html?id=` + bookId
let url = `https://himansu1990.github.io/book/api.json?id=${bookId}`
async function detailsBook(){
    detailUrl = await fetch(url)
    let rawDet = await detailUrl.json()
    let allDetsBooks = rawDet.results.books


    for(let i = 0; i < allDetsBooks.length; i++){
      let detItem =  allDetsBooks[i] 
    
      let bookDesc = detItem.description
      let bookDetImg = detItem.book_image
      let titleDet =  detItem.title
      let bookIsbn = detItem.primary_isbn10
      let bookPrice = detItem.price_det
      let bookRank = detItem.rank
      if(bookIsbn === bookId) {
        console.log(titleDet)
        rankCat.innerHTML = `<div class="category"><span class="theme-text">Rank:</span> ${bookRank}</div>`
        bookDetTitle.innerHTML = `<div class="title" id="${bookIsbn}">${titleDet}
        </div>`
        description.innerHTML = `<p>${bookDesc}</p>`
        briefDesc.innerHTML = `<p>${bookDesc}</p>`
        productImg.innerHTML = `<img class="img-fluid" src="${bookDetImg}" alt="${titleDet}">`  
        price.innerHTML = `<div class="price my-2 bookprice">&#8377; ${bookPrice} 
        <strike class="original-price"></strike></div>`
        document.title = titleDet
        return `<h3>${titleDet}</h3>
        <img class="img-fluid addcart-img" src="${bookDetImg}" alt="${titleDet}" style="width:30% !important;">
        <button type="button" class="btn btn-dark btn-remove">Remove</button>`
      }
    
    }
    
}
detailsBook()

//Disable button for zero number
// function disableFunc(){
//   let cartInput = document.querySelector('.cart-input').value
    
//  if(Number(cartInput) === 0){
// addBtn.innerHTML = `Sorry`
//  }
//  else {
//   addBtn.innerHTML = `Add to basket`
//  }
// }

//Open and close shopping cart

cartMenu.addEventListener('click', function(){
  if(cartDets.style.display === 'none' || cartDets.style.display === ''){
    cartDets.style.display = 'block'
  }
  else{
    cartDets.style.display = 'none'
  }
})


async function addBookToCart(){
  let showDet = await detailsBook()
  cartItem.innerHTML += showDet
  //set item in the local storage 
 let shopCart = JSON.parse(localStorage.getItem('shopitem')) || []
 
 shopCart.push(showDet)

 localStorage.setItem('shopitem', JSON.stringify(shopCart))

}

if(addBtn){
  addBtn.addEventListener('click', function(){
    addBtn.innerHTML = `Go to Bag`
    addBookToCart()
    console.log('Book added')
  })
}

//save item in the browser 
document.addEventListener('DOMContentLoaded', savedCartItems)
 

function savedCartItems(){
  let savedItem = JSON.parse(localStorage.getItem('shopitem')) || []
  savedItem.forEach((items, index) => {
   cartItem.innerHTML += items
  });
}




if(btnRemove){
  btnRemove.addEventListener('click', function(index){
  
  
  })
}






