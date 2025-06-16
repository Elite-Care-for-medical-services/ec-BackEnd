import { Router } from 'express';
import { getAllTeamMembers, getTeamMemberById } from '../controllers/team.controller';

const router = Router();
// Route to get all team members
router.get('/team', getAllTeamMembers);
// Route to get a team member by ID
router.get('/team/:id', getTeamMemberById);

export default router;