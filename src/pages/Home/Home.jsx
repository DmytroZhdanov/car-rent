import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Welcome to Car Rent!</h1>

      <p>Your perfect place to find a car to rent!</p>

      <p>
        Click <Link>Start</Link> to commence discovering our wide selection of cars!
      </p>
    </>
  );
}
