import { ChangeEvent, useState } from "react";
import { useApp } from "../contexts/AppContext";
import { Container } from "./Container";
import { Input } from "./UI/Input";

export const StepOne = () => {
  const { setInfo, info } = useApp();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInfo((current) => ({ ...current, [name]: value }));
  };
  return (
    <Container>
      <div className="flex gap-5 flex-col">
        <p className="text-2xl font-bold text-primaryBlue ">Personal info</p>
        <p className="text-lg font-medium text-secondaryGray">
          Please provide your name, email <br /> address, and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-5 pt-5 ">
        <Input
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          type={"text"}
          required
          onChange={changeHandler}
          value={info.name}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="e.g stephenking@lorem.com"
          type={"email"}
          required
          value={info.email}
          onChange={changeHandler}
        />
        <Input
          name="phoneNumber"
          label="Phone Number"
          placeholder="e.g. +1 234 456 789"
          type={"tel"}
          required
          value={info.phoneNumber}
          onChange={changeHandler}
        />
      </form>
    </Container>
  );
};
