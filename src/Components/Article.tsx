import React from "react";
import "../styles/Components/ｍodal.css";
import { ArticleProps } from "../types/Article";

const Article: React.FC<ArticleProps> = ({ content, onOpenModal }) => {
  return <div onClick={() => onOpenModal(content)}>{content}</div>;
};

export default Article;
