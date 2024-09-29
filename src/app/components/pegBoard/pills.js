const colorMapping = {
  gray: "bg-slate-400",
  green: "bg-green-700",
  red: "bg-red-400",
};

export default function Pills({ color }) {
  return <div className={`h-4 w-8 rounded-full ${colorMapping[color]}`}></div>;
}
