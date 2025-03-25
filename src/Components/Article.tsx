import React from "react";
import "../styles/Components/ｍodal.css";

interface ArticleProps {
  title: string;
  content: React.ReactNode;
  onOpenModal: (content: React.ReactNode) => void;
}

const Article: React.FC<ArticleProps> = ({ content, onOpenModal }) => {
  return <div onClick={() => onOpenModal(content)}>{content}</div>;
};

export default Article;
