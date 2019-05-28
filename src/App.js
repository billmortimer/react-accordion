import React from 'react';
import qa from './qa';
import List from './list';
import './app.css'

class Accordian extends React.Component {
  
  state = {
    currentIndex: -1,
  }

  handleChange = (i) => {
    this.setState({
      currentIndex: i
    })
  };

  render() {
    const { handleChange } = this;
    const { currentIndex, isActive } = this.state;

    return (
      <div className="accordian">
        {qa.map( (e, i) => {
          return (
            <List 
              question={e.question} 
              answer={e.answer} 
              handleChange={handleChange}
              key={i} 
              index={i}
              currentIndex={currentIndex}
            />
          );
        })}
      </div>
    );
  }
}

export default Accordian;