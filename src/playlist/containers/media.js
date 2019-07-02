import React, { Component } from "react";
import Media from "../components/media";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/index";

class MediaContainer extends Component {
  openModal = id => {
    this.props.dispatch(
      openModal(id)
      //   {
      //   type: "OPEN_MODAL",
      //   payload: {
      //     mediaId: id
      //   }
      // }
    );
  };

  closeModal = id => {
    this.props.dispatch(
      //   {
      //   type: "CLOSE_MODAL",
      //   payload: {
      //     mediaId: id
      //   }
      // }
      closeModal()
    );
  };

  render() {
    return (
      <Media
        openModal={this.openModal}
        closeModal={this.closeModal}
        {...this.props.data.toJS()}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state
      .get("data")
      .get("entities")
      .get("media")
      .get(props.id)
  };
}

export default connect(mapStateToProps)(MediaContainer);
