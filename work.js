const projects = {
  1: {
    name: "Google STEP Internship",
    date: "June 2024 - September 2024",
    location: "Mountain View, CA",
    whatIDid: [
      "I developed a feature within an internal Android app analysis environment that highlights novel insights into suspicious SDK code behaviors, streamlining the process for reverse engineers to identify potential security threats. This involved utilizing Angular and a Java server framework to seamlessly integrate frontend components with backend database calls, leveraging protocol buffers for efficient data serialization over RPCs. The feature significantly reduces manual review time, enabling more efficient monitoring and analysis of SDK activity, ultimately enhancing Android app security and protecting user privacy.",
      "I was able to learn what it takes to utilize internal tools and resources to develop a feature that has a direct impact on the privacy of Google users. I also gained experience working with a large codebase and collaborating with team members to ensure the feature met the project requirements.",
    ],
    technologies: "Angular, Java, Typescript, Protocol Buffers, Bazel, Fig",
    links: [""],
    thoughts:
      "This internship gave me hands-on experience with full-stack development and taught me how to collaborate in a fast-paced environment.",
  },
  2: {
    name: "NSF Machine Learning and Cybersecurity Program",
    date: "May 2024 - August 2023",
    location: "San Jose State University",
    whatIDid: [
      "Performed feature engineering, data pre-processing, and model training with Random Forest and K nearest neibors usin gPython, Scikit learning, pandas and numpy to detect botnet-baed attacks in network intrusion detection systems",
      "Utilized datasets such as CTU-13 and IOT for training and applied obfuscation techniques to simulate attacker behaviors and test model robustness in identidying malidcious traffic, achieving 90-99% accuracy", 
      "Employed synthetiuc data germination foir traffiic classification and balanced datasets to enhave model effectiveness",
      "COntributed to enhancing cybersecurity defense wiuth efficient detection of malicious traffic",   
    ],
    links: [""],
    thoughts:
      "It was a challenging and rewarding experience that deepened my understanding of neural networks.",
  },
};

document.querySelectorAll(".sidebar li").forEach((item) => {
  item.addEventListener("click", () => {
    const projectId = item.getAttribute("data-project");
    const project = projects[projectId];

    if (project) {
      const details = document.getElementById("details");
      details.innerHTML = `
      <div id="${project.id}" class="project-details">
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
