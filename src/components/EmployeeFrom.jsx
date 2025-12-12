import { useState } from "react";
import axios from "axios";

export default function EmployeeFrom ({
    const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    })); 
  }; 
  const handleSubmit = (e) => {
    const URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    e.preventDefault();
    setLoading(true);
    try {
        await axios.post(URL, formData).then(() => {
        setFormData({ name: "", lastname: "", position: "" });
        fetchdata();
      });
    } catch (error) {
      console.error("Cannot create user:", error);
    } finally {
      setLoading(false);
    }
    };
    return (
        <form
      onSubmit={handleSubmit}
      className="InputField flex flex-col justify-between gap-4 mt-2 md:flex-row"
    >
      <input
        className=" bg-violet-50 grow p-2 rounded-lg shadow-md"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={onChange}
        disabled={loading}
      ></input>
      <input
        className=" bg-violet-50 grow p-2 rounded-lg shadow-md"
        placeholder="Lastname"
        name="lastname"
        value={formData.lastname}
        onChange={onChange}
        disabled={loading}
      ></input>
      <input
        className=" bg-violet-50 grow p-2 rounded-lg shadow-md"
        placeholder="Position"
        name="position"
        value={formData.position}
        onChange={onChange}
        disabled={loading}
      ></input>
      <button
        type="submit"
        className=" bg-violet-400 p-2 rounded-lgbg-violet-50 shadow-md hover:shadow-lg"
        disabled={loading}
      >
        Save
      </button>
    </form>
    );
