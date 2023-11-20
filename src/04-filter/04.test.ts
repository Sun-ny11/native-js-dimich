

test("Courses should be chipper 160", ()=> {
const courses = [
   {title:"CSS", price:150},
   {title:"JS", price:200},
   {title:"React", price:110},
];


const coursesFilter = courses.filter(course => course.price < 160)

expect(coursesFilter.length).toBe(2)
expect(coursesFilter[0].title).toBe("CSS")
expect(coursesFilter[1].title).toBe("React")
})