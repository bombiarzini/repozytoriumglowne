let a=3;
let b=4;
let c=5;
let poletrojkata;
let obwod=a+b+c;
let po=(a+b+c)/2;

if(a+b>c && b+c>a && c+a>b){
    poletrojkata=Math.sqrt(po*(po-a)*(po-b)*(po-c))
    console.log("Pole trojkata wynosi: ", poletrojkata);
}else{
    console.log("Taki trojkat nie istnieje");
}