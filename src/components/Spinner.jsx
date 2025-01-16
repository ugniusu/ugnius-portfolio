function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-gray-500 animate-rotate mask-radial-fade"></div>
    </div>
  );
}

export default Spinner;
