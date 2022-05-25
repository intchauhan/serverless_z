import { Request, Response } from "express";
import { LeadModel } from "../models/LeadModel";
import { saveNewLead, fetchLeads } from "../repo/leadRepo";

export const getLeads = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const leads = await fetchLeads();
  return res.send({ leads }).status(200).json();
};

export const createLead = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // return 400 if body is missing required fields
  if (
    req.body?.email === undefined ||
    req.body?.phone === undefined ||
    req.body?.first_name === undefined ||
    req.body?.last_name === undefined ||
    req.body?.interest === undefined
  ) {
    return res
      .status(400)
      .send(
        "Wrong input format. Email, phone, first_name, last_name, and interest should be given"
      )
      .json({});
  }

  // Creating New Lead
  const newLead: LeadModel = {
    email: req.body.email,
    phone: req.body.phone,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    interest: {
      message: req.body.interest.message,
    },
  };

  // Persisting Lead to DB
  try {
    const response = await saveNewLead(newLead);
    return res.send(response).status(200).json();
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error Occurred").json(); // Catching duplicate entries and other errors
  }
};
