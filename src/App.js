import React, { Component } from 'react';
import Features from './Features/Features';
import './App.css';
import Title from "./Title/Title";
import SummaryComp from "./SummaryComp/SummaryComp";
import SummaryItem from "./SummaryItem/SummaryItem";


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const summary = Object.keys(this.state).map((feature, idx)=> {
      return (
          <SummaryItem {...this.state} {...idx} {...feature}/>
      );
    })


    return (
      <div className="App">
        <Title/>
        <main>

          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features features={this.props.features} selected={this.state.selected} updateFeature={this.updateFeature} />
          </form>

          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
          <SummaryComp {...this.state} />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
