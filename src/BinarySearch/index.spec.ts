describe("BinarySearch", () => {
    it("should find a number", () => {
      const target: number = 50;
      expect(
        binarySearch([10, 20, 30, 40, 50, 60, 70], (value) => target - value)
      ).toEqual(4);
    });
  
    it("should find an element at beginning of array", () => {
      expect(
        binarySearch([10, 20, 30, 40, 50, 60, 70], (value) => 20 - value)
      ).toEqual(1);
    });
  
    it("should find a string", () => {
      expect(
        binarySearch(["A", "B", "C", "D", "E", "F", "G"], (value) =>
          "D".localeCompare(value)
        )
      ).toEqual(3);
    });
  
    it("should find an object", () => {
      expect(
        binarySearch(
          [
            { name: "Alhpa" },
            { name: "Beta" },
            { name: "Gamma" },
            { name: "Zeta" },
          ],
          ({ name }) => "Gamma".localeCompare(name)
        )
      ).toEqual(2);
    });
  });
