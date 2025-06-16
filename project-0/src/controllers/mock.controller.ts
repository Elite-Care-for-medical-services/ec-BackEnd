import type { Request, Response } from 'express';
import { mockData } from '../data/mockData';

export const getMockData = (req: Request, res: Response) => {
  try {
    res.status(200).json(mockData);
    // send the mock data array as a JSON response with status 200
  } catch (error) {
    console.error('Error fetching mock services:', error);
    res.status(500).json({ message: 'Internal Server Error fetching mock services' });
    // Handle potential errors
  }
};