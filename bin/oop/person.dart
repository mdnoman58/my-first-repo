class person{
  String _firstName;
  String _lastName;
  String _gender;
  int age=23;

  person(this._firstName,this._lastName,this._gender,this.age);
  //getter method
  String getfullName(){

    return _firstName+''+_lastName;//String concat
  }
  //setter method
  void changeGender(String gender){
  if (gender=='male'||gender=='female'){
    _gender=gender;
  }
  }
  //getter method
  String getGender(){
    return _gender;
  }
}