import { render, screen } from "@testing-library/react";
import { Search } from "./components/Search";

test("Card render", () => {
  render(
    <Search
      value={"test"}
      handleChangeValue={function (e: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  expect(screen.getAllByPlaceholderText("Search"));
  expect(screen.getByAltText("search icon."));
});
