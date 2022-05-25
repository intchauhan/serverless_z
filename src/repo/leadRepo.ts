import "reflect-metadata";
import { Leads } from "../entity/Leads";
import { AppDataSource } from "../configs/data-source";
import { LeadModel } from "../models/LeadModel";
import { Interests } from "../entity/Interests";

export async function fetchLeads(): Promise<Leads[]> {
  const leads = await AppDataSource.manager.find(Leads, {
    order: { id: "DESC" },
  });
  return leads;
}

export async function saveNewLead(newLead: LeadModel): Promise<Leads> {
  const leadEntity = new Leads();
  leadEntity.email = newLead.email;
  leadEntity.phone = newLead.phone;
  leadEntity.first_name = newLead.first_name;
  leadEntity.last_name = newLead.last_name;
  await AppDataSource.manager.save(leadEntity);

  const interestEntity = new Interests();
  interestEntity.message = newLead.interest.message;
  interestEntity.lead_id = leadEntity;
  const response = await AppDataSource.manager.save(interestEntity);

  return response;
}
