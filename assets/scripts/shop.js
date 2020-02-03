const data = [
				{
					title: "Flower Pot",
					description: "A Flower Pot",
					price: 12.99,
					imageUrl: "assets/images/pot.png"
				},
				{
					title: "Audio Technica",
					description: "Audio Technica Headset",
					price: 89.99,
					imageUrl: "assets/images/headphones.jpg"
				}
			 ] ;

const shop= document.getElementById ("shop") ;
let cards= [] ;	

class CardTile {
	
	constructor (title, desc, price, imageUrl){
		this.title= title ;
		this.desc= desc ;
		this.price= price ;
		this.imageUrl= imageUrl ;
		
		this.id= "card_" +  Math.floor (Math.random () * 1000) ;

		this.card= document.createElement ("div") ;
		this.card.setAttribute ("class", "card") ;
		this.card.setAttribute ("id", this.id) ;
		this.card.addEventListener ("click", this.handleClick) ;

		let pic= document.createElement ("img") ;
		pic.setAttribute ("src", imageUrl) ;
		pic.setAttribute ("alt", title)  ;
		pic.setAttribute ("style", "width:100%") ;
	
		let container= document.createElement ("div") ;
    	container.setAttribute ("class", "container") ;
	
		let header4= document.createElement ("h4") ;
		header4.innerHTML= title ;
		container.append(header4) ;
	
		let description= document.createElement ("p") ;
		description.innerHTML= desc ;
		container.append (description) ;
	
		this.card.append (pic) ;
		this.card.append (container) ;
	}
	
	handleClick (event) {
		alert ("u clicked on card number: " + this.id) ;
	}

	getCardTile () {
		console.log (this.id) ;
		return this.card ;
	}
}

shop.append (headSection ()) ;
for (let item of data){	
	let cardTemp= new CardTile (item.title, item.description, item.price, item.imageUrl) ;	
	shop.append (cardTemp.getCardTile ()) ;
}

function headSection (){
	let headDiv= document.createElement ("div") ;
	let headEl= document.createElement ("h1") ;

	headEl.setAttribute ("id", "mini") ;
	headEl.innerHTML= "Mini-Shop" ;
	headDiv.append (headEl) ;

	return headDiv ;
}


	




	
	
	
	


