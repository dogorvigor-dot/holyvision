import React, { useState } from "react";
import NavbarMain from "./NavbarMain";
// Reusable Input Field
const InputField = ({ label, type = "text", name, value, onChange }) => (
  <div>
    <label className="font-semibold">{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded mt-1"
    />
  </div>
);

// Reusable Select Field
const SelectField = ({ label, name, value, onChange, options = [] }) => (
  <div>
    <label className="font-semibold">{label}:</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded mt-1"
    >
      <option value="">Select {label}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default function AdmissionInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    municipality: "",
    ward: "",
    district: "",
    province: "",
    schoolName: "",
    graduationYear: "",
    percentage: "",
    gpa: "",
    program: "",
    applicantContact: "",
    guardianContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Placeholder: Replace with actual API call
    alert("Form submitted successfully!");
  };

  const genderOptions = ["Male", "Female", "Other"];
  const provinceOptions = [
    "Province 1",
    "Province 2",
    "Bagmati",
    "Gandaki",
    "Lumbini",
    "Karnali",
    "Sudurpashchim",
  ];

  return (
    <>
      <NavbarMain />
      <div className="pt-[120px] mb-7">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl border mt-10">
          {/* Header */}
          <div className="text-center border-b pb-4 mb-6">
            <img src="/logo.png" alt="logo" className="h-20 mx-auto mb-2" />
            <h1 className="text-2xl font-bold">Holy Vision Technical Campus</h1>
            <p className="text-sm">(Affiliated to CTEVT)</p>
            <p className="text-sm font-semibold">New-Baneshwor, Kathmandu</p>
            <h2 className="text-xl font-bold mt-4">Admission Inquiry Form</h2>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={genderOptions}
              />
              <InputField
                label="Date of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Father's Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
              <InputField
                label="Mother's Name"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <InputField
                label="Municipality"
                name="municipality"
                value={formData.municipality}
                onChange={handleChange}
              />
              <InputField
                label="Ward No"
                type="number"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
              />
              <InputField
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
              <SelectField
                label="Province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                options={provinceOptions}
              />
            </div>

            <InputField
              label="Name of SEE/SLC Graduated School"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Year of SEE/SLC Graduated"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
              />
              <InputField
                label="SLC/SEE Percentage"
                name="percentage"
                value={formData.percentage}
                onChange={handleChange}
              />
            </div>

            <InputField
              label="SEE GPA"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
            />

            <InputField
              label="Interested Program"
              name="program"
              value={formData.program}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Applicant's Contact No."
                name="applicantContact"
                value={formData.applicantContact}
                onChange={handleChange}
              />
              <InputField
                label="Guardian's Contact No."
                name="guardianContact"
                value={formData.guardianContact}
                onChange={handleChange}
              />
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
}
