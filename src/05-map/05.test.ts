import { CityType } from "../02-object/02-02";
import { getStreetsTitlesGovernmentsBuildings } from "./05-map";

let city: CityType;

beforeEach(() => {
   city = {
      title: "New York",
      houses: [
         {
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: "White street",
               },
            },
         },
         {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: "Happy street",
               },
            },
         },
         {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
               number: 101,
               street: {
                  title: "Happy street",
               },
            },
         },
      ],
      governmentBuildings: [
         {
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
               street: {
                  title: "Central Str",
               },
            },
         },

         {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
               street: {
                  title: "South Str",
               },
            },
         },
      ],
      citizensNumber: 1000000
   }
})

test("list of streets titles of governments buildings ", ()=>{
   let streetNames = getStreetsTitlesGovernmentsBuildings(city.governmentBuildings)

   expect(streetNames.length).toBe(2)
   expect(streetNames[0]).toBe("Central Str")
   expect(streetNames[1]).toBe("South Str")

})