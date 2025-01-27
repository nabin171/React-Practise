import React from "react";
import Toggle from "./toggle/toggle";
import Counter from "./counter/counter";
import Color from "./color/color";
import Input from "./input/input";
import Basic from "./useRef/page";
import Page from "./practise/page";
import Todo from "./todo/page";
import UseEffect from "./dependecyArrayUseEffect/dependency";
import MyFunction from "./dependecyArrayUseEffect/dependency";
import Dummy from "./dummy/page";
import BasicUseEffect from "./basicUseEffect/page";
import Fetch from "./useeffect/use";
import Profile from "./components/profile";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      {/* <Toggle></Toggle>
      <Counter></Counter>
      <Color></Color>
      <Input></Input>
      <Fetch></Fetch>
      <MyFunction></MyFunction>
      <Dummy></Dummy>
      <BasicUseEffect></BasicUseEffect>
      <Todo></Todo>
      <Basic></Basic>
 <Page></Page> */}

 <Profile></Profile>
 <Footer></Footer>
    </div>
  );
};

export default App;
