const Arrow = ({
  color,
  direction,
  style,
}: {
  color: string;
  direction: "up" | "down" | "left" | "right";
  style?: React.CSSProperties;
}) => {
  // Calculate the rotation based on the direction
  const rotation = {
    up: "rotate(0deg)",
    down: "rotate(180deg)",
    right: "rotate(90deg)",
    left: "rotate(-90deg)",
  };

  return (
    <div
      style={{
        ...style,
        display: "inline-block",
        transform: rotation[direction], // Apply rotation
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="20,10 10,25 30,25" fill={color} />
        <rect x="19" y="25" width="2" height="10" fill={color} />
      </svg>
    </div>
  );
};

export default Arrow;
