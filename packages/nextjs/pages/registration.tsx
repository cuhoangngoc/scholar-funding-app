import { useState } from "react";
import { useStateContext } from "../context";
import { CustomButton, FormField, Loader } from "../components";

const Registration = () => {
  const { registerStudent } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    email: "",
    cicd: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm(p => ({ ...p, [fieldName]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await registerStudent(form.name, form.studentId, form.email, form.cicd);
    setIsLoading(false);
  };

  return (
    // <div>
    //   <h1>Student Registration</h1>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <label htmlFor="name">Name</label>
    //         <input type="text" id="name" onChange={event => setName(event.target.value)} />

    //         <label htmlFor="studentId">Student ID</label>
    //         <input type="text" id="studentId" onChange={event => setStudentId(event.target.value)} />

    //         <label htmlFor="email">Email</label>
    //         <input type="email" id="email" onChange={event => setEmail(event.target.value)} />

    //         <label htmlFor="cicd">CICD</label>
    //         <input type="text" id="cicd" onChange={event => setCicd(event.target.value)} />
    //       </div>
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </div>

    <div className="flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-primary rounded-[10px]">
        {" "}
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px]">Register as a student</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px] ">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={e => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Student ID *"
            placeholder="Your Student ID"
            inputType="text"
            value={form.studentId}
            handleChange={e => handleFormFieldChange("studentId", e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Email *"
            placeholder="example@gmail.com"
            inputType="text"
            value={form.email}
            handleChange={e => handleFormFieldChange("email", e)}
          />
          <FormField
            labelName="CICD *"
            placeholder="Your CICD"
            inputType="text"
            value={form.cicd}
            handleChange={e => handleFormFieldChange("cicd", e)}
          />
        </div>

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton btnType={"submit"} title="Register" styles="bg-[#1dc071]" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
