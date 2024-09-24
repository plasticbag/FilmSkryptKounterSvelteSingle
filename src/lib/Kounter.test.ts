import * as kounter from "./Kounter";

describe("Sentances should take time, not exactly sure how much time, but time.", () =>
{
    test("This standard seconds should take over two seconds", () =>
    {
        const seconds = kounter.Kount("Yabba Dabba Doo, I'm coming for you.");
        expect(seconds).toBeGreaterThan(2);
    });

});
