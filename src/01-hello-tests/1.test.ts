import { mult, splitIntoWords, sum } from "./1";
let a:number
let b:number
let c:number

beforeEach(()=>{
   a = 1;
   b = 2;
   c = 3;
})
test("sum shoud be correct", ()=>{
   //данные

   //действия
   const result = sum(a,b);
   const result2 = sum(a,c);

   //результат
   expect(result).toBe(3);
   expect(result2).toBe(4);
})

test("mult shoud be correct", ()=>{
   //данные

   //действия
   const result = mult(a,b);
   const result2 = mult(a,c);

   //результат
   expect(result).toBe(2);
   expect(result2).toBe(3);
})

test("splitIntoWords shoud be correct", ()=>{
   const sent1 = "Hello my friends!"
   const sent2 = "JS - is good language ."

   const result = splitIntoWords(sent1)
   const result2 = splitIntoWords(sent2)

   expect(result.length).toBe(3)
   expect(result[0]).toBe("hello")
   expect(result[1]).toBe("my")
   expect(result[2]).toBe("friends")

   expect(result2.length).toBe(4)
   expect(result2[0]).toBe("js")
   expect(result2[1]).toBe("is")
   expect(result2[2]).toBe("good")
   expect(result2[3]).toBe("language")
})