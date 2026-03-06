import style from "@styles/Card.module.css";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: IProps) => {
  return <div className={`${style.card} ${className ?? ""}`}>{children}</div>;
};

export default Card;
