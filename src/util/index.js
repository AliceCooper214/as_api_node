export class ResponseEntity {
  code = 200;
  data = {};
  extra = {};
  msg = "ok";
  constructor() {}
}

const randomString = () =>
  Math.random().toString(36).substring(2).split('').join('')