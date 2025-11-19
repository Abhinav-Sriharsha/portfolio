import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Cpu, 
  Code, 
  Server, 
  Globe,
  ExternalLink,
  Award,
  BookOpen,
  MapPin,
  Maximize2,
  X,
  Brain,
  Layers,
  Cloud,
  Wrench,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Card = ({ children, className = "", onClick, hover = true }) => (
  <div 
    onClick={onClick}
    className={`bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-6 text-white transition-all duration-500 ease-out ${hover ? 'hover:scale-[1.01] hover:bg-zinc-800/60 hover:border-white/10 cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

const SkillCategory = ({ title, skills, icon: Icon, color }) => (
  <div className="space-y-3">
    <div className={`flex items-center gap-2 ${color}`}>
      <Icon size={18} />
      <h4 className="text-sm font-bold uppercase tracking-wider">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="text-xs px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-zinc-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full transition-colors text-white z-10">
          <X size={20} />
        </button>
        
        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 relative flex items-center justify-center p-8">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <project.icon size={64} className="text-white/80 drop-shadow-lg" />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-zinc-400 text-lg">{project.shortDesc}</p>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
               <Github size={24} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-mono">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal size={16} className="text-blue-500"/> Project Overview
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award size={16} className="text-amber-500"/> Key Achievements
              </h3>
              <ul className="grid gap-3">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm bg-zinc-800/30 p-3 rounded-xl border border-white/5">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Data ---
  
  const projects = [
    {
      id: 1,
      title: "Adalat Tax-Copilot",
      shortDesc: "AI-Powered Legal RAG Pipeline",
      description: "Developed an Al-powered web application implementing a Retrieval-Augmented Generation (RAG) pipeline using FAISS-based semantic search and LLM reasoning to extract legal metadata, identify precedents, and summarize tax litigation patterns across 25+ court cases.",
      icon: Database,
      color: "from-emerald-900/30 to-emerald-950/10 border-emerald-500/30",
      stack: ["Next.js", "Node.js", "Python", "FAISS", "Hugging Face", "OpenAI API"],
      github: "https://github.com/vinuta-patil/Adalat-Taxcopilot",
      details: [
        "Achieved 85% alignment with expert recommendations via advanced prompt engineering.",
        "Improved analysis consistency by 40% using interactive Next.js visualizations.",
        "Integrated Cohere and OpenAI for robust semantic search and summarization."
      ]
    },
    {
      id: 2,
      title: "Restaurant Finding System",
      shortDesc: "High-Concurrency Distributed System",
      description: "An interactive restaurant finder built for scale, handling high concurrent user loads with optimized database queries and caching strategies.",
      icon: MapPin,
      color: "from-orange-900/30 to-orange-950/10 border-orange-500/30",
      stack: ["React", "Node.js", "AWS EC2", "Elastic Load Balancer", "Redis", "MongoDB"],
      github: "https://github.com/Abhinav-Sriharsha/Restaurant_Finder",
      details: [
        "Reduced API latency by 30% leveraging AWS ELB and query optimization.",
        "Improved search responsiveness by 35% through optimized UI rendering.",
        "Implemented JWT-based RBAC for secure user data management."
      ]
    },
    {
      id: 3,
      title: "Learning Management System",
      shortDesc: "Scalable EdTech Platform",
      description: "A full-stack LMS platform focusing on accessibility and performance, deployed with automated CI/CD pipelines on AWS.",
      icon: BookOpen,
      color: "from-blue-900/30 to-blue-950/10 border-blue-500/30",
      stack: ["React", "Express", "MongoDB", "AWS Auto Scaling", "CI/CD"],
      github: "https://github.com/Abhinav-Sriharsha/LMS",
      details: [
        "Reduced load times by 30% via backend optimization and code splitting.",
        "Increased student satisfaction by 30% through Figma-prototyped accessible UI.",
        "Ensured high availability with AWS Auto Scaling groups."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans p-4 md:p-8 lg:p-12 selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_#000_100%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(100px,auto)]">
        
        {/* --- Hero Section (2x2) --- */}
        <Card hover={false} className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden relative group h-[420px]">
           <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
             <span className="font-mono text-sm text-zinc-500">{time} // SJSU</span>
           </div>
           
           <div className="mt-4 relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wide">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               OPEN TO WORK
             </div>
             <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
               Abhinav Sriharsha<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">Anumanchi</span>
             </h1>
             <p className="text-zinc-400 text-lg max-w-md leading-relaxed mt-4">
               Software Engineer driven by <span className="text-white font-medium">Distributed Systems</span> efficiency and <span className="text-white font-medium">AI</span> innovation.
             </p>
           </div>

           <div className="flex gap-4 mt-8 relative z-10">
             <a href="mailto:abhinavsriharsha.anumanchi@sjsu.edu" className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
               <Mail size={20} />
             </a>
             <a href="https://linkedin.com/in/abhinav-sriharsha" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006396] transition-colors shadow-lg shadow-blue-500/20">
               <Linkedin size={20} />
             </a>
             <a href="https://github.com/Abhinav-Sriharsha" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors border border-white/10">
               <Github size={20} />
             </a>
             <div className="h-12 border-l border-zinc-800 mx-2"></div>
             <div className="flex flex-col justify-center">
                <span className="text-xs text-zinc-500 uppercase font-mono">Based in</span>
                <span className="text-sm font-medium flex items-center gap-1 text-zinc-200"><MapPin size={14} className="text-blue-500"/> San Jose, CA</span>
             </div>
           </div>
        </Card>

        {/* --- Education (Emphasized) (2x1) --- */}
        <Card className="md:col-span-2 bg-gradient-to-br from-blue-900/30 to-blue-950/10 border-blue-500/30 relative overflow-hidden group">
           <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/30 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
             <img src="/sjsu logo.svg" alt="SJSU Logo" className="w-40 h-40 object-contain" />
           </div>

           <div className="flex flex-col h-full justify-between relative z-10">
             <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                   <BookOpen size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Master of Science</h3>
                    <p className="text-zinc-400 text-sm">Software Engineering</p>
                 </div>
               </div>
               <div className="text-right">
                 <span className="block text-lg font-bold text-white">San Jose State University</span>
                 <span className="text-xs font-mono text-zinc-500">Jan 2024 - Dec 2025</span>
               </div>
             </div>

             <div className="mt-2">
               <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Relevant Coursework</h4>
               <div className="flex flex-wrap gap-2">
                 {["System Software", "Web UI Design", "Data Mining", "Enterprise Software Platforms", "Distributed Systems", "Software QA"].map(course => (
                   <span key={course} className="text-xs px-2 py-1 bg-white/5 text-zinc-300 rounded border border-white/5 hover:border-blue-500/30 transition-colors">
                     {course}
                   </span>
                 ))}
               </div>
             </div>
           </div>
        </Card>

        {/* --- Skills (Redesigned) (2x2) --- */}
        <Card hover={false} className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-cyan-900/30 to-cyan-950/10 border-cyan-500/30 relative overflow-hidden group flex flex-col gap-6">
           <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/30 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute top-0 right-0 p-8 opacity-15 group-hover:opacity-25 transition-opacity">
             <Layers size={180} className="text-cyan-400" />
           </div>
           <div className="flex items-center justify-between relative z-10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="text-purple-500" /> Technical Skills
              </h3>
              <span className="text-xs font-mono text-zinc-500">FULL STACK & AI</span>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
              <SkillCategory 
                title="Languages" 
                icon={Code} 
                color="text-orange-400"
                skills={["Java", "Python", "JavaScript", "TypeScript", "SQL"]} 
              />
              <SkillCategory 
                title="Frameworks" 
                icon={Layers} 
                color="text-blue-400"
                skills={["React.js", "Node.js", "Spring Boot", "Express", "FastAPI", "Next.js", "GraphQL"]} 
              />
              <SkillCategory 
                title="Cloud & DevOps" 
                icon={Cloud} 
                color="text-cyan-400"
                skills={["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"]} 
              />
              <SkillCategory 
                title="Architecture & AI" 
                icon={Brain} 
                color="text-rose-400"
                skills={["RAG", "LLM Integration", "Microservices", "Distributed Systems", "FAISS", "ChromaDB"]} 
              />
              <div className="col-span-1 sm:col-span-2 border-t border-white/5 pt-4 mt-2">
                 <SkillCategory 
                  title="Tools & Databases" 
                  icon={Wrench} 
                  color="text-zinc-400"
                  skills={["MongoDB", "PostgreSQL", "Redis", "MySQL", "Figma", "Postman", "Tableau", "TensorFlow"]} 
                />
              </div>
           </div>
        </Card>

        {/* --- Achievement (1x1) --- */}
        <Card className="bg-gradient-to-br from-amber-900/40 to-amber-950/20 border-amber-500/30 group relative overflow-hidden flex flex-col justify-center h-full min-h-[200px]">
           <div className="absolute -right-8 -top-8 text-amber-400/20 group-hover:text-amber-400/30 transition-colors rotate-12">
             <Award size={140} />
           </div>
           <div className="relative z-10">
             <div className="w-12 h-12 bg-amber-500/30 rounded-full flex items-center justify-center mb-4 text-amber-400 border border-amber-500/40">
                <Award size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Stanford Law Hackathon</h3>
             <p className="text-amber-100 text-sm font-medium">Runner-up Achievement</p>
             <p className="text-amber-200/70 text-xs mt-2 leading-relaxed">Recognized for building an AI-driven legal document analyzer.</p>
           </div>
        </Card>

         {/* --- Resume Download (1x1) --- */}
         <a
           href="/Abhinav_Anumanchi.pdf"
           download
           className="bg-zinc-800/50 group flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-800 min-h-[200px] bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-6 text-white transition-all duration-500 ease-out hover:scale-[1.01] hover:bg-zinc-800/60 hover:border-white/10 cursor-pointer md:col-span-1"
         >
           <div className="w-16 h-16 rounded-full bg-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5">
             <ExternalLink className="text-white" size={32} />
           </div>
           <div>
             <h3 className="font-bold text-white text-lg">Resume</h3>
             <p className="text-zinc-400 text-xs mt-1">View Full PDF</p>
           </div>
        </a>


        {/* --- Featured Project: Learneazy.io --- */}
        <div className="md:col-span-4 mt-12 mb-8">
          <div className="flex items-center gap-4 mb-6">
             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
               <Brain className="text-purple-500" size={24} /> Featured Project
             </h2>
             <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-zinc-900/40 group">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

             <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                <div className="flex flex-col justify-center space-y-6">
                   <div className="inline-block px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono w-fit">
                     LIVE PROJECT
                   </div>
                   <h3 className="text-4xl md:text-5xl font-bold text-white">Learneazy.io</h3>
                   <p className="text-zinc-300 text-lg leading-relaxed">
                     An advanced <span className="text-purple-400">Textbook RAG Platform</span> that transforms static educational materials into interactive, queryable knowledge bases using Retrieval-Augmented Generation.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {["Next.js", "LangChain", "Cohere", "Gemini", "Agents","RAG "].map(tech => (
                        <span key={tech} className="text-xs px-3 py-1.5 bg-black/40 rounded-lg border border-white/10 text-zinc-400">
                          {tech}
                        </span>
                      ))}
                   </div>
                   <div className="pt-4 flex gap-4">
                      <a href="https://learneazy.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-all hover:translate-x-1">
                        Visit Live Site <ArrowUpRight size={18} />
                      </a>
                      <a href="https://github.com/Abhinav-Sriharsha/Learneazy" className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors border border-white/10">
                        <Github size={18} /> Source
                      </a>
                   </div>
                </div>
                <div className="flex items-center justify-center relative">
                   <div className="w-full aspect-video bg-zinc-950/50 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-purple-500/30 transition-colors">
                      <div className="text-center p-8">
                        <Brain size={64} className="mx-auto text-purple-500 mb-4 opacity-80" />
                        <p className="text-zinc-500 font-mono text-sm">Interactive Preview</p>
                      </div>
                      {/* Visual decoration for the screen */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- Projects Header --- */}
        <div className="md:col-span-4 mt-4 mb-2 flex items-center gap-4">
           <div className="h-px bg-zinc-800 flex-grow"></div>
           <h2 className="text-xl font-bold text-zinc-400 flex items-center gap-2 uppercase tracking-widest text-sm">
             Other Works
           </h2>
           <div className="h-px bg-zinc-800 flex-grow"></div>
        </div>

        {/* --- Project Cards Grid --- */}
        {projects.map((project) => {
          const colorMap = {
            "from-emerald-900/30 to-emerald-950/10 border-emerald-500/30": "emerald",
            "from-orange-900/30 to-orange-950/10 border-orange-500/30": "orange",
            "from-blue-900/30 to-blue-950/10 border-blue-500/30": "blue"
          };
          const colorName = colorMap[project.color] || "emerald";
          const glowColor = {
            emerald: "bg-emerald-500/30",
            orange: "bg-orange-500/30",
            blue: "bg-blue-500/30"
          }[colorName];

          return (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`md:col-span-2 lg:col-span-1.3 group relative overflow-hidden bg-gradient-to-br ${project.color} min-h-[280px]`}
            >
               <div className={`absolute -right-20 -top-20 w-80 h-80 ${glowColor} blur-[100px] rounded-full pointer-events-none`}></div>
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white flex gap-2">
                 <a
                   href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={(e) => e.stopPropagation()}
                   className="p-2 bg-black/40 rounded-full hover:bg-white hover:text-black transition-colors"
                 >
                    <Github size={16} />
                 </a>
                 <div className="p-2 bg-black/40 rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors">
                    <Maximize2 size={16} />
                 </div>
               </div>

               <div className="h-full flex flex-col relative z-10">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 shadow-inner">
                    <project.icon size={28} className="text-zinc-100" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-300 mb-6 line-clamp-3 leading-relaxed opacity-90">{project.shortDesc}</p>

                  <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-black/30 rounded text-zinc-200 border border-white/10 hover:border-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </Card>
          );
        })}

      </div>

      {/* --- Footer --- */}
      <footer className="max-w-7xl mx-auto mt-20 py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} Abhinav Sriharsha Anumanchi</p>
        <p>Engineered with React, Tailwind & Framer Motion principles</p>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}