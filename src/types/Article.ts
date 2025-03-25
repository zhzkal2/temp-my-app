export interface ArticleProps {
  title: string;
  content: React.ReactNode;
  onOpenModal: (content: React.ReactNode) => void;
}
