import React from "react";
import Film from "./Film";
import { useParams } from "react-router-dom/";

export default function FilmCard(props) {
  const { filmId } = useParams();
  console.log(filmId);
  return (
    <div>
      <Film />
    </div>
  );
}
