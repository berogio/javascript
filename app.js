//სხვაობა let, const, და var ცვლადებში არის შედეგი
//var x = 5;         let x = 5;           const x = 5;
//var x = 6;         x = 6;
//x = 7;



//კომენტარი არსებობს ორი სახის 
//პირველი კომენტარი
/* მეორე კომენტარი */


//${სთრინგში გამოვიყენოთ ცვლადი}
let vorname = `giorgi`;
let nachname = `beridze`;
//კონსულში გამოგვიტანე შემდეგი: ჩემი სახელია giorgi, ხოლო გვარი beridze
let name = `ჩემი სახელია ${vorname}, ხოლო გვარი ${nachname}`;
console.log(name);


//მნშიშვლეობა შეგვიძლია ჩავწეროთ 3 ნაირად
var x = `giorgi`;
`   `
var x = "giorgi";
"   "
var x = 'giorgi';
'   '

//რომ გავიგოთ როგორი ტიპის მნიშვნელობა აქვს ცვლადს უნდა დავწეროთ
var x = 6;
console.log(typeof(x));
//კონსულში დაილოგება nummber
var x = `6`;
console.log(typeof(x));
//კონსულში დაილოგება string


//  ერთ ცვლადში ბევრი ობიექტის გაკეთება თვისებებით

let car = {
    model: `mercedes`,
    yar: `2002`,
    color: `red`,
};

console.log(car.model);
// დაიბეჭდება mercedes


//boolean გვიბეჟდავს ტერმინალში პირობა სწორია თუ არა მაგალითად
console.log(Boolean(1 > 2));
// დაგვიბეჭდავს false
console.log(Boolean(2 > 1));
// დაგვიბეჭდავს try
// თუ ცვლადს არ აქვს მნიშვნელობა boolean დაგვიბრუნებს false ასევე თუ მისი მნიშვნელობა 0 ია მაგალითად
let x = 0;
let x;
let x = undefined;
let x = flase;
console.log(x);
//დაგვიბრუნებს false




//მასივი 
let cars = [`bmw`, `mercedes`, `peugeot`, [`opel`, `renault`], { yar: 2022, color: `red` }]
    //პოზიც. 0        1          2                3                    ობიექტი 4
    //რომ გამოვიძახოთ მერცედესი ვწერთ
console.log(cars[1]);
//რომ გამოვიძახოთ მეოთხე ობიეკტი ვწერთ
console.log(cars[4]);
//რომ გამოვიძახოთ მეოთხე ობიექტში მხოლოდ 1 პროფერთის ველიუ მაგ: 2022_ს ვწერთ
console.log(cars[4].yar) //ანუ პოზიცის ნომერი და შემდეგ წერტილით ამ პოზიციაზე მყოფი ფროფერთი და გამოგვიტანს ველიუს
    // იმისათვის რომ დავითვალოთ რამდენი ინდექსია ჩვენს მასივში ანუ სიგრძე უნდა გამოვიძახოთ
console.log(cars.length) // დაგვიბრუნებს 5_ს



//მასივი და      ობიექტი სხვაობა    მასივი ინახება []   ხოლო ობიექტი{}
const cars = [
    `bmw`,
    `mercedes`,
    `opel`
]

const cars = {
    name: `bmw`,
    color: `red`,
    yar: 2022
}


//იმისთვის რომ გამოვიძახოთ მასივში მყოფი ელემენტი ვწერთ მასივის ინდექსის ნომერს მაგალითად 
console.log(cars[2]); //გამოგვიტანს opel_ს
//ხოლო იმისთვის რომ გამოვიძახოთ ობიექტში მყოფი პროფერთის რომელიმე ველიუ ვწერთ
console.log(cars.color); //გამოგვიტანს red_ს
//ობიექტის და მასივის ტიპი ორივესი არის objec
console.log(typeof.cars); //გამოგვიტანს objec_ს
console.log(typeof.cars); //გამოგვიტანს objec_ს (იგულისხმება მასივის cars)
//იმისათვის რომ გავიგოთ კონკრეტული ობიექტი არის თუ არა მასივი ვწერთ
console.log(Array.isArray(cars)); //პირველ შემთხვევაში გამოგვიტანს try_ს მეორე შემთხვევაში false_ს
//ასევე არის მეორე ვარიანტი იმის გასაგებათ არის თუ არა ობიექტი მასივი
console.log(cars instanceof Array);




//ფუნქცია ჯავასკრიპტში
function greet() {

}

//ფუნქციის გამოძახებისთვის ვწერთ
great();

//ფრჩხილებში შეგვიძლია ჩავუწეროთ არგუმენები (ერთმანეთისგან გამოიყოფა მძიმით) მაგალითად
function greet(name, lastname, yar) {
    console.log(`გამარჯობა, ${name}`)
}
greet(); // გადავცეთ ფუნქციას არგუმენტი მაგალითად
greet(`giorgi`);
// consol ში დაილოგება gamarjoba giorgi!
greet(`giorgi`, `beridze`, 1994)
    //  name   lastname    yar