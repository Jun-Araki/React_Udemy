export const ColorfullMessage = ({ children, color }) => {
  console.log("--------------");

  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};
