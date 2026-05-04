import {Request, Response} from 'express';
import * as Sentry from "@sentry/node"

export const createProject = async (req:Request, res:Response)=>{
    try{

    }catch(error){
        Sentry.captureException(error);
    }
}