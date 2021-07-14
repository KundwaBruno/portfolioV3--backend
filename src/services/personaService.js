/* eslint-disable no-constant-condition */
import Models from '../database/models';

const { Portfolio, Skills, Experiences, Timestamps, Contact } = Models;

export const getLandingPageInfo = async () => {
    const landingPageInfo = await Portfolio.findAll({
        include: [Skills, { model: Experiences, include: Timestamps }, Contact]
    });
    return landingPageInfo;
};

