import asyncHandeler from "express-async-handler";
import errorResponse from "../helpers/errorResponse";
import successResponse from "../helpers/successResponse";
import models from "../database/models/index";
import nodemailer from "nodemailer";

const { Messages } = models;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const clientMessage = (data) => {
  return {
    from: "kundwabruno@gmail.com",
    to: data.email,
    subject: "KBM Portfolio",
    html: `<div style="font-family: arial"><h3>Hello ${data.names}</h3><p>Thank you for reaching out to me!, This is an automated message i will get back to you as soon as possible.</p><p>Thank you for your time!</p></div>`,
  };
};

const adminMessage = (data) => {
  return {
    from: "kbmportfolioweb@gmail.com",
    to: "kbmportfolioweb@gmail.com",
    subject: data.names,
    html: `<div style="font-family: arial"><h3>New message!</h3><p><ul style="list-style: none"><li>Name: ${data.names}</li><li>Email: ${data.email}</li></ul></p><p>${data.body}</p><p>Best regards!</p></div>`,
  };
};

const sendMails = (data, req, res) => {
  const messages = [clientMessage(data), adminMessage(data)];
  messages.forEach((msg) => {
    transport.sendMail(msg, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Messages sent!");
      }
    });
  });
};

export const getMessages = asyncHandeler(async (req, res) => {
  try {
    const messages = await Messages.findAll();
    return successResponse(res, 200, "Successfully got all messages", messages);
  } catch (e) {
    return errorResponse(res, 500, `Error: ${e}`);
  }
});

export const sendMessage = asyncHandeler(async (req, res) => {
  try {
    const data = req.body;
    const sentMessage = await Messages.create(data);
    await sendMails(data, req, res);
    return successResponse(res, 200, "Message sent!", sentMessage);
  } catch (e) {
    console.log(e);
    return errorResponse(res, 500, `Error: ${e.message}`);
  }
});
