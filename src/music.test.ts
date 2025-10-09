import { describe, it, expect } from "vitest";
import { music } from "./musics";

describe("musics", () => {
  it("should have at least 3 items", () => {
    expect(musics.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Pop'", () => {
    expect(musics).toContain("Pop");
  });
});

