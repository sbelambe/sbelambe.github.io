const projects = {
  1: {
    name: "Google STEP Internship",
    date: "June 2024 - September 2024",
    location: "Mountain View, CA",
    whatIDid: [
      "Developed a feature within an internal Android app analysis environment that surfaces novel insights into suspicious SDK code behaviors, enabling more targeted and efficient reverse engineering.",
      "Utilized Angular and a Java server framework to seamlessly integrate frontend components with backend database calls, leveraging protocol buffers for data serialization over RPCs within internal app analysis tools.",
      "Reduced manual review time for reverse engineers, strengthening Android app security and user privacy."
    ],
    technologies: "Angular, Java, Typescript, Protocol Buffers, Bazel, Blaze, Fig",
    links: [""],
    thoughts:
      "This internship gave me hands-on experience with full-stack development and taught me how to collaborate effectively in a fast-paced environment.",
  },
  2: {
    name: "NSF Machine Learning and Cybersecurity Program",
    date: "May 2023 - August 2023",
    location: "San Jose State University",
    whatIDid: [
      "Performed feature engineering, data preprocessing, and model training using Random Forest and K-Nearest Neighbors with Python, Scikit-learn, Pandas, and NumPy to detect botnet-based attacks in network intrusion detection systems.",
      "Utilized datasets such as CTU-13 and BOT-IoT for training and applied obfuscation techniques to simulate attacker behavior and test model robustness in identifying malicious traffic, achieving 90%-99% accuracy.",
      "Employed synthetic data generation for traffic classification and balanced datasets to enhance model effectiveness.",
      "Contributed to enhancing cybersecurity defenses with efficient detection of malicious traffic."
    ],
    technologies: "Python, Scikit-learn, Pandas, NumPy",
    links: [""],
    thoughts:
      "This research experience deepened my understanding of machine learning and its application in cybersecurity.",
  },
  3: {
    name: "Tech4Good Lab - Clustering Team Lead",
    date: "September 2024 - Present",
    location: "University of California, Santa Cruz",
    whatIDid: [
      "Leading a team focused on improving real-time clustering algorithms for adaptive survey platforms that adjust questions based on previous responses to capture deeper insights and improve data collection.",
      "Implementing advanced clustering techniques using OpenAI API to enhance survey response analysis.",
      "Incorporating concept induction to refine clustering processes for better scope, overlap, accuracy, and coverage."
    ],
    technologies: "Python, OpenAI API",
    links: [""],
    thoughts:
      "This leadership role allowed me to develop my technical and project management skills while working on impactful technology.",
  }
};

document.querySelectorAll(".sidebar li").forEach((item) => {
  item.addEventListener("click", () => {
    const projectId = item.getAttribute("data-project");
    const project = projects[projectId];

    if (project) {
      const details = document.getElementById("details");
      details.innerHTML = `
      <div id="${projectId}" class="project-details">
        <div class="details-item name"><strong>Name:</strong> ${
          project.name
        }</div>
        <div class="details-item date"><strong>Date:</strong> ${
          project.date
        }</div>
        <div class="details-item location"><strong>Location:</strong> ${
          project.location
        }</div>
        <div class="details-item whatIDid"><strong>What I Did:</strong>
          <ul>
            ${project.whatIDid.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </div>
        <div class="details-item technologies"><strong>Technologies:</strong> ${
          project.technologies
        }</div>
        <div class="details-item links"><strong>Relevant Links:</strong>
          <ul>
            ${project.links
              .map(
                (link) =>
                  `<li><a href="${link}" target="_blank">${link}</a></li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="details-item thoughts"><strong>My Thoughts:</strong> ${
          project.thoughts
        }</div>
      </div>
    `;
    } else {
      document.getElementById("details").textContent = "Details not available.";
    }
  });
});
