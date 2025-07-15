 $(window).scroll(function () {
	$('nav,a,div').toggleClass('scrolled', $(this).scrollTop() > 300);
});

$(window).scroll(function () {
	$('nav,a,div').toggleClass('scrolledd', $(this).scrollTop() > 900);
});


//Clock

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =
		h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}


$(document).ready(function () {
	$("i.chan").click(function () {
		$(".clock").toggleClass("rainbow");
	});
	$("i.chan").dblclick(function () {
		$(".clock").toggleClass("clock2");
	});
});

//Clock End



$(document).ready(function () {
	$("i.add2").click(function () {
		$("#NCollapse").toggleClass("chnbc");
	});
});

// Menu

$(document).ready(function () {
	$(".faded1").mouseover(function () {
		$(".faker1").css("opacity", "1");
		$(".meku1").css("color", "red");
	});
	$(".faded1").mouseout(function () {
		$(".faker1").css("opacity", "0");
		$(".meku1").css("color", "#999");
	});
});

$(document).ready(function () {
	$(".faded2").mouseover(function () {
		$(".faker2").css("opacity", "1");
		$(".meku2").css("color", "red");
	});
	$(".faded2").mouseout(function () {
		$(".faker2").css("opacity", "0");
		$(".meku2").css("color", "#999");
	});
});

$(document).ready(function () {
	$(".faded3").mouseover(function () {
		$(".faker3").css("opacity", "1");
		$(".meku3").css("color", "red");
	});
	$(".faded3").mouseout(function () {
		$(".faker3").css("opacity", "0");
		$(".meku3").css("color", "#999");
	});
});

$(document).ready(function () {
	$(".faded4").mouseover(function () {
		$(".faker4").css("opacity", "1");
		$(".meku4").css("color", "red");
	});
	$(".faded4").mouseout(function () {
		$(".faker4").css("opacity", "0");
		$(".meku4").css("color", "#999");
	});
});

$(document).ready(function () {
	$(".faded5").mouseover(function () {
		$(".faker5").css("opacity", "1");
		$(".meku5").css("color", "red");
	});
	$(".faded5").mouseout(function () {
		$(".faker5").css("opacity", "0");
		$(".meku5").css("color", "#999");
	});
});

$(document).ready(function () {
	$(".faded6").mouseover(function () {
		$(".faker6").css("opacity", "1");
		$(".meku6").css("color", "red");
	});
	$(".faded6").mouseout(function () {
		$(".faker6").css("opacity", "0");
		$(".meku6").css("color", "#999");
	});
});


