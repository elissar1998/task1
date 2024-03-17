const Card = (Props) => {
  return (
    <div>
      {Props.PropertyDetailsArr.map((element, index) => (
        <div key={index}>
          <img src={element.img} alt="" />
          <span>{element.propertyType}</span>
          <span>{element.price}</span>
          <p>{element.address}</p>
          <div>
            {element.bedroomsNum}
            {element.bathroomsNum}
            {element.area}
            {element.floor}
            {element.parking}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
