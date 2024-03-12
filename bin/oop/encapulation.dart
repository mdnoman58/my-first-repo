import 'person.dart';
void main(){
  person randomperson=person('Noman','hasan', 'male', 23);

  print(randomperson.getfullName());

  randomperson.changeGender('female');

  print(randomperson.getGender());

  print(randomperson.getfullName());
}


