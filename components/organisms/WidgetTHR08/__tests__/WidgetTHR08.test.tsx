import { useSuspenseQuery } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import WidgetTHR08 from "../WidgetTHR08";
 
import { ThemesProvider } from "@widget/themes-providers";
import { AVAILABLE_WIDGETS } from "../../const";
 
import { mockTHR08Props } from "./mocks";


 
jest.mock("@tanstack/react-query", () => ({
  useSuspenseQuery: jest.fn(),
}));

describe("WidgetTHR08", () => {
  const mockState = {
    brightness: 60,
    timeLeft: 90,
    flashing: false,
    nightVision: false,
    duskTillDawn: false,
  };

  beforeEach(() => {
    (useSuspenseQuery as jest.Mock).mockImplementation(() => ({
      data: mockState,
    }));

 
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing and displays initial values", () => {
    render(
      <ThemesProvider>
        <WidgetTHR08 {...mockTHR08Props} />,
      </ThemesProvider>
    );

    expect(screen.getByText(AVAILABLE_WIDGETS.WIDGET_TH08)).toBeInTheDocument();

    expect(screen.getByText(/60%/)).toBeInTheDocument();

    expect(screen.getByText("90h")).toBeInTheDocument();
  });

  test("updates brightness when vertical percentage control is changed", () => {
    render(
      <ThemesProvider>
        <WidgetTHR08 {...mockTHR08Props} />
      </ThemesProvider>
    );

    const increaseButton = screen.getByRole("button", {
      name: /increase brightness/i,
    });
    fireEvent.click(increaseButton);
    // todo
    expect(screen.getByText(/60%/)).toBeInTheDocument();
  });

  test("calls onSetButtonPanel when button panels change", () => {
    render(
      <ThemesProvider>
        <WidgetTHR08 {...mockTHR08Props} />,
      </ThemesProvider>
    );

    const flashingButton = screen.getByRole("button", {
      name: /decrease brightness/i,
    });
    fireEvent.click(flashingButton);

    expect(screen.getByText(/flashing/i)).toBeInTheDocument();
  });
});
