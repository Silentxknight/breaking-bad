import React from "react";
import "./DetailsCard.css";
import ImageCard from "./ImageCard";

const DeatailsCard = (props) => {
  console.log(props.details);

  //*  code refractored below
  //  const det = props.details.map((ele) => {
  // return (
  //   <div className="card" key={ele.char_id}></div>

  const det = props.details.map(({ char_id, name, img, status, birthday }) => {
    return (
      <div key={char_id}>
        <div className="ui card">
          <div className="image">
            {/* <img src={img} alt={name} /> */}
            <ImageCard img={img} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="meta">{/* <a>Friends</a> */}</div>
            <div className="description">{status}</div>
          </div>
          <div className="extra content">
            <span className="right floated">Birthday: {birthday}</span>
            <span>
              <i className="id badge icon">ID:{char_id}</i>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    // <div className="row">
    //       <div className="column">{det}</div>

    //   </div>
    <div className="card-gri">{det}</div>
  );
};

export default DeatailsCard;
