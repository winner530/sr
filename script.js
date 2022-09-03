// const parent = document.querySelector('.content');


// const button = document.createElement('div');
// button.className = 'button';
// button.innerHTML = `<a href="" class="button__link">Заказать услугу</a>`;

// parent.addEventListener("mouseover", function (e) {
// 	function remo() {
// 		targett.firstElementChild.remove();
// 		targett.append(button);
// 	}
// 	let target = e.target.closest('.element');
// 	let targett = e.target;
// 	if(targett.classList.contains('element')){
// 		if(targett.firstElementChild.classList.contains('img')){
// 			remo();
// 		}
// 	}else{
// 		targett = targett.parentElement;
// 		if(targett.classList.contains('element')){
// 			if(targett.firstElementChild.classList.contains('img')){
// 				remo();
// 			}
// 		} else {
// 			targett = targett.parentElement;
// 			if(targett.classList.contains('element')){
// 				if(targett.firstElementChild.classList.contains('img')){
// 					remo();
// 				}
// 			}
// 		}
		
// 	}
// 	if(!targett) return;
// });

// parent.addEventListener("mouseout", function(e) {
// 	function addd() {
// 		button.remove();
// 	}
// 	let target = e.target.closest('.element');
// 	let targett = e.target;
// 	addd();
// 	if(targett.classList.contains('element')){
// 		if(targett.firstElementChild.classList.contains('img')){
// 			addd();
// 		}
// 	}else{
// 		targett = targett.parentElement;
// 		if(targett.classList.contains('element')){
// 			if(targett.firstElementChild.classList.contains('img')){
// 				addd();
// 			}
// 		}else {
// 			targett = targett.parentElement;
// 			if(targett.classList.contains('element')){
// 				if(targett.firstElementChild.classList.contains('img')){
// 					addd();
// 				}
// 			}
// 		}
		
// 	}
// 	if(!targett) return;
// })


const parent = document.querySelector('.content');

parent.addEventListener("mouseover", function(e){
	let target = e.target.closest(".shell");
	if(!target) return;
	let two;
	let god = target.parentElement;
	for(let i = 0; i < god.childNodes.length; i++){
		if(god.childNodes[i].className == 'two') {
			two = god.childNodes[i];
			break;
		}
	}
	god.lastElementChild.style.opacity = "0";
	two.style.opacity = "1";
});

parent.addEventListener("mouseout", function(e){
	let target = e.target.closest(".shell");
	if(!target) return;
	let two;
	let god = target.parentElement;
	for(let i = 0; i < god.childNodes.length; i++){
		if(god.childNodes[i].className == 'two') {
			two = god.childNodes[i];
			break;
		}
	}
	god.lastElementChild.style.opacity = "1";
	two.style.opacity = "0";
});