import { GreetProps } from "./greet.types";

const Greet: React.FC<GreetProps> = ({ name }) => {
  return (
    <div> Hello {name ? name : "Guest"} </div>
  )
}
export default Greet;