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
	   
	   currentCartValue (){	   
		   this.totalCost= 0 ;
		   for (let item of this.productList)
			   this.totalCost+= parseFloat (item.price) ;
		    
		   return this.totalCost ;
	   }	   
	   
	   render (){
		   let list= document.createElement ("ul") ;		   
		   
		   for (let item of this.productList){			   
				let listItem= document.createElement ("li") ;
				listItem.innerHTML= `Description: ${item.desc}, Price: \$${item.price}` ;
				list.append (listItem) ;			
	       }	   
		   app.append (list) ;
		}
}



let pdList= new ProductList () ;
pdList.createList () ;
pdList.render () ;

app.append (totalValueBtn) ;
app.append (totalValue) ;

totalValueBtn.addEventListener ("click", function (){
									totalValue.innerHTML= "" ;
									totalValue.innerHTML= pdList.currentCartValue().toString () ;
								}) ;
								

											









		   
		   
		   