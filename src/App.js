import React, { Component } from "react";
import characters from "./character.json";
import CharacterCard from "./Components/CharacterCard/CharacterCard.js";
import Wrapper from "./Components/wrapper";
console.log(characters);

// static, dumb, stateless, functional, presentational
// Typically 'props' are passed into functional components
// props are to attributes as components are to html elements

class App extends Component {
  handleClick = id => {
    this.setState({ clickedCharacters: id });
    //  randomize id in characters
    this.setState({ characters: this.shuffle(characters) });
    this.setState({ random: this.min + Math.random() * (this.max - this.min) });
  };
  shuffle = characters => {
    var currentIndex = characters.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = characters[currentIndex];
      characters[currentIndex] = characters[randomIndex];
      characters[randomIndex] = temporaryValue;
    }

    return characters;
  };
  state = {
    score: 0,
    topScore: 0,
    clickedCharacters: [],
    characters: characters,
    clickCount: 0
  };

  render() {
    return (
      <div>
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              link={character.image}
              clickCount={this.state.clickCount}
              id={character.id}
              key={character.id}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

// Will need to pass additional props to CharacterCard like id, name, and onClick event

// Inside your App component, all functions that update state will be defined.

// Review activity 29 for guidance b/c it's very similar.

// Comment out what each line of code is doing, pseudo code steps your unable to write actual code for

// This can be done for homework and activity as well.