function openCity(evt, foodName) {
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	document.getElementById(foodName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
if ($('#defaultOpen')[0]) {
    $('#defaultOpen')[0].click();
}


// Menu End

// Sign Up

// Get the modal
var modal = $('#id01')[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


var input = $('#myInput')[0];
var text = $('#text')[0];
input.addEventListener("keyup", function (event) {

	if (event.getModifierState("CapsLock")) {
		text.style.display = "block";
	} else {
		text.style.display = "none"
	}
});

var myInput = $('#psw')[0];
var letter = $('#letter')[0];
var capital = $('#capital')[0];
var number = $('#number')[0];
var length = $('#length')[0];

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
	$('#message')[0].style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
	$('#message')[0].style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if (myInput.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}

	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if (myInput.value.match(upperCaseLetters)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}

	// Validate numbers
	var numbers = /[0-9]/g;
	if (myInput.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	// Validate length
	if (myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
}

// Sign Up End

// Search

function openSearch() {
	$('#myOverlay')[0].style.display = "block";
}

function closeSearch() {
	$('#myOverlay')[0].style.display = "none";
}

function myFunction() {
	var input, filter, ul, li, a, i, txtValue;
	input = $('#myInputt')[0];

	filter = input.value.toUpperCase();
	ul = $('#myUL')[0];
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

// Search End

// User 


// Set the date we're counting down to
var countDownDate = new Date("May 21, 2021 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	var demoElem = document.getElementById("demo");
	if (demoElem) {
		demoElem.innerHTML = days + "g " + hours + "s " + minutes + "d " + seconds + "sn ";
		if (distance < 0) {
			clearInterval(countdownfunction);
			demoElem.innerHTML = "Bitti";
		}
	}
}, 1000);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dott");
	if (!slides.length || !dots.length) return; // Eğer hiç slide veya dot yoksa fonksiyonu bitir
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activee", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " activee";
}

// User End

//Galeri

$(function () {
	$('.pop').on('click', function () {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');
	});
});

//Galeri End

// Kampanyalar

let optionsSmall = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y", "z", "q", "w", "x"];
let optionsBig = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z", "Q", "W", "X"];
let optionsNumber = [0,1,2,3,4,5,6,7,8,9];
let optionsOther = ["/","*","#","@","&","-","_","?","=",">","&lt","!"];

let optionsAll = optionsSmall.concat(optionsNumber,optionsBig,optionsOther);  

function password(){
    let yourDigit = 24;
    let randomPassword = '';
    for(let i = 0; i < yourDigit; i++){
        let randomNum = Math.random()*optionsAll.length;
        randomPassword += optionsAll[Math.floor(randomNum)];
    }
    return randomPassword;
}

var txt = password();
let ci = 0;
var btn = document.getElementById('buttontxt');

if (btn) {
    btn.addEventListener('click', function() {
        btn.disabled = true; // Butonu devre dışı bırak
        var target = document.getElementById("demooo");
        target.innerHTML = ""; // Önce temizle
        var i = 0;
        function writeChar() {
            if (i < txt.length) {
                target.innerHTML += txt.charAt(i);
                i++;
                setTimeout(writeChar, 50); // Hızını buradan ayarlayabilirsin
            }
        }
        writeChar();
    }, { once: true });
}


// Son Güncelleme İle Password Generator Kullanılmıştır 3/26/21

// Kampanyalar End

// Random

//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Yeni bir yemeğin bulunuşu, insanı, yeni bir yıldızın bulunuşundan çok daha mutlu kılar.",
      author: "- Burger"
    },
    {
      quote:
        "Yemekler de tıpkı giyim zevkleri ve evlerinin iç dizaynı gibi insanları açıkça tanımlardı.",
      author: "- Pizza"
    },
    {
      quote:
        "İnsanlar, en sevdikleri yemeği başkalarının da seveceğini sanırlar ve onları bu yemekten tatmaya zorlarlar.",
      author: "- Izgara Et"
    },
    {
      quote: "Yemek aşkından daha samimi başka bir aşk düşünemiyorum Söz ola kese savaşı, Söz ola kestire başı.",
      author: "- Sosisli"
    },
    {
      quote:
        "Sağlıklı beslenmenin püf noktası az veya çok değil, dengeli ve besleyici yemektir.",
      author: "- Tatlı"
    },
    {
      quote:
        "Güzel bir yemek yemeden iyi düşünebilen, sevebilen ya da iyi bir uyku çekebilen kimseyi tanımadım.",
      author: "- Atıştırmalık"
	},
	{
	  quote:
		"Akşam yemeğini bırakmayın, bir avuç hurma ile de olsa akşamı yiyin. Çünkü akşamın terki insana (erken) ihtiyarlık getirir.",
	  author: "- İçeçek"
	},
	{
	  quote:
		"İyi bir akşam yemeğinin iyi bir sohbet açısından önemi çok büyüktür. Kişi iyi bir yemek yememişse, iyi düşünemez, iyi sevemez, iyi uyuyamaz",
	  author: "- Her şey"
	},
  ];

  const btn = document.getElementById("generate-btn");

  if (btn) {
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);

      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  }
})();

//Random End

//Shopping

// show cart

(function(){
    //target cart button
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })


})();

// add items to the cart

