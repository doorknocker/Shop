const app= document.getElementById ("app") ;
const totalValueBtn= document.createElement ("button") ;
const totalValue= document.createElement ("p") ;

class Product{
	   constructor (desc, price, imgUrl){
		   this.desc= desc ;
		   this.price= price ;
		   this.imgUrl= imgUrl ;
	   }
}

class ProductList{
	   
	   constructor (){
		   this.productList= [] ;
		   this.totalCost= 0 ;
	   }
	   
	   createList(){		
		   this.productList.push (new Product ("Flower Pot", "12.99", "")) ;
		   this.productList.push (new Product ("Mug", "5.99", "")) ;
	   }

	   pushListItem (title, price, imageUrl= ""){
		   this.productList.push (new Product (title, price, imageUrl)) ;
	   }
	   
	   currentCartValue (){	   
		   this.totalCost= 0 ;
		   for (let item of this.productList)
			   this.totalCost+= parseFloat (item.price) ;
		    
		   return this.totalCost ;
	   }	   
}

								

											









		   
		   
		   