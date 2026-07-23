import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mukilan_S_Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #000000; color: #ffffff; line-height: 1.6; padding: 40px 20px; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        .container { max-width: 900px; margin: 0 auto; background: #121212; border-radius: 16px; border: 1px solid #2a2a2a; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
        .header { padding: 40px; background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-bottom: 1px solid #2a2a2a; display: flex; gap: 30px; align-items: flex-start; }
        .profile-photo { width: 110px; height: 110px; border-radius: 50%; border: 3px solid #444; flex-shrink: 0; object-fit: cover; object-position: top; }
        .header-content h1 { font-size: 36px; margin-bottom: 4px; font-weight: 700; color: #fff; }
        .header-content .title { font-size: 15px; color: #b0b0b0; margin-bottom: 16px; }
        .contact-info { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
        .contact-item { padding: 8px 12px; background: #1a1a1a; border-radius: 6px; border: 1px solid #333; color: #fff; }
        .contact-item a { color: #fff; text-decoration: none; }
        .content { padding: 40px; background: #0d0d0d; }
        .section { margin-bottom: 28px; }
        .section-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 14px; padding-bottom: 6px; border-bottom: 2px solid #333; text-transform: uppercase; letter-spacing: 2px; }
        .summary-text { color: #d0d0d0; line-height: 1.7; font-size: 14px; background: #1a1a1a; padding: 16px; border-radius: 6px; border: 1px solid #2a2a2a; border-left: 3px solid #555; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .skill-category { background: #1a1a1a; padding: 16px; border-radius: 8px; border: 1px solid #2a2a2a; }
        .skill-category h3 { color: #fff; font-size: 14px; margin-bottom: 10px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag { background: #252525; color: #e0e0e0; padding: 4px 10px; border-radius: 4px; font-size: 12px; border: 1px solid #333; }
        .education-item, .project { background: #1a1a1a; padding: 16px; border-radius: 8px; border: 1px solid #2a2a2a; margin-bottom: 12px; }
        .education-item h3, .project h3 { font-size: 15px; color: #fff; margin-bottom: 6px; }
        .project p { color: #b0b0b0; font-size: 13px; margin-bottom: 4px; }
        .strengths-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .strength-item { background: #1a1a1a; padding: 12px; border-radius: 6px; border: 1px solid #2a2a2a; display: flex; align-items: center; gap: 10px; font-size: 13px; }
        @media print {
            body { background: #ffffff !important; color: #000000 !important; padding: 0 !important; }
            .container { box-shadow: none !important; border: none !important; background: #ffffff !important; }
            .header { background: #f5f5f5 !important; border-bottom: 2px solid #000 !important; }
            .header-content h1 { color: #000000 !important; }
            .header-content .title { color: #444444 !important; }
            .contact-item { background: #ffffff !important; border: 1px solid #ccc !important; color: #000000 !important; }
            .contact-item a { color: #000000 !important; }
            .content { background: #ffffff !important; }
            .section-title { color: #000000 !important; border-bottom: 2px solid #000 !important; }
            .summary-text, .skill-category, .education-item, .project, .strength-item { background: #f9f9f9 !important; border: 1px solid #ddd !important; color: #000000 !important; }
            .skill-category h3, .education-item h3, .project h3 { color: #000000 !important; }
            .project p, .summary-text { color: #222222 !important; }
            .skill-tag { background: #eee !important; color: #000 !important; border: 1px solid #ccc !important; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="resume-wrapper">
            <div class="header">
                <img src="/assets/hero-portrait.png" alt="Mukilan S" class="profile-photo">
                <div class="header-content">
                    <h1>Mukilan S</h1>
                    <p class="title">AI/ML Specialist & Full-Stack Developer</p>
                    <div class="contact-info">
                        <div class="contact-item"><span>🏠︎</span> <span>Chennai, Tamil Nadu</span></div>
                        <div class="contact-item"><span>✉︎</span> <a href="mailto:mukilans25361@gmail.com">mukilans25361@gmail.com</a></div>
                        <div class="contact-item"><span>⛆</span> <a href="https://github.com/Mukilan-s18" target="_blank">GitHub: Mukilan-s18</a></div>
                        <div class="contact-item"><span>in</span> <a href="https://linkedin.com/in/mukilan-s2486" target="_blank">LinkedIn</a></div>
                    </div>
                </div>
            </div>

            <div class="content">
                <section class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <div class="summary-text">
                        Aspiring Artificial Intelligence and Machine Learning specialist with expertise in Python, deep learning, and predictive analytics. Proven track record of developing end-to-end AI solutions and leveraging modern software engineering practices to solve complex technical challenges.
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-grid">
                        <div class="skill-category">
                            <h3>AI & Machine Learning</h3>
                            <div class="skill-tags">
                                <span class="skill-tag">Python</span>
                                <span class="skill-tag">Scikit-Learn</span>
                                <span class="skill-tag">TensorFlow</span>
                                <span class="skill-tag">Keras</span>
                                <span class="skill-tag">NumPy</span>
                                <span class="skill-tag">Pandas</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <h3>Software Development</h3>
                            <div class="skill-tags">
                                <span class="skill-tag">Java</span>
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">React.js</span>
                                <span class="skill-tag">Node.js</span>
                                <span class="skill-tag">SQL</span>
                                <span class="skill-tag">Firebase</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Experience</h2>
                    <div class="education-item">
                        <h3>Internship in Generative AI | Altruisty Innovation Pvt Ltd</h3>
                        <p style="color: #666; font-size: 12px; margin-bottom: 8px;">February 2026</p>
                        <p>• Completed a 15-day internship in Generative AI, gaining valuable experience and insights into the field.</p>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Projects</h2>
                    <div class="section-content">
                        <div class="project">
                            <h3>Predictive Analytics Engine - FIFA World Cup</h3>
                            <p>• Engineered a machine learning pipeline using Scikit-Learn to predict tournament outcomes based on team Elo ratings.</p>
                            <p>• Developed ensemble models (Random Forest, XGBoost) and a Monte Carlo engine to process 10,000+ simulations.</p>
                            <p>• Deployed a real-time interactive dashboard using React and Firebase.</p>
                        </div>
                        <div class="project">
                            <h3>AeroWeather Dashboard</h3>
                            <p>• Built a real-time weather analytics dashboard using React 18 and Vite, improving application load performance by 40%.</p>
                            <p>• Integrated atmospheric forecasting APIs to deliver interactive radar maps and automated deployment via GitHub Actions.</p>
                        </div>
                        <div class="project">
                            <h3>MNIST ANN Digit Classifier</h3>
                            <p>• Optimized an Artificial Neural Network architecture using TensorFlow/Keras, achieving 98.08% test accuracy.</p>
                            <p>• Implemented Dropout and Early Stopping techniques to mitigate overfitting.</p>
                            <p>• Developed a Gradio web application for real-time digit classification.</p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <h3>B.Tech in Artificial Intelligence and Machine Learning</h3>
                        <p>Rajalakshmi Engineering College | Expected Graduation: 2028</p>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Certifications</h2>
                    <div class="strengths-list">
                        <div class="strength-item"><span>🏆</span> <p>Applied Machine Learning and AI (CII)</p></div>
                        <div class="strength-item"><span>🏆</span> <p>Machine Learning & Deep Learning (MathWorks)</p></div>
                        <div class="strength-item"><span>🏆</span> <p>Data Analytics & Cyber (Deloitte)</p></div>
                        <div class="strength-item"><span>🏆</span> <p>Manufacturing Analytics (IIT Madras)</p></div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 300);
        };
    </script>
</body>
</html>
    `;

    // Open print window synchronously on user click
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(resumeHTML);
      printWindow.document.close();
    }

    let time = 3;
    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);
        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };


  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/id-card.png"
            alt="Profile Photo"
            className="
              w-[200px]
              sm:w-[280px]
              md:w-[320px]
              rounded-2xl
              border
              border-white/15
              object-cover
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/25
              transition-all
              duration-300
            "
          />

          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
            >
              <p>
                I'm Mukilan, a B.Tech student specializing in Artificial Intelligence and Machine Learning at Rajalakshmi Engineering College.
              </p>

              <p>
                My journey into tech began with a fascination for data and how it can be used to predict future outcomes. I quickly developed a strong interest in Python, deep learning, and predictive analytics.
              </p>

              <p>
                Recently, I completed a Generative AI internship at Altruisty Innovation Pvt Ltd, which gave me valuable insights into building end-to-end AI solutions. 
              </p>

              <p>
                I enjoy building complex projects, from a predictive analytics engine for the FIFA World Cup using Scikit-Learn to a real-time AeroWeather dashboard using React. I'm always looking for opportunities to leverage modern software engineering practices to solve complex technical challenges.
              </p>

              <p>
                I know there's still a lot to learn in the ever-evolving field of AI, but I enjoy the process and always try to improve my skills step by step.
              </p>

              <p>
                My goal is to build a successful career in the tech industry by continuously improving my skills in AI and machine learning technologies while contributing to innovative and impactful projects.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          onClick={handleDownload}
          disabled={downloading}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-xl
            hover:bg-white/15
            hover:border-white/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
              "
            />
            <span className="font-semibold tracking-wide">
              {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}