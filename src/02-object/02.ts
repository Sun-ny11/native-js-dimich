type StydentType = {
   name: string
   age: number
   gender: string
   address:AddressType
   tecnologies:TecType
}
type AddressType = {
   country:string
   city:CityTypeLocal
}
type CityTypeLocal = {
   title:string
}

type TecType = {
   id: number
   title:string
}

const stydent = {
   name: "Stanislav",
   age: 25,
   gender: "male",
   address: {
      country: "Russia",
      city: {
         title: "SPB",
      },
   },

   tecnologies: [
      {
         id: 1,
         title: "HTML"
      },
      {
         id: 2,
         title: "JS"
      },
      {
         id: 1,
         title: "CSS"
      },
   ]


}