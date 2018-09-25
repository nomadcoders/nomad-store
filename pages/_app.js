import App, { Container } from "next/app";
import Header from "../components/Header";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Header />
        <Component />
      </Container>
    );
  }
}
