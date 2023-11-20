
type coursesType = {
   title:string
   price: number
}

const courses = [
   {title:"CSS", price:150},
   {title:"JS", price:200},
   {title:"React", price:110},
];

const cheepPredicate = (course:coursesType) => {
   return course.price < 160
}