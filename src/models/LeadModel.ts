import { InterestModel } from "./InterestModel";

export interface LeadModel {
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  interest: InterestModel;
}
