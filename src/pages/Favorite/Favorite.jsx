import CarList from "components/CarList/CarList";
import PageTitle from "components/PageTitle/PageTitle";

export function Favorite() {
  return (
    <>
      <PageTitle />

      <CarList
        cars={[
          {
            year: 2014,
            make: "Toyota",
            model: "RAV4",
            type: "SUV",
            img: "https://scene7.toyota.eu/is/image/toyotaeurope/toyota-rav4-2019-visualv7_tcm-3060-1563707?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
            description:
              "Refined and individual, the RAV4 range fuses true SUV character with style and technology. A unique combination of high torque and low emissions makes the RAV4 the ‘go anywhere’ vehicle, perfectly suited to both country roads and city streets.",
            fuelConsumption: "7.9",
            engineSize: "2.4L 4-cylinder",
            accessories: [
              "Heated front seats",
              "Rockford Fosgate premium audio system",
              "Power liftgate",
            ],
            functionalities: [
              "Super All-Wheel Control",
              "Multi-View camera system",
              "Bluetooth hands-free system",
            ],
            rentalPrice: "$100",
            rentalCompany: "Premium Auto Rentals",
            address: "32 Example Avenue, Kyiv, Ukraine",
            rentalConditions:
              "Minimum age: 21\nValid driver's license\nSecurity deposit and insurance required",
            mileage: 7401,
            id: 9636,
          },
          {
            year: 2019,
            make: "Honda",
            model: "Civic Type R",
            type: "Hatchback",
            img: "https://www.honda.co.uk/content/dam/central/cars/civic-type-r-2023/Overview/Honda-civic-type-r-06-desktop-16x9.jpg/_jcr_content/renditions/fb.jpg",
            description:
              "Designed to be the fastest front-wheel-drive car in the world, get ready for the most exhilarating drive of your life.",
            fuelConsumption: "8.2",
            engineSize: "2.0L 4-cylinder",
            accessories: [
              "Apple CarPlay and Android Auto integration",
              "Blind Spot Detection",
              "Hands-free smart liftgate",
            ],
            functionalities: ["Front-Wheel Drive", "Hillstart Assist Control", "LED headlights"],
            rentalPrice: "$30",
            rentalCompany: "Luxury Car Rentals",
            address: "456 Example Avenue, Kyiv, Ukraine",
            rentalConditions:
              "Minimum age: 21\nValid driver's license\nSecurity deposit and insurance required",
            mileage: 3290,
            id: 9637,
          },
        ]}
      />
    </>
  );
}
