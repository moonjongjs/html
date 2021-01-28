//ECMA5
function ecmaScript5_003() {
    console.log('ECMA5 Script');
}
//ECMA6
const ecmaScript6_003 = () => {
    console.log('ECMA6 Script');
}
ecmaScript5_003();
ecmaScript6_003();




//ECMA5
function ecmaScript5_004() {
    console.log('ECMA5 Script');
}
//ECMA6 화살 함수
const ecmaScript6_004 = () => {
    console.log(`ECMA6 Script ${`빽틱 안에 내용`}`);
}
ecmaScript5_004();
ecmaScript6_004();





//ECMA6 포멧팅 출력
function ecmaScript6_005() {
    console.log(`이름:%s`, `Hellow Javascript`);
    console.log(`나이:%s`, 33);
    console.log(`몸무게:%dkg`, 76.35);
    console.log(`키:%dcm`, 172);
}

ecmaScript6_005();


//ECMA6 변수와 상수 그리고 빽틱을 이용한 포멧팅
const a = `Hello`;
let   b = `Javascript`;
const c = `Jquery`;
const d = `Vue.js`;
const e = `React.js`;
function ecmaScript6_006() {    
    //a = `moonjong`; 변수 상수 타입은 재할당 안됨 error
    b = `moonseonjong`;
    console.log(`변수 const a의 내용은 ${a} 입니다.`);
    console.log(`변수 let b의 내용은 ${b} 입니다.`);
    console.log(`변수 c의 내용은 ${c}, d의 내용은 ${d}, e의 내용은 ${e} 입니다.`);
   
}

ecmaScript6_006();