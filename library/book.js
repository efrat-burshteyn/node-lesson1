export class Book{
   static id=1;
   static service=[];
    constructor(name,category){
    this.code=Book.id++;
     this.name=name;
    this.category=category;
    this.isTook=false;
    }
}
export class Library_sevice {
      returnBook(id){
        return Book.service.find(book=>book.code===id)
    }
    print(){
        if(Book.service.length===0)
             console.log("library is empty")
        else{
             Book.service.forEach(book=>{
                    console.log(`code: ${book.code}
                                 name: ${book.name}
                                 category: ${book.category}`)
                })
            }
    };
    addBook( name,category){
       const b=new Book( name,category);
       Book.service.push(b);
    }
    deleteBook(id){
       Book.service=Book.service.filter(book=>book.code!==id);
    }
    updateBook(id){
     const b=  this.returnBook(id);
      b.isTook=! b.isTook;
    }
    
}

  
