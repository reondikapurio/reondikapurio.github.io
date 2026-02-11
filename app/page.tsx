import SkillCard from "./_components/SkillCard";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* 顔 */}
            <img
              src="/IMG_E7233.JPG"
              alt="Leon Kondo"
              className="w-16 h-16 sm:w-12 sm:h-12 rounded-full object-cover grayscale shrink-0"
            />

            {/* テキスト */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                Make Japan Stronger
              </h1>

              <p className="mt-6 sm:mt-8 text-gray-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
                I’m Leon Kondo. I build modern web applications with clarity, performance, and purpose.
              </p>
            </div>
          </div>


        </div>
      </section>




      {/* About */}
      <section id="about" className="py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            About
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Frontend-focused developer working with Next.js, React, and modern web technologies.
            Passionate about clean architecture and refined user experience.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-semibold mb-16">
            Experience
          </h2>

          <div className="space-y-14">

            {/* Item */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Waseda Univ.
                </h3>
                <p className="text-gray-600">
                  Mechanical Engineering
                </p>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                2023-Present
              </span>
            </div>

            {/* Item */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Web Application Development
                </h3>
                <p className="text-gray-600">
                  Built full-stack applications using Next.js, Prisma, and Supabase with my team.
                </p>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                2025-present
              </span>
            </div>

            {/* Item */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Robotics Internship
                </h3>
                <p className="text-gray-600">
                  Developing control applications with algorithm for arm robots.
                </p>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                2025/11-present
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-14">
            Interests
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-700">
            <div className="border border-gray-200 rounded-xl p-6">
              Robotics
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              AI Systems
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              Japanese Industry
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              MMA / Training
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              Economics
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              Hardware Engineering
            </div>
          </div>
        </div>
      </section>



      {/* Skills */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-14 text-left">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <SkillCard title="Next.js" desc="Modern fullstack React framework" level={3} />
            <SkillCard title="React" desc="Component-driven UI development" level={2} />
            <SkillCard title="TypeScript" desc="Type-safe scalable applications" level={3} />
            <SkillCard title="Prisma" desc="Database modeling" level={3} />
            <SkillCard title="Supabase" desc="Auth" level={3} />
            <SkillCard title="c++" desc="Programming language for robotics" level={4} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Let’s build something great.
          </h2>

          <p className="text-gray-600 text-lg">
            koreno0402@gmail.com
          </p>
        </div>
      </section>

    </main>
  );
}
