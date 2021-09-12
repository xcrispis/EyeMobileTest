import React, { Component } from 'react';
import '../assets/css/footer.css';


export default class footer extends Component {
  constructor() {
    super();
    this.state = {
      listaProdutos: []
    }

  }

  //#endregion

  render() {
    return (
      <footer id="mainFooter">
        <h1 id="footerText">footer</h1>
      </footer>
    )
  }


}