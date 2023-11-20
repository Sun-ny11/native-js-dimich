import { GovernmentBuildings } from "../02-object/02-02";

export const getStreetsTitlesGovernmentsBuildings=(name:Array<GovernmentBuildings>)=>{
   return name.map((n)=>n.address.street.title)
}