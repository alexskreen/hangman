import wrongLettersReducer from "./../../reducers/wrong-letters-reducer";

describe("wrongLettersReducer", () => {
  const userInput = "k"
  let action;
  test("Should return default state", () => {
    expect(wrongLettersReducer({}, {type: null})).toEqual({})
  })
  test("Should add wrong letter", () => {
    action = {
      type: "ADD_LETTER",
      letter: userInput
    }
    expect(wrongLettersReducer({}, action)).toEqual({ "k": { letter: "k"} })
  })
  test("Should return list of wrong letters", () => {
    expect(wrongLettersReducer({}, action)).toEqual({
      "k": { letter: "k"},
      "z": { letter: "z"}
    })
  })
})