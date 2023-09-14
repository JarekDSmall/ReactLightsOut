import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class Cell extends Component {
  handleClick = () => {
    this.props.flipCellsAroundMe();

    // Notify the parent Board component to handle the cell click
  };

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
    return <div className={classes} onClick={this.handleClick}></div>;
  }
}

export default Cell;
