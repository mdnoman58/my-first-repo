
void main(){
  List <Student>StudentList=[];
  //dat- type variable name=vale;
  //type(class-name) name=class-name;
  Student studentone=Student();

  studentone.name ='Noman';
  studentone.age =23;
  studentone.address='uttara17,dhaka';
  studentone.id='03/22/62/3698';
  studentone.dept='CSE';
  Student studenttwo=Student();
  studenttwo.name='Rafat';
  studenttwo.age=25;
  studenttwo.address='uttara17,dhaka';
  studenttwo.id='03/22/62/3711';
  studenttwo.dept='CSE';
  StudentList.add(studentone);
  StudentList.add(studenttwo);
  print(StudentList);
}
class Student{
  late String name;
  late String address;
  late int age;
  late String id;
  late String dept;
  //constructor
  Student(){


  }
}