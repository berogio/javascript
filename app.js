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