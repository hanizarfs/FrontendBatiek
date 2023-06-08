import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = (props) => {
  const title = props.title;
  const redirect = props.redirect;

  return (
    <div className="bg-collection-1 h-56 decoration-2 flex-col bg-red-500">
      <h1 className="text-white font-semibold text-4xl">{title}</h1>
      <Link to={redirect} className="text-white font-bold underline decoration-yellow-600 absolute bottom-4">See Collection</Link>
    </div>
  );
};

export default CollectionCard;
