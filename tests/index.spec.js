describe("Quiz class", () => {
  describe("filterQuestionsByDifficulty() method", () => {
    it("should use the 'filter()' array method on the 'questions' array", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // Set up a spy on the 'filter()' array method to track calls to it
      const filterSpy = spyOn(quiz.questions, "filter");

      // Call the 'filterQuestionsByDifficulty()' method
      quiz.filterQuestionsByDifficulty(1);

      // Check if the 'filter()' array method was called on the 'questions' array
      expect(filterSpy).toHaveBeenCalled();
      // Check that the 'filter()' array method was called only once
      expect(filterSpy).toHaveBeenCalledTimes(1);
      // Check that the 'filter()' array method was called correctly, with a function as its argument
      expect(filterSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });

  describe("averageDifficulty() method", () => {
    it("should use the 'reduce()' array method on the 'questions' array", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // Set up a spy on the 'reduce()' array method to track calls to it
      const reduceSpy = spyOn(quiz.questions, "reduce");

      // Call the 'averageDifficulty()' method
      quiz.averageDifficulty();

      // Check if the 'reduce()' array method was called on the 'questions' array
      expect(reduceSpy).toHaveBeenCalled();
      // Check that the 'reduce()' array method was called only once
      expect(reduceSpy).toHaveBeenCalledTimes(1);
      // Check that the 'reduce()' array method was called correctly, with a function as its 1st argument and optional 2nd argument
      expect(reduceSpy.calls.allArgs()[0][0]).toEqual(jasmine.any(Function));
    });
  });
});
