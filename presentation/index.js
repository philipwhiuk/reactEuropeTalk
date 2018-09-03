// Import React
import React from "react";
import {
    Deck,
    Heading,
    ListItem,
    List,
    Slide,
    Text, Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
    arcDeTriumphe: require("../assets/arcDeTriumphe.jpg"),
    grandArche: require("../assets/grandArche.jpg")
};

import whimsicalFold from "../assets/whimsical-fold.mp4";

const theme = createTheme({
  primary: "black",
  secondary: "#c3cbd3",
  tertiary: "#03A9FC",
  quaternary: "#bfffd7"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Europe 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A short talk on Suspense, whimsical design and other interesting talks
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Let's Rewind the Clock</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
             May 2018 - Paris!
          </Text>
          <Image src={images.arcDeTriumphe.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Talks</Heading>
          <List>
            <ListItem>Suspense</ListItem>
            <ListItem>Whimsical Design</ListItem>
            <ListItem>Typing</ListItem>
            <ListItem>Scope</ListItem>
            <ListItem>More...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="quaternary">
          <Heading size={2} textColor="secondary" caps>Suspense</Heading>
        </Slide>
          <Slide>
              <Heading size={6} textColor="secondary" caps>What?</Heading>
              <List>
                  <ListItem>Fibre Update</ListItem>
                  <ListItem>Granual Updates (Context)</ListItem>
                  <ListItem>Async Rendering</ListItem>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
              <Heading size={6} textColor="secondary" caps>Why?</Heading>
              <List>
                  <ListItem>Flicker</ListItem>
                  <ListItem>'isLoading' Boilerplate</ListItem>
                  <ListItem>Networking Everywhere</ListItem>
              </List>
          </Slide>
          <CodeSlide
              bgColor="primary"
              transition={[]}
              lang="jsx"
              code={require("../assets/suspense.example")}
              ranges={[
                  { loc: [0, 0], title: "How Does It Work?" },
                  { loc: [0, 5] },
                  { loc: [6, 14] },
                  { loc: [15, 18] },
                  { loc: [19, 29] }
                  // ...
              ]}/>
          <Slide>
              <Heading size={6} textColor="secondary" caps>Drawbacks?</Heading>
              <List>
                  <ListItem>You Need To Update</ListItem>
                  <ListItem>Deprecated API</ListItem>
                  <ListItem>Deprecated API</ListItem>
              </List>
          </Slide>
        <Slide>
            <Heading size={6} textColor="secondary" caps>Whimsy?</Heading>
            <video autoPlay loop src={whimsicalFold} width={920} />
        </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={5} fit caps lineHeight={1} textColor="secondary">
                  How?
              </Heading>
          </Slide>

          <CodeSlide
              bgColor="primary"
              transition={[]}
              lang="jsx"
              code={require("../assets/foldable.example")}
              ranges={[
                  { loc: [0, 0], title: "Code?" },
                  { loc: [2, 5] },
                  { loc: [11, 12] },
                  { loc: [23, 24] },
                  { loc: [28, 29] },
                  { loc: [97, 100] }
                  // ...
              ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={6} lineHeight={1} textColor="secondary">
                  But React allows for compose-able animations and abstraction of concepts
              </Heading>
          </Slide>

          <CodeSlide
              bgColor="primary"
              transition={[]}
              lang="jsx"
              code={require("../assets/FoldableDemo.example")}
              ranges={[
                  { loc: [0, 0], title: "Code?" },
                  { loc: [2, 3] },
                  { loc: [5, 8] },
                  { loc: [9, 22] }
                  // ...
              ]}/>

          <Slide>
              <Heading size={6} textColor="secondary" caps>Other Talks</Heading>
              <List>
                  <ListItem>React in Battlefield Engine</ListItem>
                  <ListItem>React Redux VR</ListItem>
                  <ListItem>Bidirectional Content</ListItem>
                  <ListItem>WASM</ListItem>
              </List>
          </Slide>

          <Slide>
              <Heading size={2} textColor="secondary" caps>Any Questions?</Heading>
          </Slide>
      </Deck>
    );
  }
}
