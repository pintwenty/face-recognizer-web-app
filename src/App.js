import React, {
  Component
} from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Clarifai from "clarifai";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "96c74560bc984068b576ce2b7afe7545"
});

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 3,
        opacity: 0
      },
      repulse: {
        distance: 400,
        duration: 4
      }
    }
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {}
    };
  }
  calculateFaceLocation = data => {
    const NumberOfFaces = data.outputs[0].data.regions.length;
    document.getElementById("no").innerHTML =
      "Number of faces detected : " + NumberOfFaces;
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
  };

  displayFaceBox = box => {
    //console.log(box);
    this.setState({
      box: box
    });
  };

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input
    });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        response => this.displayFaceBox(this.calculateFaceLocation(response))
        /*console.log(response)*/
      )
      .catch(err => console.log(err));
  };

  render() {
    return ( <
      div className = "App" >
      <
      Particles className = "particles"
      params = {
        particleOptions
      }
      /> <
      Navigation / >
      <
      Logo / >
      <
      ImageLinkForm onInputChange = {
        this.onInputChange
      }
      onButtonSubmit = {
        this.onButtonSubmit
      }
      /> <
      FaceRecognition box = {
        this.state.box
      }
      imageURL = {
        this.state.imageURL
      }
      /> < /
      div >
    );
  }
}
export default App;