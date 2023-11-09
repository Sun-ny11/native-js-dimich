
export function sum(a:number, b:number) {
   return a+b
}
export function mult(a:number, b:number) {
   return a*b
}



export function splitIntoWords(sentense: string) {
   return sentense.toLocaleLowerCase().split(" ").map((i)=>i.replace(/[!.-]/, '')).filter((i)=>i!=="")

}