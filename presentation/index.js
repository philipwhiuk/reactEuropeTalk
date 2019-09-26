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
import CodeSlide from "@philipwhiuk/spectacle-code-slide";

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

const notes = [
    "Welcome to my talk on talks (a bit meta I know) that happened at React Europe earlier this year.",
    <div>
        So, back in 2018, Costas and I were lucky enough to be selected from the ballot to go to the React Europe conference.
        <br /><br />
        This is the second time we've sent folk and assuming the talks look good we may well do so again. There's lots of other talks of course.
        <br /><br />
        The conference was held in downtown Paris (likely the same next year). If you get to go we have advice on hotels!
        <br /><br />
        This isn't a travel talk though, let's get on with the slides!
    </div>,
    <div>The talks covered the full breadth of the React community.
        Obviously with two days of slides and demos it's not really possible to cover everything in a 10 minute talk or even list them all.
        <br /><br />
        Instead I've chosen what I feel were some of the main themes and highlights here.
        Of the four items listed I'll cover Suspense and Whimsy in detail.
        <br /><br />
        By typing I'm talking about Elm, about Flow, TypeScript, ReasonML and the other similar approaches.
        <br /><br />
        These have become something of a staple at JavaScript talks. Every conference I see a new approach to add
        type restrictions to web & native code and every time I look at libraries they are still mostly in JS. Call me a practcal skeptic.
        <br /><br />
        For scope I really mean the range of what React is trying to do. There were talks on Native, use in game engines and in VR.
        There was also a big push towards React components as a designable medium (code-less development).
    </div>,
    <div>
        So Suspense... [pause]
    </div>,
    <div>
        Suspense is the next part of the 'Fibre' update that aimed to solve larger design questions
        following the Context API that was demoed last month.
        <br /><br />
        Stepping back a bit to cover what Fibre is about. Fibre is the re-architecting of React's internal model to handle granular and prioritized updates.
        This includes, not having the re-render the whole tree every time (Context teleport) and being able to delay rendering certain components.
        <br /><br />
        And it means rendering different bits at different times to allow that (async rendering).
    </div>,
    <div>
        But why do we need to suspend rendering? Why make stuff slower.
        <br /><br />
        Firstly, flicker.
        <br /><br />
        Websites that show a loading spinner for a split second before the content replaces it look bad.
        <br /><br />
        Websites that pop partial content in look bad.
        <br /><br />
        Second, because we keep re-implementing the same stuff everywhere.
        <br /><br />
        Action, IsLoading, Loaded, LoadingFailed.
        <br /><br />
        React is about reusable components. This is a component we should be reusing.
        <br /><br />
        Finally because it allows us to structure our code better.
        It provides a design pattern to avoid networking-like code everywhere in the front-end.
    </div>,
    <div>
        So, how does it work
        <br /><br />
        This is a standard networking request. We're making a call to fetch some data from a URL.
        We wrap the response in a 'createResource'. This is from the cache library built in.
        <br /><br />
        Here's our wrapper for the data. We take a cache Consumer and ask for the data from the cache.
        If the data doesn't exist, the cache will do the fetch. If it does we'll get it back.
        In our component we are just passing it to the App which can use the data as normal
        <br /><br />
        We surround this component with a 'Loader',
        <br /><br />
        The loader is where we decide how long we want to wait and what to render in the meantime.
        We avoid the flicker here by only rendering a Loading screen if we are waiting longer than 500ms.
    </div>,
    <div>
        There are some requirements. Firstly you have to update. React has changed a lot since
        we started using it as a company and if you haven't kept up, it's quite a large change.
        The old standard API calls have been deprecated and are 'unsafe' if you try and do async stuff.
        If you have lots of components that's potentially a large effort.
        <br /><br />
        More importantly perhaps, it's still relatively new and the level of adoption is unclear.
        It was released just prior to the conference.
    </div>,
    <div>
        In the second part I want to talk a bit about React as a method of doing animation and improving design.
        Code and examples from this part come from another talk which focused on web pages being fun.
    </div>,
    <div>
        The folding animation is an example of this.
        But it's also an example of how design can also provide a way of explaining actions and a UI.
        How does it work?
    </div>,
    <div>
        The code for the actual fold is a little complex, involving CSS transforms to stretch and shrink.
    </div>,
    <div>
        But... this is React. So once the UI animations are built they can be composed to apply to anything.
    </div>,
    <div>
        Hence the code to get that letter itself to fold is more like this:
    </div>,
    <div>
        And yes, this was just the tip of the iceberg. The talk I've just skimmed over was by Josh Comeau. He has a GitHub that has lots of whimsical animation.
        <br /><br />
        The talk on Suspense was from Ken Wheeler. He wrote Spectacle which is a React presentation tool this talk was written in.
    </div>
];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" notes={notes[0]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Europe 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A short talk on Suspense, whimsical design and other interesting talks
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[1]}>
          <Heading size={6} textColor="secondary" caps>Let's Rewind the Clock</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
             May 2018 - Paris!
          </Text>
          <Image src={images.arcDeTriumphe.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={notes[2]}>
          <Heading size={6} textColor="secondary" caps>Talks</Heading>
          <List>
            <ListItem>Suspense</ListItem>
            <ListItem>Whimsical Design</ListItem>
            <ListItem>Typing</ListItem>
            <ListItem>Scope</ListItem>
            <ListItem>More...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="quaternary" notes={notes[3]}>
          <Heading size={2} textColor="secondary" caps>Suspense</Heading>
        </Slide>
          <Slide notes={notes[4]}>
              <Heading size={6} textColor="secondary" caps>What?</Heading>
              <List>
                  <ListItem>Fibre Update</ListItem>
                  <ListItem>Granual Updates (Context)</ListItem>
                  <ListItem>Async Rendering</ListItem>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary" notes={notes[5]}>
              <Heading size={6} textColor="secondary" caps>Why?</Heading>
              <List>
                  <ListItem>Flicker</ListItem>
                  <ListItem>'isLoading' Boilerplate</ListItem>
                  <ListItem>Networking Everywhere</ListItem>
              </List>
          </Slide>
          <CodeSlide
              notes={notes[6]}
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
          <Slide
              notes={notes[7]} >
              <Heading size={6} textColor="secondary" caps>Drawbacks?</Heading>
              <List>
                  <ListItem>You Need To Update</ListItem>
                  <ListItem>Deprecated API</ListItem>
                  <ListItem>Still relatively new</ListItem>
              </List>
          </Slide>
        <Slide
            notes={notes[8]} >
            <Heading size={6} textColor="secondary" caps>Whimsy?</Heading>
            <video autoPlay loop src={whimsicalFold} width={920} />
        </Slide>
          <Slide notes={notes[9]} transition={["zoom"]} bgColor="primary">
              <Heading size={5} fit caps lineHeight={1} textColor="secondary">
                  How?
              </Heading>
          </Slide>

          <CodeSlide notes={notes[10]}
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

          <Slide  notes={notes[11]} transition={["zoom"]} bgColor="primary">
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
