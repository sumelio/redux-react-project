import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media.js";
import MediaContainer from "../../playlist/containers/media";

function Categories(props) {
  console.log("props.isLoading:", props.isLoading);
  return (
    <div className="Categories">
      <Search />
      {props.isLoading && <p> Loading.....</p>}
      {props.search.map(item => {
        return (
          <MediaContainer
            openModal={props.handleOpenModal}
            {...item.toJS()}
            id={item.get("id")}
            key={item.get("id")}
          />
        );
      })}
      {props.categories.map(item => {
        return (
          <Category
            key={item.get("id")}
            {...item.toJS()}
            handleOpenModal={props.handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Categories;
