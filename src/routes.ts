import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapter/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res)=>{
  const {type, comment, screenshot } = req.body;

  try{ 
    const feedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
  
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      feedbacksRepository, 
      nodemailerMailAdapter
    ); 
  
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });
  
    return res.status(201).send();
  }catch(err){
    console.log(err);
    return res.status(500).send();
  }
});