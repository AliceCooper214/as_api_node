import { faker } from "@faker-js/faker";
import { ResponseEntity } from "../util";

export const getUserProfile = (ctx) => {
  const responseEntity = new ResponseEntity();
  responseEntity.data = {
    userName: faker.internet.userName(),
  };
  ctx.body = responseEntity;
};

export const login = (ctx) => {
  const responseEntity = new ResponseEntity();
  responseEntity.data = {
    userName: faker.internet.userName(),
    token: faker.string.nanoid(16),
  };
  ctx.body = responseEntity;
};

export const registration = (ctx) => {
  const responseEntity = new ResponseEntity();
  ctx.body = responseEntity;
};

export const logout = (ctx) => {
  const responseEntity = new ResponseEntity();
  responseEntity.msg = "退出成功";
  ctx.body = responseEntity;
};
