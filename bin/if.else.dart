main(){
int firstNumber=12;
double secondNumber=3.1416;

int result=firstNumber+secondNumber.toInt();
double resultTwo=firstNumber+secondNumber;
print(result);

print(resultTwo.toStringAsFixed(2));
String name=resultTwo.toString();
print(name.runtimeType);
print(name);

double resultThree=15.24+double.parse(name);
print(resultThree);

}