import VirtualPet from "./virtual-pet";

describe("VirtualPet", () => {
  test("does it return a name", () => {
    const underTest = new VirtualPet("Carver");
    expect(typeof underTest.name).toMatch("string");
  });

  test("does it return a description", () => {
    const underTest = new VirtualPet("Carver", "dog");
    expect(typeof underTest.description).toMatch("string");
  });

  test("does it return 45 for hunger when fed", () => {
    const underTest = new VirtualPet("Carver", "dog", 50);
    underTest.feed();
    expect(underTest.hunger).toEqual(45);
  });

  test("does it return 60 for thirst when given water", () => {
    const underTest = new VirtualPet("Carver", "dog", 50, 50);
    underTest.water();
    expect(underTest.thirst).toEqual(60);
  });
});
