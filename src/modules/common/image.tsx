interface ImageProps {
  className?: string;
  fileName: string;
  alternativeText?: string;
}

const Image = ({ className, fileName, alternativeText }: ImageProps) => {
  return (
    <img
      src={require(`../../assets/${fileName}`)}
      alt={alternativeText || ""}
      className={className}
    />
  );
};

export default Image;
