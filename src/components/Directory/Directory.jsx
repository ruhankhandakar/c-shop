import React, { Component } from "react";

import { sections } from "./data";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

export default class Directory extends Component {
  state = {
    sections: sections
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
