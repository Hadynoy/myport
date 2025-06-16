import React from 'react';

const DaisyVsTailwind = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10 space-y-16">
      
      {/* Typography Comparison */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4">🌀 DaisyUI Typography</h2>
          <article className="prose prose-invert">
            <h1>Poetry in Code</h1>
            <p>
              DaisyUI uses Tailwind under the hood but gives you beautifully styled prose with minimal effort.
            </p>
            <ul>
              <li>Clean spacing</li>
              <li>Good font rhythm</li>
              <li>Dark mode support</li>
            </ul>
          </article>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">🔧 Tailwind Typography</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <h1 className="text-2xl font-bold">Poetry in Code</h1>
            <p>
              Plain Tailwind requires manual control over spacing and font sizes for similar results.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Manual styling</li>
              <li>Utility-first structure</li>
              <li>More control, more work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Comparison */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4">🌀 DaisyUI Form</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <select className="select select-bordered w-full">
              <option>Option A</option>
              <option>Option B</option>
            </select>
            <textarea className="textarea textarea-bordered w-full" rows="3" placeholder="Message"></textarea>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">🔧 Tailwind Form</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white">
              <option>Option A</option>
              <option>Option B</option>
            </select>
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            ></textarea>
          </form>
        </div>
      </section>

      {/* Aspect Ratio Comparison */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4">🌀 DaisyUI Aspect Ratio</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              className="w-full h-full rounded-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">🔧 Tailwind Aspect Ratio</h2>
          <div className="aspect-[16/9]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              className="w-full h-full rounded-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaisyVsTailwind;
