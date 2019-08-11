import React, { Component } from 'react';
import characters from './character.json';
import CharacterCard from './Components/CharacterCard/CharacterCard.js';
console.log(characters);

// static, dumb, stateless, functional, presentational
// Typically 'props' are passed into functional components
// props are to attributes as components are to html elements

class App extends Component {
 
    state =  {
      score: 0, 
      topScore:0, 
      clickedCharacters: [], 
      characters: characters
    };


render() {
  return (
    <div>
        {this.state.characters.map(character => (
          <CharacterCard 
            link={character.image}
            clickCount= {this.clickCount}
            id={CharacterCard.id}
            key= {CharacterCard.id}
            image= {CharacterCard.image}
          />
        ))
        }
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
