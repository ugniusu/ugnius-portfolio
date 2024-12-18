function Project() {
  return (
    <div className="bg-accent-850 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      {/* Project Image */}
      <div className="relative mb-4">
        <img
          src="https://via.placeholder.com/400x250" // Replace with your project image
          alt="Project screenshot"
          className="rounded-lg object-cover w-full h-48"
        />
      </div>

      {/* Project Title */}
      <h2 className="text-white text-xl font-semibold mb-2">
        AUK Employment Opportunities
      </h2>

      {/* Project Description */}
      <p className="text-accent-100 text-sm opacity-80 mb-4">
        This is a sample project description. Random things are here in the
        description. This is a sample project lorem ipsum generator for dummy
        content.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
          HTML
        </span>
        <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
          TailwindCSS
        </span>
        <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
          Vue.js
        </span>
        <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
          Laravel
        </span>
      </div>

      {/* Links */}
      <div className="flex justify-between items-center">
        <a
          href="#"
          className="text-primary-400 text-sm font-medium hover:underline"
        >
          Live Preview
        </a>
        <a
          href="#"
          className="text-primary-400 text-sm font-medium hover:underline"
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default Project;
