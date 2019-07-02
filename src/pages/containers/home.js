import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import { List as list } from "immutable";
import { openModal, closeModal } from "../../actions/index";

class Home extends Component {
  handleOpenModal = id => {
    this.props.dispatch(openModal(id))
    // this.setState({
    //   modalVisible: true,
    //   media
    // });
  };
  handleCloseModal = event => {
    this.props.dispatch(closeModal())
    // this.setState({
    //   modalVisible: false
    // });
    // this.props.dispatch({
    //   type: "CLOSE_MODAL"
    // });
  };
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {this.props.modal && this.props.modal.get("visibility") && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer autoplay id={this.props.modal.get("mediaId")} />
              </Modal>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  const categories = state
    .get("data")
    .get("categories")
    .map(categoryId => {
      return state
        .get("data")
        .get("entities")
        .get("categories")
        .get(categoryId);
    });
  console.log("categories:", categories);
  let searchResults = list();
  const search = state.get("data").get("search") || "";
  console.log("SEARCH", search);
  if (search) {
    const mediaList = state
      .get("data")
      .get("entities")
      .get("media");
    searchResults = mediaList
      .filter(item => {
        return item
          .get("author")
          .toLowerCase()
          .includes(search.toLowerCase());
      })
      .toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get("modal")
  };
}

export default connect(mapStateToProps)(Home);
