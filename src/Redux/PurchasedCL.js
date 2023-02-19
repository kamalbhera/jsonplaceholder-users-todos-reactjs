import { Component } from "react";
//! connecting wiht store
import { connect } from "react-redux";

class PurchasedCl extends Component {
  render() {
    return (
      <div className="customeDiv">
        <h2>Purchased - Class Component</h2>
        <hr />

        <select onChange={(e) => this.props.handleChange(e)}>
          {this.props.products.map((product) => {
            return (
              <option key={product.id} value={product.cost}>
                {product.pName} - ${product.cost}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
const actionCreator = (e) => {
  const pName = e.target.options[e.target.selectedIndex].text;

  const cost = e.target.value;
  let obj = { pName, cost };

  return { type: "PURCHASED", payLoad: obj };
};
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleChange: (e) => dispatch(actionCreator(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedCl);
