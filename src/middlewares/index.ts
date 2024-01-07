import express from "express";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sessionToken = req.cookies(["TS_AUTH"]);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};
