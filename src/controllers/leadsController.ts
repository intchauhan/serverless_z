import { Router, Request, Response } from "express";
import { createLead, getLeads } from "../services/leadsService";

const leadsControllerRouter = Router();

// Get all leads
leadsControllerRouter.get("/leads", getLeads);
// Create new lead
leadsControllerRouter.post("/createlead", createLead);

export default leadsControllerRouter;
