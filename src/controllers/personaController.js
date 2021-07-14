import asyncHandeler from 'express-async-handler';
import errorResponse from '../helpers/errorResponse';
import successResponse from '../helpers/successResponse';
import {
    getLandingPageInfo
} from '../services/personaService';

export const generateLandingPageInfo = asyncHandeler(async (req, res) => {
    const landingPageInfo = await getLandingPageInfo();
    successResponse(res, 200, 'LandingPage information', landingPageInfo);
});


