"use client";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import * as jsPDF from "html2pdf.js";
import Head from "next/head";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    role: "",
    email: "",
    phone: "",
    lastName: "",
    experiences: [],
    skills: [],
    educations: [], // New field for education
    certifications: [], // New field for certifications
  });

  useEffect(() => {
    // Add any side effects or initializations here
  }, []); // Empty dependency array to run the effect only once on mount

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setFormData((prevData) => {
      const updatedExperiences = [...prevData.experiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      return { ...prevData, experiences: updatedExperiences };
    });
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          jobTitle: "",
          employer: "",
          startDate: "",
          endDate: "",
          city: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prevData) => {
      const updatedExperiences = [...prevData.experiences];
      updatedExperiences.splice(index, 1);
      return { ...prevData, experiences: updatedExperiences };
    });
  };

  const handleSkillsChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const updatedSkills = [...prevData.skills];
      updatedSkills[index] = value;
      return { ...prevData, skills: updatedSkills };
    });
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ""],
    }));
  };

  const removeSkill = (index: number) => {
    setFormData((prevData) => {
      const updatedSkills = [...prevData.skills];
      updatedSkills.splice(index, 1);
      return { ...prevData, skills: updatedSkills };
    });
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setFormData((prevData) => {
      const updatedEducations = [...prevData.educations];
      updatedEducations[index] = {
        ...updatedEducations[index],
        [field]: value,
      };
      return { ...prevData, educations: updatedEducations };
    });
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educations: [
        ...prevData.educations,
        {
          degree: "",
          institution: "",
          graduationDate: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prevData) => {
      const updatedEducations = [...prevData.educations];
      updatedEducations.splice(index, 1);
      return { ...prevData, educations: updatedEducations };
    });
  };

  const handleCertificationChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const updatedCertifications = [...prevData.certifications];
      updatedCertifications[index] = value;
      return { ...prevData, certifications: updatedCertifications };
    });
  };

  const addCertification = () => {
    setFormData((prevData) => ({
      ...prevData,
      certifications: [...prevData.certifications, ""],
    }));
  };

  const removeCertification = (index: number) => {
    setFormData((prevData) => {
      const updatedCertifications = [...prevData.certifications];
      updatedCertifications.splice(index, 1);
      return { ...prevData, certifications: updatedCertifications };
    });
  };

  const CVDocument = ({ formData }) => {
    const downloadPDF = () => {
      const element = document.getElementById("cv-content");

      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size
        pdf.save("your_cv.pdf");
      });
    };
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Form Section */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">CV Builder Form</h2>
          <form>
            {/* ... (Previous fields) */}
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-1/2 mr-2">
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <div className="mb-4">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2 mr-2">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="phone"
                id="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="skills"
                className="block font-medium text-gray-600"
              >
                Skills
              </label>
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex mb-2">
                  <div className="w-1/2 mr-2">
                    <input
                      type="text"
                      placeholder="Skill"
                      className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      value={skill}
                      onChange={(e) =>
                        handleSkillsChange(index, e.target.value)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                    onClick={() => removeSkill(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded-md"
                onClick={addSkill}
              >
                Add Skill
              </button>
            </div>

            {/* Employment History Section */}
            <div className="mb-4">
              <label
                htmlFor="employmentHistory"
                className="block font-medium text-gray-600"
              >
                Employment History
              </label>
              {formData.experiences.map((experience, index) => (
                <div key={index} className="flex flex-col mb-2">
                  <div className="flex mb-2">
                    <div className="w-1/2 mr-2">
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={experience.jobTitle}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "jobTitle",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <input
                        type="text"
                        placeholder="Employer"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={experience.employer}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "employer",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1/2 mr-2">
                      <input
                        type="date"
                        placeholder="Start Date"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={experience.startDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <input
                        type="date"
                        placeholder="End Date"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={experience.endDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1/2 mr-2">
                      <input
                        type="text"
                        placeholder="City"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={experience.city}
                        onChange={(e) =>
                          handleExperienceChange(index, "city", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor={`description-${index}`}
                      className="block text-sm font-medium text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      id={`description-${index}`}
                      placeholder="Job Description"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 h-32"
                      value={experience.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded-md"
                onClick={addExperience}
              >
                Add Experience
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="education"
                className="block font-medium text-gray-600"
              >
                Education
              </label>
              {formData.educations.map((education, index) => (
                <div key={index} className="flex flex-col mb-2">
                  <div className="flex mb-2">
                    <div className="w-1/2 mr-2">
                      <input
                        type="text"
                        placeholder="Degree"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={education.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <input
                        type="text"
                        placeholder="Institution"
                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={education.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="date"
                      placeholder="Graduation Date"
                      className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      value={education.graduationDate}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "graduationDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded-md"
                onClick={addEducation}
              >
                Add Education
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="certifications"
                className="block font-medium text-gray-600"
              >
                Certifications
              </label>
              {formData.certifications.map((certification, index) => (
                <div key={index} className="flex mb-2">
                  <div className="w-1/2 mr-2">
                    <input
                      type="text"
                      placeholder="Certification"
                      className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      value={certification}
                      onChange={(e) =>
                        handleCertificationChange(index, e.target.value)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                    onClick={() => removeCertification(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded-md"
                onClick={addCertification}
              >
                Add Certification
              </button>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 p-8 overflow-y-auto border-l border-gray-300">
          <div className="w-1/2 p-8 overflow-y-auto border-l border-gray-300">
            <h2 className="text-2xl font-bold mb-4">CV Preview</h2>
          </div>
          <div className="bg-white h-[842px] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-3xl text-blue-700 font-bold mb-2">
                  {formData.firstName} {formData.lastName}
                </p>
                <p className="text-gray-600 font-bold mb-2">{formData.role}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">{formData.email}</p>
                <p className="text-gray-600 text-sm mb-4">{formData.phone}</p>
              </div>
            </div>
            <hr />
            <br />

            {/* Experience and Skills Preview */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 pr-4">
                <h3 className="text-blue-700 font-bold mb-2">Experience</h3>
                {formData.experiences.map((experience, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-lg font-bold mb-1">
                      {experience.jobTitle}
                    </p>
                    <p className="text-gray-600">
                      {experience.employer}, {experience.startDate} -{" "}
                      {experience.endDate}, {experience.city}
                    </p>
                    <p className="text-gray-800">{experience.description}</p>
                  </div>
                ))}
                <h3 className="text-blue-700 font-bold mb-2 mt-4">Education</h3>
                {formData.educations.map((education, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-lg font-bold mb-1">{education.degree}</p>
                    <p className="text-gray-600">
                      {education.institution}, Graduated:{" "}
                      {education.graduationDate}
                    </p>
                  </div>
                ))}
              </div>
              <div className="md:w-1/4">
                <h3 className="text-blue-700 font-bold mb-2">Skills</h3>
                <ul className="list-disc pl-4">
                  {formData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <h3 className="text-blue-700 font-bold mb-2 mt-4">
                  Certifications
                </h3>
                <ul className="list-disc pl-4">
                  {formData.certifications.map((certification, index) => (
                    <li key={index}>{certification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
    </>
  );
}
