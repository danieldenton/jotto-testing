import moxios from "moxios";
import { getSecretWord } from ".";

describe("getsecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secret word is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondsWith({
        status: 200,
        response: "party",
      });
    });
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
