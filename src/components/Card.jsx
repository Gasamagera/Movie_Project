const Card = ({ image, title, date, vote }) => {
  console.log(image);
  return (
    <div className=" h-82 w-52 p-1 m-5 sm:flex-cols-2">
      <img className="w-full h-64 cursor-pointer" src={image} />
      <p className="text-white">{title}</p>
      <p className="text-white">Date: {date}</p>
      <p className="text-white">Vote: {vote}</p>
    </div>
  );
};

export default Card;
