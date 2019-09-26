"use strict";

import { Response, Request } from "express";


/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples"
  });
};

const TOKEN = "huhuhu";
const PHONE = "111111111111";
export let login = (req: Request, res: Response) => {
  const name = req.query["name"];
  console.log(name);
  res.status(200).json({ token: TOKEN });
};
const phones = [];
export let getPhone = (req: Request, res: Response) => {
  const name = req.query["token"];
  const phone = req.query["phone"];
  console.log(name);

  if (name !== TOKEN) {
    res.status(401).send({});
    return;
  }
  if (phone) {
    phones.push(phone);
  }
  res.status(200).json({ phone: phone || PHONE });
};
export let releasePhone = (req: Request, res: Response) => {
  const name = req.query["token"];
  // const phone = req.query["phone"];
  console.log(name);
  if (name !== TOKEN) {
    res.status(401).send({});
    return;
  }
  res.status(200).json({ state: 200, data: "OK" });
};
export let getSms = (req: Request, res: Response) => {
  const phone = req.query["phone"];
  const token = req.query["token"];
  console.log(phone);
  console.log(token);
  if (TOKEN !== token) {
    res.status(401).send({});
    return;
  }
  if (phone in phones) {
    res.status(200).json({ content: "4004" });
    return;
  }
  if (PHONE !== phone) {
    res.status(200).json({ error: "not found" });
    return;
  }
  res.status(200).json({ content: "4004" });
};
