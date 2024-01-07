import { createUser, getUserByEmail } from "db/user";
import express from "express";
import { authentication, random } from "helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();

    const user = createUser({
      email,
      userName,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
