import React, { Component } from 'react';

import './App.css';

function Topbar({}) {
  return(
    <div className="topbar">
      <div className="container">
        <div className="topbar-links">
          <a href="#" id='logo'></a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">TV</a>
          <a href="#">Music</a>
          <a href="#">Support</a>
          <a href="#">⚲</a>
          <a href="#">☖</a>
        </div>
      </div>
    </div>
  )
}

function Hero({productName}) {
  return(
    <div className="hero">
      <div className="container">
        <div className="hero-links">
          <a href="#" className='product-name'>{productName}</a>
          <div className='links-about'>
            <a href="#">Overview</a>
            <a href="#">macOS</a>
            <a href="#">Tech Specs</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Line({}) {
  return(
    <div className='line'></div>
  )
}


function Option({info, price, isSelected, onClick}) {
  return(
    <div className={"option" + (isSelected ? ' option--selected' : '')} onClick={onClick}>
      <span className="option-info">{info}</span>
      <span className="option-price">{price === 0 ? '' : price > 0 ? `+ $${price.toFixed(2)}` : `- $${Math.abs(price).toFixed(2)}`}</span>
    </div>
  )
}

class FixOnScroll extends Component {
  state = {
    isFixed: false,
    x: 0,
    width: null,
  };

  componentDidMount() {
    const { x, y, width } = this._element.getBoundingClientRect();

    this.setState({ x: x, width: width });

    window.addEventListener('scroll', (e) => {
      this.setState({ isFixed: window.scrollY >= (y-20) })
    })
  }

  render() {
    return (
      <div ref={x => this._element = x} style={this.state.isFixed ? { position: 'fixed', left: this.state.x, top: 20, width: this.state.width } : { position: 'relative' }}>
        {this.props.children}
      </div>
    );
  }
}

const basePrice = 1499;

const processors = {
  1: {
    name: '2.3GHz dual-core 7th-generation Intel Core i5 processor, Turbo Boost up to 3.6GHz',
    price: 0,
  },
  2: {
    name: '2.5GHz dual-core 7th-generation Intel Core i7 processor, Turbo Boost up to 4.0GHz',
    price: 300,
  }
}

const memories = {
  1: {
    name: '8GB 2133MHz LPDDR3 memory',
    price: 0,
  },
  2: {
    name: '16GB 2133MHz LPDDR3 memory',
    price: 200,
  }
}

const storages = {
  1: {
    name: '256GB SSD storage',
    price: 0,
  },
  2: {
    name: '512GB SSD storage',
    price: 200,
  },
  3: {
    name: '1TB SSD storage',
    price: 600,
  }
}

const finalCutPros = {
  1: {
    name: 'None',
    price: 0,
  },
  2: {
    name: 'Final Cut Pro X',
    price: 299.99,
  }
}

const logicPros = {
  1: {
    name: 'None',
    price: 0,
  },
  2: {
    name : 'Logic Pro X',
    price: 199.99,
  }

}


class App extends Component {
  state = {
    processor: 1,
    memory: 1,
    storage: 1,
    finalCutPro: 1,
    logicPro: 1,
  };

  handleSelectOption = (option, optionValue) => () => {
    this.setState({ [option]: optionValue });
  }

  render() {
    const { processor, memory, storage, finalCutPro, logicPro } = this.state;

    const total = basePrice+processors[processor].price+memories[memory].price+storages[storage].price+finalCutPros[finalCutPro].price+logicPros[logicPro].price;

    return (
      <div>
        <Topbar />
        <Hero productName='MacBook Pro' />
        <div className='container'>
          <div className="product-info">
            <div className='image-container'>
              <FixOnScroll>
                <div className="image">
                  <img src='https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13/gray/mbp13-gray-select-cto-201610?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1495842443716' height="380px" width="380px" />
                  <div>
                    <a href='#' className="blue-link">View gallery</a>
                  </div>
                </div>
              </FixOnScroll>
            </div>
            <div className="info">
              <div className='specs'>
                <h1>Customize your 13-inch MacBook Pro - Space Gray</h1>
                <p>{processor === 1 ? processors[1].name : <b>{processors[processor].name}</b>}</p>
                <p>{memory === 1 ? memories[1].name : <b>{memories[memory].name}</b>}</p>
                <p>{storage === 1 ? storages[1].name : <b>{storages[storage].name}</b>}</p>
                <p>Intel Iris Plus Graphics 640</p>
                <p>Two Thunderbolt 3 ports</p>
                <p>Backlit Keyboard - US English</p>
                <p>{finalCutPro === 2 ? <b>{finalCutPros[2].name}</b> : null }</p>
                <p>{logicPro === 2 ? <b>{logicPros[2].name}</b> : null }</p>

              </div>
              <Line />
              <div className="spec">
                <h3>Processor</h3>
                <a href="#" className="blue-link">Which processor is right for you?</a>
                <Option
                  info={processors[1].name}
                  price={processors[1].price-processors[processor].price}
                  isSelected={processor === 1}
                  onClick={this.handleSelectOption('processor', 1)}
                />
                <Option
                  info={processors[2].name}
                  price={processors[2].price-processors[processor].price}
                  isSelected={processor === 2}
                  onClick={this.handleSelectOption('processor', 2)}
                />
              </div>
              <div className="spec">
                <h3>Memory</h3>
                <a href="#" className="blue-link">How much memory is right for you?</a>
                <Option
                  info={memories[1].name}
                  price={memories[1].price-memories[memory].price}
                  isSelected={memory === 1}
                  onClick={this.handleSelectOption('memory', 1)}
                />
                <Option
                  info={memories[2].name}
                  price={memories[2].price-memories[memory].price}
                  isSelected={memory === 2}
                  onClick={this.handleSelectOption('memory', 2)}
                />
              </div>
              <div className="spec">
                <h3>Storage</h3>
                <a href="#" className="blue-link">How much storage is right for you?</a>
                <Option
                  info={storages[1].name}
                  price={storages[1].price-storages[storage].price}
                  isSelected={storage === 1}
                  onClick={this.handleSelectOption('storage', 1)}
                />
                <Option
                  info={storages[2].name}
                  price={storages[2].price-storages[storage].price}
                  isSelected={storage === 2}
                  onClick={this.handleSelectOption('storage', 2)}
                />
                <Option
                  info={storages[3].name}
                  price={storages[3].price-storages[storage].price}
                  isSelected={storage === 3}
                  onClick={this.handleSelectOption('storage', 3)}
                />
              </div>
              <h2>Pre-Installed Software</h2>
              <div className="spec">
                <h3>Final Cut Pro X</h3>
                <a href="#" className="blue-link">Learn more</a>
                <div className='row-options'>
                  <Option
                    info={finalCutPros[1].name}
                    price={finalCutPros[1].price-finalCutPros[finalCutPro].price}
                    isSelected={finalCutPro === 1}
                    onClick={this.handleSelectOption('finalCutPro', 1)}
                  />
                  <Option
                    info={finalCutPros[2].name}
                    price={finalCutPros[2].price-finalCutPros[finalCutPro].price}
                    isSelected={finalCutPro === 2}
                    onClick={this.handleSelectOption('finalCutPro', 2)}
                  />
                </div>
              </div>
              <div className="spec">
                <h3>Logic Pro Pro X</h3>
                <a href="#" className="blue-link">Learn more</a>
                <div className='row-options'>
                  <Option
                    info={logicPros[1].name}
                    price={logicPros[1].price-logicPros[logicPro].price}
                    isSelected={logicPro === 1}
                    onClick={this.handleSelectOption('logicPro', 1)}
                  />
                  <Option
                    info={logicPros[2].name}
                    price={logicPros[2].price-logicPros[logicPro].price}
                    isSelected={logicPro === 2}
                    onClick={this.handleSelectOption('logicPro', 2)}
                  />
                </div>
              </div>
            </div>
            <div className="bottom-total">
              <div className="container">
                <div className='bottom-bar'>
                  <div className='bottom-bar-columns'>
                    <span>💬</span>
                    <div className='bottom-bar-column'>
                      <span>Get help buying:</span>
                      <a href='#'className='blue-link'>Chat now</a>
                      <span>Call 1-800-MY-APPLE</span>
                    </div>
                  </div>
                  <div className='bottom-bar-columns'>
                    <span>💼</span>
                    <div className='bottom-bar-column'>
                      <span>Pickup:</span>
                      <a href='#'className='blue-link'>Check availability</a>
                    </div>
                  </div>
                  <div className='bottom-bar-columns'>
                    <span>📦</span>
                    <div className='bottom-bar-column'>
                      <span>Ships:</span>
                      <span>1-3 buisness days</span>
                      <span>Free Shipping</span>
                      <a href='#'className='blue-link'>Get delivery dates</a>
                    </div>
                  </div>
                  <div className='bottom-bar-columns'>
                    <div className='bottom-bar-column'>
                      <b className="total">${total.toFixed(2)}</b>
                      <a href='#'className='blue-link'>Up to 24 months of special financing ❯</a>
                    </div>
                    <div>
                      <a href="#" className="bottom-bar-button">Add to Bag</a>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', marginLeft: '27px'}}>
                  Made by <a className='blue-link' href='https://github.com/arevej'>Tim Kholod</a>.
                  This project on <a className='blue-link' href='https://github.com/arevej/mac'>GitHub</a>.


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
