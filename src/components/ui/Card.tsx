import style from "@styles/Card.module.css";

// This component will accept any properties that a <div> element can have
// it also makes children implicit.
type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={`${style.card} ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
