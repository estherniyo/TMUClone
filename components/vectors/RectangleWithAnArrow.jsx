export default function RectangleWithAnArrow({ fill, stroke }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0244 2.4751L18.899 10.3497L11.0244 18.2243"
        stroke={!stroke ? "#5602E0" : stroke}
        strokeWidth="1.5"
      />
      <line
        x1="18.8989"
        y1="10.1997"
        x2="-0.0001095"
        y2="10.1997"
        stroke={!stroke ? "#5602E0" : stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
}
