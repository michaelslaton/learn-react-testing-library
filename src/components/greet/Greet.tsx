type GreetProps = {
  name?: string;
}

const Greet: React.FC<GreetProps> = ({ name }) => {

  return (
    <>Hello {name}</>
  )
}

export default Greet;