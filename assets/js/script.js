// let button =document.querySelectorAll(".btn");

// // button.addEvenListener.("click",function(){
// // 	alert("hi")
// // })

// // for(let= x=0; x<button.legnth; x++){
// // 	button[x].addEvenListener("click",function(){
// // 		alert("hi")
// // 	})
// // }

// /*
// jQuery basic Syntax
// document.querySelectorAll		$()
// socument.querySelector.action   $().click()
// this							$(this)
// document.querySelector.value	$().val()
// .style property					.css()
// .style.fontWeight = 'bold'		.css('font-weight','bold')
// .innerHTML						.html()
// .innerHTML = 'new value'		.html('new value')
// .style.display = none			.hide()
// .style.display = block			.show()

// */



// $(".btn").click(function(){
// 	// alert("hi")
// 	//this will refer to the element that triggered the event
// 	console.log($(this));
// 	//gets the value of the elements that triggered yhe event
// 	console.log($(this).val());
// 	$(this).css('border','2px solid black');
// 	$(this).css('font-weight','bold');
// 	$(this).html('clicked')
// })

// // $("#btn3").click(function(){
// // 	$("h1").hide()
// // })

// // $("#btn3").dblclick(function(){
// // 	$("h1").show()
// // })

// //toggle method between show and hide method
// $("#btn3").click(function(){
// 	// $("h1").toggle();
// 	$("h1").toggle(500) // 0.5s
// })

// $("li").mouseenter(function(){
// 	$(this).css('font-weight','bold')
// })

// $("li").mouseleave(function(){
// 	$(this).css('font-weight','normal')

// })

// $(".hello").click(function(){
// 	$(this).animate({
// 		'left' : '100px',
// 		'bottom' : '100px',
// 		'font-size' :  '24px'
// 	})
// })

// // selector.classList.add('classToadded')
// // selector.addClass('classToBeAdd')

// // $("li").click(function(){
// // 	$(this).addClass("done")
// // })

// // $("li").dblclick(function(){
// // 	$(this).removeClass("done")
// // })

// // selector.toggleClass('className')
// $("li").click(function(){
// 	$(this).toggleClass("done")
// })


// player object
let player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)
//ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

const ai2 = {
	character : $("#ai2"),
	aiPos2 : 0
}

const ai3 = {
	character : $("#ai3"),
	aiPos3 : 0
}

const ai4 = {
	character : $("#ai4"),
	aiPos4 : 0
}



console.log(ai)	



let playerPosition = 0;
let aiPosition = 0;
let ai2Position = 0;
let ai3Position = 0;
let ai4Position = 0;



player.character.click(function(){
	// console.log($(this))

	$(this).animate({
		'left' : (playerPosition += 100) + 'px'
	})
	console.log('this is the current value of player position' + playerPosition)
	player.playerPos = playerPosition
	// console.log(player)
	result()

	setTimeout(player,500)

})

//easy
const aiMove = () =>{
	if(ai.aiPos < 1000){			
			ai.character.animate({
			'left' : (aiPosition += 20 ) + 'px'
			})						
	}
	if(ai2.aiPos2 < 1000)
			ai2.character.animate({
			'left' : (ai2Position += 40 ) + 'px'
			})	

	if(ai3.aiPos3 < 1000)
			ai3.character.animate({
			'left' : (ai3Position += 10 ) + 'px'
			})	

	if(ai4.aiPos4 < 1000)
			ai4.character.animate({
			'left' : (ai4Position += 10 ) + 'px'
			})	


	else{
		return true
	}
	ai.aiPos = aiPosition
	ai2.aiPos2 = ai2Position
	ai3.aiPos3 = ai3Position
	ai4.aiPos4 = ai4Position
	result()
	if(ai.aiPos == 1000 || ai2.aiPos2 == 1000 || ai3.aiPos3 == 1000 || ai4.aiPos4 == 1000 ) {
		alert("Game Over")
		return true
	} else {
		setTimeout(aiMove,500)
	}	
	
}

// move the ai
$("#start").click(function(){
	aiMove()
})

// medium

const aiMove2 = () =>{
	if(ai.aiPos < 1000){
			ai.character.animate({
			'left' : (aiPosition += 50 ) + 'px'
		})
	if(ai2.aiPos2 < 1000)
			ai2.character.animate({
			'left' : (ai2Position += 10 ) + 'px'
			})	

	if(ai3.aiPos3 < 1000)
			ai3.character.animate({
			'left' : (ai3Position += 30 ) + 'px'
			})	

	if(ai4.aiPos4 < 1000)
			ai4.character.animate({
			'left' : (ai4Position += 40 ) + 'px'
			})	

	}else{
		return true
	}
	ai.aiPos = aiPosition
	ai2.aiPos2 = ai2Position
	ai3.aiPos3 = ai3Position
	ai4.aiPos4 = ai4Position
	result()
	console.log(ai.aiPos)
	if(ai.aiPos == 1000 || ai2.aiPos2 == 1000 || ai3.aiPos3 == 1000 || ai4.aiPos4 == 1000 ) {
		alert("Game Over")
		return true
	} else {
		setTimeout(aiMove2,500)
	}

}

// move the ai
$("#start2").click(function(){
	aiMove2()
})



const aiMove3 = () =>{
	if(ai.aiPos < 1000){
			ai.character.animate({
			'left' : (aiPosition += 50 ) + 'px'
		})
	if(ai2.aiPos2 < 1000)
			ai2.character.animate({
			'left' : (ai2Position += 40 ) + 'px'
			})	

	if(ai3.aiPos3 < 1000)
			ai3.character.animate({
			'left' : (ai3Position += 100 ) + 'px'
			})	

	if(ai4.aiPos4 < 1000)
			ai4.character.animate({
			'left' : (ai4Position += 80 ) + 'px'
			})		


	}else{
		return true
	}
	ai.aiPos = aiPosition
	ai2.aiPos2 = ai2Position
	ai3.aiPos3 = ai3Position
	ai4.aiPos4 = ai4Position
	result()
	if(ai.aiPos == 1000 || ai2.aiPos2 == 1000 || ai3.aiPos3 == 1000 || ai4.aiPos4 == 1000 ) {
		alert("Game Over")
		return true
	} else {
		setTimeout(aiMove3,1000)
	}
}

// move the ai
$("#start3").click(function(){
	aiMove3()
})




const result = () => {
	if(player.playerPos === 1000){
		alert('player won!')
		alert('Congratulations !!!')
		location.reload();

		return true
	}
	if(ai.aiPos === 1000){
		alert('ai1 won!')
		return true
	}
	if(ai2.aiPos2 === 1000){
		alert('ai2 won!')
		return true
	}
	if(ai3.aiPos3 === 1000){
		alert('ai3 won!')
		return true
	}

	if(ai4.aiPos4 === 1000){
		alert('ai4 won!')
		return true
	}






}