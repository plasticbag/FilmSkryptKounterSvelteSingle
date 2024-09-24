import Kounter from "./Kounter.svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";


describe("Sentances should take time, not exactly sure how much time, but time.", () => {
    test("This standard seconds should take over two seconds", async () => {
        //  Render the svelete component
        render(Kounter);
        //  get the text input
        const input = screen.getByPlaceholderText("Enter a skrypt");
        //  enter our text
        await userEvent.type(input, "Yabba Dabba Doo, I'm coming for you.");
        //  get the output element
        const output = screen.getByRole("strong");

        //  Check that we have something we expect. The time is put in a strong tag
        expect(output).toBeDefined();

        //  Get the innerHTML and parse out the seconds. This could be more clever
        const content = output.innerHTML ?? "";
        const match = /\s*([0-9]+) seconds/.exec(content);
        const seconds = match?.[1] ?? "";

        //  Debugging is hard...
        // expect(JSON.stringify(match)).toBe("");

        //  Test that the number of seconds is greater than 2
        expect(parseInt(seconds)).toBeGreaterThan(2);
    });

});
