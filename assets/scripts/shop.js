class Shop {
	constructor (){
		this.minishop= document.getElementById ("shop") ;
		this.prodList= new ProductList () ;

		this.data = [
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
	 }

	renderCardTiles (){
		for (let item of this.data){
			let cardTemp= new CardTile (item.title, item.description, item.price, item.imageUrl) ;
			this.minishop.append (cardTemp.getCardTile ()) ;
		}
	}

	renderHeader (){
		let headDiv= document.createElement ("div") ;
		let headEl= document.createElement ("h1") ;

		headEl.setAttribute ("id", "mini") ;
		headEl.innerHTML= "Mini-Shop" ;
		headDiv.append (headEl) ;

		this.minishop.append (headDiv) ;
	}
}

class Product{
	   constructor (title, desc, price){
		   this.title= title ;
		   this.desc= desc ;
		   this.price= price ;
	   }
}

class ProductList{

	   constructor (){
		   this.productList= [] ;
		   this.totalCost= 0 ;
	   }

	   pushListItem (title, desc, price){
		   this.productList.push (new Product (title, desc, price)) ;
	   }

	   getProductList (){
		   return this.productList ;
	   }

	   currentCartValue (){
		   this.totalCost= 0 ;
		   for (let item of this.productList)
			   this.totalCost+= parseFloat (item.price) ;

		   return this.totalCost ;
	   }
}

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
		this.card.title= title;
		this.card.desc= desc ;
		this.card.price= price ;

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
		let cardClicked= document.getElementById (this.id) ;
		//let title= cardClicked.children [0].getAttribute ("alt") ;
		cardClicked.children[1].setAttribute ("style", "background: blue") ;
		pl.pushListItem (this.title, this.desc, this.price) ;
		console.log (pl.getProductList ()) ;
	}

	getCardTile () {
		console.log (this.id) ;
		return this.card ;
	}
}

let shopObject= new Shop () ;
let pl= shopObject.prodList ;
shopObject.renderHeader () ;
shopObject.renderCardTiles () ;