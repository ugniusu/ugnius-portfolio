function Animation() {
  return (
    <>
      <div className="absolute top-24 left-36 border-t-[200px] border-accent-800 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent animate-moveTriangleDown"></div>
      <div className="absolute bottom-24 left-64 border-b-[200px] border-accent-800  border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent animate-moveTriangleUp"></div>
      <div className="absolute top-24 right-36 border-t-[200px] border-accent-800  border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent animate-moveTriangleDown2"></div>
      <div className="absolute bottom-24 right-64 border-b-[200px] border-accent-800  border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent animate-moveTriangleUp2"></div>
      <div className="absolute top-0 left-72 w-16 h-16 rounded-full animate-bubbleBounce bg-accent-800"></div>
    </>
  );
}

export default Animation;
