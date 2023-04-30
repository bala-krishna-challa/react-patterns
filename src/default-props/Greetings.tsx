const Greetings: React.FC<{ name?: string }> = ({ name }) => {
  return <div>Hello {name}!</div>;
};

Greetings.defaultProps = {
  name: "Guest",
};

export default Greetings;
