"use client";
import React from "react";
import { LandingPage } from "@/components/pages";
import SimpleLayout from "@/layout/customLayout";
import { Toastt } from "./Toastt";
const page = () => {
  return (
    <SimpleLayout>
      {/* <LandingPage/>  */}
      <Toastt />
    </SimpleLayout>
  );
};
export default page;
