import { CityType, GovernmentBuildings } from "../02-object/02-02";

export const demolishHousesOnTheStreet = (city:CityType, street:string ) => {
   city.houses = city.houses.filter(h=>h.address.street.title !== street )
}

export const getBuildingsWithCorrectedStaffCount = (build:Array<GovernmentBuildings>, count:number)=> {
   return build.filter(c=>c.staffCount > count)
}