(function(){

var addCounter = 0;

const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
        //make sure event fires only if it has a parent of a certain class.
        if(event.target.parentElement.classList.contains('store-item-icon')){

            let fullPath = event.target.parentElement.previousElementSibling.src;

            let pos = fullPath.indexOf('img') + 3; //use the 3 to get rid of the 'img' string

            let partPath = fullPath.slice(pos);

            const item = {};

            item.img = `/menu/img/${partPath}`;

            let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            item.name = name;

            let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

            let finalPrice = price.slice(1).trim();

            item.price = finalPrice;

            const cartItem = document.createElement('div');

			
            cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3' , 'deleteItem');

			cartItem.id = `deleteItemId${addCounter}`
			
            cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle w-25" id="item-img" alt="">
			<div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
			<span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a id='cart-item-remove-id${addCounter}' class="cart-item-remove mousePointer"><i class="fas fa-trash"></i></a></div>`;
			
			
			
		
		
		//select cart
		
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');
		
        cart.insertBefore(cartItem, total);
		alert("Ürün Listenize Eklendi");
        showTotals();

		//Remove One Piece

		// FunctioncALL

		let capitalCity = `cart-item-remove-id${addCounter}`;
		let antalya = `deleteItemId${addCounter}`;

		document.getElementById(capitalCity).addEventListener("click",function() {
			let valueItem = document.getElementById(capitalCity).parentElement.children[1].children[1].innerHTML;
			let valuePrice = valueItem[0] + valueItem[1];
			parseFloat(valuePrice);

			let valueTotalPrice = document.getElementById("cart-total").innerHTML;
			let valueTotalAll = valueTotalPrice[0] + valueTotalPrice[1];
			parseFloat(valueTotalAll);

			let itemCount = document.getElementById("item-count").innerHTML;
			parseFloat(itemCount);
			
			let lastTotal = valueTotalAll - valuePrice;
			document.getElementById("cart-total").innerHTML = lastTotal +  ".00";
			document.querySelector(".item-total").innerHTML = lastTotal +  ".00";	
			document.getElementById("item-count").innerHTML = itemCount - 1;

			document.getElementById(antalya).remove();
		});
		addCounter++;

		document.getElementById("clear-cart").addEventListener("click",function() {
			let delItem = document.querySelectorAll(".deleteItem");
			delItem.forEach(del => del.remove());
			document.getElementById("cart-total").innerHTML = "0.00";
			document.getElementById("item-count").innerHTML = "0";
			document.querySelector(".item-total").innerHTML = "0.00";	
		});
		
	}
});
});


// show totals
function showTotals(){
	
	const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
		total.push(parseFloat(item.textContent));
    })
    
    const totalMoney = total.reduce(function(total, item){
		total += item;
        return total;
    },0);
	
    const finalMoney = totalMoney.toFixed(2);
    
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
}

})();


//Things learned
//DOM traversal using previousElementSibling
//element.insertBefore
//reduct method

//Shopping End

//Vote

const voteEl = document.querySelector('.wrapper');
const counter = document.querySelector('.wrapper > .counter');
let votes = 83;
let voted = false;

if (counter && voteEl) {
    counter.innerHTML = votes;

    voteEl.addEventListener('click', () => {
        if (voted) {
            removeVote();
        } else {
            addVote();
        }
    });
}

const addVote = () => {
    if (counter) {
        votes++;
        counter.innerHTML = votes;
        voted = true;
    }
};

const removeVote = () => {
    if (counter) {
        votes--;
        counter.innerHTML = votes;
        voted = false;
    }
};

const voteElx = document.querySelector('.wrapperx');
const counterx = document.querySelector('.wrapperx > .counterx');
let votesx = 83;
let votedx = false;

if (counterx && voteElx) {
    counterx.innerHTML = votesx;

    voteElx.addEventListener('click', () => {
        if (votedx) {
            removeVotex();
        } else {
            addVotex();
        }
    });
}

const addVotex = () => {
    if (counterx) {
        votesx++;
        counterx.innerHTML = votesx;
        votedx = true;
    }
};

const removeVotex = () => {
    if (counterx) {
        votesx--;
        counterx.innerHTML = votesx;
        votedx = false;
    }
};

//Vote End

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    if (form) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').min = today;
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Teşekkürler! Rezervasyonunuz alınmıştır. Onay e-postası kısa süre içinde gönderilecektir.');
            form.reset();
        });
    }
});
