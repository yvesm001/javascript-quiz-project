class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[randomNum]] = [
        this.questions[randomNum],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    if (this.questions[this.currentQuestionIndex].answer === answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
      return this.questions;
    } else {
      this.questions = this.questions.filter((question) => {
        return question.difficulty === difficulty;
      });
    }
  }

  averageDifficulty() {
    // return this.questions.reduce((accumulator, currentValue) => {
    //     return (accumulator + currentValue.difficulty)
    //   },0) / this.questions.length;

    return (
      this.questions.reduce((acc, current) => (acc += current.difficulty),0) /
      this.questions.length
    );
  }
}
