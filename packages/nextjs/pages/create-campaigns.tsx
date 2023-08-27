import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CustomButton, FormField, Loader } from "../components";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils/checkIfImage";
import { ethers } from "ethers";

export default function CreateCampaigns() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    image: "",
    deadline: "",
  });
  const { createCampaign } = useStateContext();
  const handleFormFieldChange = (fieldName, e) => {
    setForm(p => ({ ...p, [fieldName]: e.target.value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    checkIfImage(form.image, async exists => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        router.push("/campaigns");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  // at least 3 days from now
  const date = new Date().getTime() + 86400000 * 3;
  const min = new Date(date).toISOString().slice(0, 10);
  return (
    <>
      <Head>
        <title>Create Campaign</title>
      </Head>
      <div className="flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
        {isLoading && <Loader />}
        <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-primary rounded-[10px]">
          {" "}
          <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px]">Start a campaign</h1>
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
              labelName="Campaign Title *"
              placeholder="Write a title"
              inputType="text"
              value={form.title}
              handleChange={e => handleFormFieldChange("title", e)}
            />
          </div>

          <FormField
            labelName="Description *"
            placeholder="Why you need this campaign?"
            isTextArea
            value={form.description}
            handleChange={e => handleFormFieldChange("description", e)}
          />

          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Goal *"
              placeholder="ETH 0.50"
              inputType="text"
              value={form.target}
              handleChange={e => handleFormFieldChange("target", e)}
            />
            <FormField
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={e => handleFormFieldChange("deadline", e)}
              min={min}
            />
          </div>
          <FormField
            labelName="Campaign Image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={e => handleFormFieldChange("image", e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton btnType={"submit"} title="Submit new campaign" styles="bg-[#1dc071]" />
          </div>
        </form>
      </div>
    </>
  );
}
