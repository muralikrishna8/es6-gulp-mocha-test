"use strict";

import App from "../src/index";
import { expect } from "chai";

describe('Application', () => {
  describe("WelcomeMessage", () => {
    it("should give the welcome message", () => {
      expect(new App().welcomeMessage()).to.equal("Welcome to ES6");
    })
  })
});
