const {Book,Library_sevice}= require('./book');
const {User,Users_service}= require('./user');
const LibrarySevice=new Library_sevice();
const  UsersService=new Users_service(); 
LibrarySevice.addBook("abc","feelings");
LibrarySevice.addBook("xxx","afraid");
UsersService.addUser("33344343","ari","feelings");
UsersService.addUser("33344342","beni","afraid");
const inputb=parseInt(process.argv[2]);
const inputu=process.argv[3];
const findBook=LibrarySevice.returnBook(inputb);
const findUser=UsersService.returnUser(inputu);

if(findBook){
    console.log(findBook)
}
else
    console.log("error!")
if(findUser)
    console.log(findUser)
else
    console.log("error!")
if(findBook && findUser){
    const isType=findBook.category===findUser.type
    if (isType===false)
        console.log("error! type is not match");
    const isTookB=findBook.isTook
    if(isTookB===true)
        console.log("error! the book tooked");
    const haveBook=findUser.isTook;
    if(haveBook===true)
        console.log("error! to this man have a book");
    if(isType && !isTookB && !haveBook){
        findBook.isTook=true;
        findUser.isTook=true
    }




}

    
