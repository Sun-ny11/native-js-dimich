import { CityType, GovernmentBuildings, HousesType } from "../02-object/02-02";

export const  addMoneyToBudget = (government:GovernmentBuildings, mony:number) => {
   government.budget += mony
}
export const  repairHous = (hous:HousesType) => {
   hous.repaired = true
}
export const  toHosStuff = (stuff:GovernmentBuildings, incresed:number) => {
   stuff.staffCount -= incresed
}