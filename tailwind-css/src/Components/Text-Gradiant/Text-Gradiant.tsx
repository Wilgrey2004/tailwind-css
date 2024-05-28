type props = {
  text:string
  sizeFond?:string
}

export const TextGradiant = ({text,sizeFond = "5"}:props) => {
  const size = `text-${sizeFond}xl font-extrabold`;
  return (
    <div className={size}>
      <span className="bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500 ">
        {text}
      </span>
    </div>
  );
};
