import CanvasDraw from "react-canvas-draw";
import "./styles.css";
import React, { useState, Component } from "react";
import Sidenav from "./components/Sidenav";

var props = {
  onChange: null,
  loadTimeOffset: 5,
  lazyRadius: 30,
  brushRadius: 3,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  hideGrid: false,
  canvasWidth: 1000,
  canvasHeight: 500,
  disabled: false,
  imgSrc: `localhost:3000/image/graph_1.svg`,
  saveData: null,
  immediateLoading: false,
  hideInterface: false,
  open: false,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: "",
      brushRadius: 3,
      imgSrc: ""
    };
  }

  componentDidMount() {
    fetch(`${window.location.origin}/images`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resources: data,
        });
      });
  }
  handleBrushRadius(radius) {
    this.setState({
      brushRadius: radius,
    });
  }

  handleImageClick(event){
    this.setState({
      imgSrc: event.target.src
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <input type="text" placeholder="search"></input>
            {this.state.resources
              ? Object.keys(this.state.resources).map((x) => {
                  console.log(x);
                  return this.state.resources[x].map((z) => (
                    <img
                      src={`${window.location.origin}/image/${z}`}
                      alt="no-image"
                      className="resource"
                      onClick={(e)=>this.handleImageClick(e)}
                    />
                  ));
                })
              : null}
          </div>
        </div>
        <div className="App">
          <div className="app_body">
            <Sidenav brushRadius={(x) => this.handleBrushRadius(x)} />
            <div className="canvasstyle">
              <CanvasDraw
                imgSrc={this.state.imgSrc}
                brushRadius={this.state.brushRadius}
                canvasHeight={props.canvasHeight}
                canvasWidth={props.canvasWidth}
                style={{
                  boxShadow:
                    "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
