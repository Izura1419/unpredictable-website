let welcome = document.querySelector(".welcome");

function bye() {
	welcome.style.animation = "bye 2s linear";
}

function byeBye(){
	welcome.style.display = "none";
}

setTimeout(bye,3000);
setTimeout(byeBye, 5000);

function get(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let body = document.querySelector("body");

let alph = ["A","E","I","O","U","Y","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];


function createRandom(){
	let rdNum = document.createElement("span");
		rdNum.id = "rdNum";

		if (get(0,1) == 1){
			rdNum.innerHTML = get(0,10);
		}
		else{
			let a = get(0,25);
			rdNum.innerHTML = alph[a];
			console.log(alph[a]);
		}
		
		rdNum.style.fontSize = get(2,8) + "em";

		let g = get(0,360) + "deg";
		let l = get(0,360) + "deg";
		let k = get(-75,75) + "deg" + "," + get(-75,75) + "deg";

		rdNum.style.transform = `rotateX(${g}) rotateY(${l}) skew(${k})`;

		rdNum.style.color = `rgba(${get(0,255)},${get(0,255)},${get(0,255)},${get(0.1,1)})`;

		rdNum.style.position = "absolute";
		rdNum.style.top = get(0,90) + "%";
		rdNum.style.left = get(0,90) + "%";

		body.appendChild(rdNum);
}

for (let i = 0;i < get(1,3);i++){
	let interRd = setInterval(function(){createRandom();}, get(0,500));
	setTimeout(function(){clearInterval(interRd)},20000);
}