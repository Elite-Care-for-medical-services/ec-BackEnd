import type { Request, Response } from 'express';
import { db } from '../config/db';



export const getAllTeamMembers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await db.query('SELECT * FROM team_members');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching team members:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getTeamMemberById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM team_members WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch team member' });
  }
};