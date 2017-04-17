class Person{

     private _firstname : String = "";
     private enumerable : Boolean = true;
     private configurable : Boolean = true;


Constractor(_firstname : String){
   this._firstname = _firstname;

}
   get firstname(){
       return this._firstname;
}
   set firstname(value : String){
       this._firstname = value.toUppercase();
}

Person.firstname = "Asaad”;
console.log(Person._firstname);
}
