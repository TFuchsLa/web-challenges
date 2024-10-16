import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { useRouter } from "next/router";

// Mock für useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navigation", () => {
  it("renders active link when on the Play page", () => {
    useRouter.mockReturnValue({ pathname: "/game" });

    render(<Navigation players={[]} />);

    const playLink = screen.getByRole("link", { name: /play/i });
    const historyLink = screen.getByRole("link", { name: /history/i });

    expect(playLink).toHaveStyle("background-color: black; color: white");
    expect(historyLink).not.toHaveStyle(
      "background-color: black; color: white"
    );
  });
});
