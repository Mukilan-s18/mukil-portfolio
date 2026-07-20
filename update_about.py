import re

file_path = "src/pages/About.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title
content = content.replace("<title>Prince Singh Resume</title>", "<title>Mukilan S Resume</title>")

# 2. Update File Name in Download
content = content.replace('a.download = "Prince_Kumar_Resume.html";', 'a.download = "Mukilan_S_Resume.html";')

# 3. Update the container HTML
new_html = """    <div class="container">
        <div class="resume-wrapper">
            <!-- Header -->
            <div class="header">
                <img src="/assets/prince.png" alt="Mukilan S" class="profile-photo" style="object-position: center; border-radius: 50%; width: 120px; height: 120px;">
                <div class="header-content">
                    <h1>Mukilan S</h1>
                    <p class="title">AI/ML Specialist & Full-Stack Developer</p>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">🏠︎</span>
                            <span>Chennai, Tamil Nadu</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">✉︎</span>
                            <a href="mailto:mukilans25361@gmail.com">mukilans25361@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">⛆</span>
                            <a href="https://github.com/Mukilan-s18" target="_blank">GitHub: Mukilan-s18</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">in</span>
                            <a href="https://linkedin.com/in/mukilan-s2486" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="content">
                <!-- Professional Summary -->
                <section class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <div class="summary-text">
                        Aspiring Artificial Intelligence and Machine Learning specialist with expertise in Python, deep learning, and predictive analytics. Proven track record of developing end-to-end AI solutions and leveraging modern software engineering practices to solve complex technical challenges.
                    </div>
                </section>

                <!-- Technical Skills -->
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

                <!-- Experience -->
                <section class="section">
                    <h2 class="section-title">Experience</h2>
                    <div class="education-item">
                        <h3>Internship in Generative AI | Altruisty Innovation Pvt Ltd</h3>
                        <p style="color: #888; font-size: 12px; margin-bottom: 8px;">February 2026</p>
                        <p>• Completed a 15-day internship in Generative AI, gaining valuable experience and insights into the field.</p>
                    </div>
                </section>

                <!-- Projects -->
                <section class="section">
                    <h2 class="section-title">Projects</h2>
                    <div class="section-content">
                        <div class="project">
                            <h3>Predictive Analytics Engine - FIFA World Cup</h3>
                            <p>• Engineered a robust machine learning pipeline using Scikit-Learn to predict tournament outcomes based on team Elo ratings.</p>
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

                <!-- Education -->
                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <h3>B.Tech in Artificial Intelligence and Machine Learning</h3>
                        <p>Rajalakshmi Engineering College | Expected Graduation: 2028</p>
                    </div>
                </section>

                <!-- Certifications -->
                <section class="section">
                    <h2 class="section-title">Certifications</h2>
                    <div class="strengths-list">
                        <div class="strength-item">
                            <span class="strength-icon">🏆</span>
                            <p>Applied Machine Learning and AI (CII)</p>
                        </div>
                        <div class="strength-item">
                            <span class="strength-icon">🏆</span>
                            <p>Machine Learning & Deep Learning (MathWorks)</p>
                        </div>
                        <div class="strength-item">
                            <span class="strength-icon">🏆</span>
                            <p>Data Analytics & Cyber (Deloitte)</p>
                        </div>
                        <div class="strength-item">
                            <span class="strength-icon">🏆</span>
                            <p>Manufacturing Analytics (IIT Madras)</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>"""

# Replace the old container div block
import re
content = re.sub(r'    <div class="container">.*    </div>\n</body>', new_html + '\n</body>', content, flags=re.DOTALL)


# 4. Update the text bio (lines 800+)
new_bio = """            <div
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
            </div>"""

content = re.sub(r'            <div\n              className="\n                text-white/70\n                text-sm\n                sm:text-base\n                leading-8\n                tracking-wide\n                space-y-6\n              "\n            >.*?            </div>', new_bio, content, flags=re.DOTALL)


with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated About.tsx")
