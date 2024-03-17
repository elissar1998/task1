import p1 from "../../images/images/property-01.jpg";
import Card from "../Card/Card";
function PropertyDetails() {
  const PropertyDetailsArr = [
    {
      id: 1,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 1,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 2,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 3,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 4,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 5,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
    {
      id: 6,
      img: p1,
      propertyType: "Apartment",
      price: "$2.264.000",
      address: "18 New Street Miami, OR 97219",
      bedroomsNum: 8,
      bathroomsNum: 8,
      area: " 545m2",
      floor: 3,
      parking: "6 spots",
    },
  ];
  return (
    <div>
      <Card props={PropertyDetailsArr} />
    </div>
  );
}

export default PropertyDetails;
