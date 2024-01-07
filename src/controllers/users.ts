import express from "express";
import { deleteUserById, getUsers } from "../db/user";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const user = await deleteUserById(id);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
