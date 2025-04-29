import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import fileModel from '../models/file';

export async function uploadFile(req: Request, res: Response) {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const newFile = new fileModel({ key: (file as any).key, url: (file as any).location })

    await newFile.save();

    res.status(200).json({ message: "File uploaded and saved: ", file: newFile });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while uploading your file: ", error });
  }
}