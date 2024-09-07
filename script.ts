import jsPDF from 'jspdf';

// Function to handle form submission
const handleFormSubmit = async (event: Event) => {
    event.preventDefault();

    // Collect form data
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const resumeData = gatherResumeData();

    // Assume a backend API that stores resume data and returns a unique URL
    const response = await fetch('/api/save-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, resumeData })
    });
    
    const result = await response.json();
    const resumeUrl = result.url;

    // Display resume URL and show share/download buttons
    document.getElementById('resume-url')!.textContent = `Your resume is available at: ${resumeUrl}`;
    document.getElementById('resume-url')!.classList.remove('hidden');
    document.getElementById('share-resume')!.classList.remove('hidden');
    document.getElementById('download-resume')!.classList.remove('hidden');
};

// Function to gather resume data (example)
const gatherResumeData = () => {
    // Collect and format resume data from the form
    // This is just a placeholder function
    return {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        profilePicture: (document.getElementById('profile-pic-preview') as HTMLImageElement).src,
        skills: (document.getElementById('skills') as HTMLInputElement).value,
        education: gatherEducationData(),
        workExperience: gatherWorkExperienceData()
    };
};

// Function to gather education data (example)
const gatherEducationData = () => {
    // Collect education data from form
    return [];
};

// Function to gather work experience data (example)
const gatherWorkExperienceData = () => {
    // Collect work experience data from form
    return [];
};

// Function to handle resume download as PDF
const handleDownloadResume = () => {
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);
    // Add resume content to the PDF here
    doc.save("resume.pdf");
};

// Function to handle sharing the resume
const handleShareResume = () => {
    const resumeUrl = (document.getElementById('resume-url') as HTMLParagraphElement).textContent;
    navigator.clipboard.writeText(resumeUrl!).then(() => {
        alert('Resume URL copied to clipboard!');
    });
};

// Add event listeners
document.getElementById('resume-form')?.addEventListener('submit', handleFormSubmit);
document.getElementById('download-resume')?.addEventListener('click', handleDownloadResume);
document.getElementById('share-resume')?.addEventListener('click', handleShareResume);

