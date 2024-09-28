export default function Pills({ isRed }) {
  return (
    <div
      className={`h-4 w-8 rounded-full ${
        isRed ? "bg-slate-400" : "bg-green-700"
      }`}
    ></div>
  );
}
