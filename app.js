function generatePreview() {
    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
  
    // Display the preview section
    document.getElementById("form-section").classList.add("hidden");
    document.getElementById("preview-section").classList.remove("hidden");
  
    // Populate the preview with data
    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-education").textContent = education;
    document.getElementById("preview-skills").textContent = skills;
    document.getElementById("preview-experience").textContent = experience;
  }
  
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
  
    doc.text("Resume", 20, 10);
    doc.text(`Name: ${name}`, 20, 20);
    doc.text(`Education: ${education}`, 20, 30);
    doc.text(`Skills: ${skills}`, 20, 40);
    doc.text(`Experience: ${experience}`, 20, 50);
  
    doc.save(`${name}_resume.pdf`);
  }
  
