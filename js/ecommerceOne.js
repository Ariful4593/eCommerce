function buyNowBtn(buyBtn, mainProduct, productPrice, cartPlus){
    var productPriceValue = parseInt(document.getElementById(productPrice).innerText);
    document.getElementById(buyBtn).addEventListener("click", function(){
        
        var node = document.createElement("LI");
        var product = document.getElementById(mainProduct).innerHTML;
        var emptyBag = document.getElementById("empty-bag");
        var cartItemIncrease = parseFloat(document.getElementById(cartPlus).innerText);
        if(cartItemIncrease >=0)
        {
            cartItemIncrease++;
        }
        document.getElementById(cartPlus).innerText = cartItemIncrease
        const totalPrice = productPriceValue * cartItemIncrease;
        document.getElementById(productPrice).innerHTML = totalPrice;
        alert("Your product add into cart")
        node.innerHTML = product;
        document.getElementById("myList").appendChild(node);
        console.log(node);
        node.addEventListener("click", function(){
            node.style.display = "none"
        })
        emptyBag.style.display = "none";
    })
}
buyNowBtn("buy-now","main-product","product-price", "cart-plus-increase","myList")

buyNowBtn("buy-now-1","main-product-1","product-price-1", "cart-plus-increase","myList")

buyNowBtn("buy-now-2","main-product-2","product-price-2", "cart-plus-increase","myList")

buyNowBtn("buy-now-3","main-product-3","product-price-3", "cart-plus-increase","myList")

var test = document.getElementsByClassName("apparel-product");

class PopularCategory{
    constructor(name, source,image){
        this.name = name;
        this.source = source;
        this.image = image;
    }
}
//Popular category Area
const PopularCategory1 = new PopularCategory("Men Clothing","Source Now", "images/jacket.png");
const PopularCategory2 = new PopularCategory("Men Clothing","Source Now", "images/jacket2.jpg");

popularObject("men-cloth","sourceBtn","popular-image", PopularCategory1);
popularObject("men-cloth1","sourceBtn1","popular-image1", PopularCategory2);
function popularObject(menCloth,sourceButton,popularImage,PopularTest){
    document.getElementById(menCloth).innerHTML = PopularTest.name
    document.getElementById(sourceButton).innerHTML = PopularTest.source
    document.getElementById(popularImage).setAttribute("src", PopularTest.image)
}

//Bag-offer area..
class BagPack{
    constructor(image,model,buyNow){
        this.image = image;
        this.model = model;
        this.less = "-20%";
        this.buyNow = buyNow;
    }
}
const bag1 = new BagPack("images/bag.jpg","Unisex Luxury laptop Bag","Buy Now");
const bag2 = new BagPack("images/bag1.jpg","Unisex Luxury DressBerry","Buy Now");
const bag3 = new BagPack("images/bag2.jpg","American Luxury Tourister","Buy Now");
const bag4 = new BagPack("images/bag3.jpg","AllenSolly Luxury Bag","Buy Now");

