import React from "react";
import "../App.css";
import Posts from "./Posts";
import Header from "../containers/header";
import { Container } from "reactstrap";
import Footer from "../containers/footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Comments /> */}
      <Container>
        <Posts />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
