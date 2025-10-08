const HomePage = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Hi, I'm Al Drazen Sagarino</h1>
        <p className="text-xl text-gray-600 mb-8">Frontend Developer</p>
        <div className="flex gap-4 justify-center">
          <a href="/projects" className="bg-blue-600 !text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="/contact" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