bagFunction("bag-images","content-product", "less", "buy-now", bag1)
bagFunction("bag-images1","content-product1", "less1", "buy-now-1", bag2)
bagFunction("bag-images2","content-product2", "less2", "buy-now-2", bag3)
bagFunction("bag-images3","content-product3", "less3", "buy-now-3", bag4)
function bagFunction(imageOne, bagmodel, priceLess, bagBuy, bag){
    document.getElementById(imageOne).setAttribute("src", bag.image);
    document.getElementById(bagmodel).innerHTML = bag.model;
    document.getElementById(priceLess).innerHTML = bag.less;
    document.getElementById(bagBuy).innerHTML = bag.buyNow;
    
}
//CountDown Area..
var countDownDate = new Date("Sep 5, 2020 09:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//Apparel Area..
var apparelImage = ["images/jacket1.jpg","images/jacket2.jpg","images/jacket3.jpg","images/jacket4.jpg","images/jacket5.jpg","images/jacket6.jpg","images/jacket7.jpg","images/jacket8.jpg","images/jacket1.jpg","images/jacket2.jpg","images/jacket3.jpg","images/jacket7.jpg",];
apparelFunction("apparel-area", apparelImage)

var electronicsImage = ["images/watche1.jpg","images/watche2.jpg","images/watche3.jpg","images/watche4.jpg","images/watche5.jpg","images/watche6.jpg","images/watche7.jpg","images/watche8.jpg","images/watche1.jpg","images/watche3.jpg","images/watche2.jpg","images/watche7.jpg"]
apparelFunction("electronics-area", electronicsImage)
// apparelFunction(apparelImage)

function apparelFunction(apparelId, apparelImage){
    for(var i = 0; i < 12; i++)
{
    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");
    const divThree = document.createElement("div");
    const divFour = document.createElement("div");
    const divFive = document.createElement("div");
    const newh6 = document.createElement("h6");
    const newP = document.createElement("p");
    const newI = document.createElement("i")
    const image = document.createElement("img")
    const newA = document.createElement("a");

    image.setAttribute("src", apparelImage[i])
    image.setAttribute("class", "img w-100 h-100")

    newP.setAttribute("class", "text-muted")
    newP.appendChild(newI);

    newI.setAttribute("class", "fa fa-map-marker");
    newI.textContent = "Gujrat,India"

    newh6.setAttribute("class", "font-weight-bold text-muted");
    newh6.textContent = "Well Made Women Clothes with trending Collection";

    
    newA.setAttribute("href", "#");
    newA.setAttribute("id", "apparelProduct")
    newA.appendChild(newh6)
    let apparelArea = document.getElementById(apparelId);
    apparelArea.appendChild(divOne);

    divOne.setAttribute("class", "col-6 col-sm-4 col-md-4 col-lg-3  w-100 h-100 p-2");
    divOne.appendChild(divTwo);

    divTwo.setAttribute("class", "card-body apparel-product")
    divTwo.appendChild(newA);
    divTwo.appendChild(newA);

    newA.appendChild(divThree)
    divThree.setAttribute("class", "row");
    divThree.appendChild(divFour);
    divThree.appendChild(divFive);

    divFour.setAttribute("class", "col-6");
    divFour.appendChild(newP)

    divFive.setAttribute("class", "col-6")
    divFive.appendChild(image)
    
}
}
const recomendImage = ["images/t-shirt.jpg","images/t-shirt1.jpg","images/t-shirt2.jpg","images/t-shirt3.jpg","images/t-shirt4.jpg","images/t-shirt5.jpg",]
RecomendedArea("recomended-area")
RecomendedArea("recomended-area1")

//Recomended Area...
function RecomendedArea(recomendItem){
    for(var i = 0; i < 6; i++)
    {
        const recomendArea = document.getElementById(recomendItem);
        const divOne = document.createElement("div");
        const divTwo = document.createElement("div");
        const divThree = document.createElement("div");
        const img = document.createElement("img");
        const a = document.createElement("a");
        const p = document.createElement("P");
        const strong = document.createElement("strong");
    
        divOne.setAttribute("class", "col-6 col-sm-6 col-md-4 col-lg-2 w-100 h-100 reco-item");
        divTwo.setAttribute("class", "card");
        img.setAttribute("src", recomendImage[i]);
        img.setAttribute("class", "w-100 h-100");
        divThree.setAttribute("class", "card-body reco-item-content");
        a.setAttribute("href", "#");
        a.textContent = "Just Another Product";
        p.textContent = "$179.00";
    
        recomendArea.appendChild(divOne)
        divOne.appendChild(divTwo);
        divOne.appendChild(divThree)
        divTwo.appendChild(img);
        divThree.appendChild(a);
        divThree.appendChild(strong);
        strong.appendChild(p);
        
    }
}

//Trade Service Area...
const tradeImage = ["images/juice.jpg","images/juice1.jpg","images/juice2.jpg","images/juice3.jpg"]
tradeService("tradeArea");

function tradeService(tradearea){
    for(var i = 0; i < 4; i++)
    {
        const tradeareal = document.getElementById(tradearea);
        const divOne = document.createElement("div");
        const divTwo = document.createElement("div");
        const divThree = document.createElement("div");
        const img = document.createElement("img");
        const a = document.createElement("a");
        const p = document.createElement("P");
        const strong = document.createElement("strong");
    
        divOne.setAttribute("class", "col-6 col-sm-6 col-md-3 col-lg-3 w-100 h-100 pr-0 trade-item");
        divTwo.setAttribute("class", "card");
        img.setAttribute("src", tradeImage[i]);
        divThree.setAttribute("class", "card-body text-center");
        a.setAttribute("href", "#");
        a.textContent = "Trade Assiramce";
        p.textContent = "ORDER PROTECTION";
        p.setAttribute("class", "text-muted")
    
        tradeareal.appendChild(divOne)
        divOne.appendChild(divTwo);
        divOne.appendChild(divThree)
        divTwo.appendChild(img);
        divThree.appendChild(strong);
        divThree.appendChild(p);
        strong.appendChild(a);
        
    }
}

// Region Area...

const regionText = [" China"," Germany"," Nepal"," Bhutan"," Pakistan"," Maldives"," Srilanka"," Malaysia"," Vietname"," Italy", " Barmuda", " Colombia"]
regionArea("region")
function regionArea(regionItem){
    for(let i = 0; i < 12; i++)
    {
        const region = document.getElementById(regionItem);
        const divOne = document.createElement("div");
        const h4 = document.createElement("h4");
        const a = document.createElement("a");
        divOne.setAttribute("class", "col-6 col-sm-6 col-md-2 col-lg-2 w-100 h-100 pr-0");
        h4.setAttribute("class", "fa fa-automobile");
        a.setAttribute("href", "#");
        a.textContent = regionText[i]
        divOne.appendChild(h4);
        h4.appendChild(a)
        region.appendChild(divOne)
        
    }
}