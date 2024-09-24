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
        // const output = screen.getByText(/This skrypt will take .* to read/);
        const output = screen.getByRole("strong");

        expect(output).toBeDefined();

        // expect(seconds).toBeGreaterThan(2);
    });

});
