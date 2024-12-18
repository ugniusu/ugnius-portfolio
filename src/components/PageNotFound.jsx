import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-semibold mb-6">Page Not Found 😢</h1>
      <p className="text-gray-400 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-primary-500 text-accent-50 rounded-lg text-lg shadow-md hover:bg-primary-700 transition-all"
      >
        Go Back
      </button>
    </div>
  );
}
