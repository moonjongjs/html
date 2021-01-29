;(function(){
    const nodeObj = {
        init: function(){
            this.node_003();            
            this.node_004();            
            this.node_005();            
            this.node_006();            
            this.node_007();            
            this.node_008();            
            this.node_009();            
            this.node_010();            
        },
        node_003: function(){
            function ecmaScript5_003() {
                console.log('ECMA5 Script');
            }
            //ECMA6
            const ecmaScript6_003 = () => {
                console.log('ECMA6 Script');
            }
            ecmaScript5_003();
            ecmaScript6_003();
            
        }, 
        node_004: function(){
                        
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
                        
        }, 
        node_005: function(){
            
            //ECMA6 포멧팅 출력
            function ecmaScript6_005() {
                console.log(`이름:%s`, `Hellow Javascript`);
                console.log(`나이:%s`, 33);
                console.log(`몸무게:%dkg`, 76.35);
                console.log(`키:%dcm`, 172);
            }
            
            ecmaScript6_005();
            
        }, 
        node_006: function(){
            
            //ECMA6 변수와 상수 그리고 빽틱을 이용한 포멧팅 006~009
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
            
        }, 
        node_007: function(){
            let a = '90';
            let b = 90;
            let c = a+b;
            let hap = null;
            
            //ECMA6 수치와 문자 isNan()  is not number        
            function ecmaScript6_010() { 
                console.log(`a = %s`, a);
                console.log(`a = %d`, a);
                console.log(`c = %d`, c);
                console.log(`c = %d`, a+b);
                console.log(`c = %d`, a+b);
                console.log(`c = %d`, a*b);
                console.log(`c = %d`, b*b);
                console.log(`a = %s`, isNaN(a));
                console.log(`b = %s`, isNaN(b));
                console.log(`c = %s`, isNaN(c));
                console.log(`a =  ${isNaN(a)}`);
                console.log(`b =  ${isNaN(b)}`);
                console.log(`c =  ${isNaN(c)}`);
                console.log(`c =  ${Number(a)+b}`);
                console.log( b%2 == 0 ? '짝수':'홀수' );

            }

            ecmaScript6_010();
            
        }, 
        node_008: function(){

        }, 
        node_009: function(){

        }, 
        node_010: function(){

        }, 
        node_011: function(){

        },  
        node_012: function(){

        }  
    }

    nodeObj.init();

})();

