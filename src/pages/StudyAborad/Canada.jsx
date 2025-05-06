import React from "react";
import canada from "../../assets/country/canada.webp";
import { useTranslation } from "react-i18next";
import FaqsCard from "../components/FaqsCard";

import Sidebar from "./Sidebar";
const Canada = () => {
  const { t } = useTranslation();
  const faqsList = [
    {
      q: t("studyabrod.canada.subTextL.subhfh0"),
      a: t("studyabrod.canada.subTextL.subhfp0"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh1"),
      a: t("studyabrod.canada.subTextL.subhfp1"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh2"),
      a: t("studyabrod.canada.subTextL.subhfp2"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh3"),
      a: t("studyabrod.canada.subTextL.subhfp3"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh4"),
      a: t("studyabrod.canada.subTextL.subhfp4"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh5"),
      a: t("studyabrod.canada.subTextL.subhfp5"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh6"),
      a: t("studyabrod.canada.subTextL.subhfp6"),
    },
    {
      q: t("studyabrod.canada.subTextL.subhfh7"),
      a: t("studyabrod.canada.subTextL.subhfp7"),
    },
  ];
  return (
    <div className="bg-white my-10">
      <hr class="hidden md:block h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div
        className="bg-cover bg-center md:py-16 px-2 min-h-[50vh] w-full md:min-h-[80vh] relative md:my-4"
        style={{ backgroundImage: `url(${canada})` }}
      >
        <div className="hidden sm:block bg-redest-dark/85 max-w-screen-sm p-8 md:ml-15 space-y-5">
          <h2 className="text-white text-4xl font-bold font-quicksand">
            {t("studyabrod.canada.topText.cath")}
          </h2>
          <p className="text-white text-lg font-quicksand font-medium">
            {t("studyabrod.canada.topText.catp")}
          </p>
        </div>
      </div>
      <section className="block sm:hidden bg-redest-dark/85 max-w-screen-xl mx-auto p-4 space-y-5">
        <h2 className="text-white text-3xl font-bold font-quicksand">
          {t("studyabrod.canada.topText.cath")}
        </h2>
        <p className="text-white text-md font-quicksand font-medium">
          {t("studyabrod.canada.topText.catp")}
        </p>
      </section>

      <section className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-gray-800 text-4xl font-bold font-quicksand">
              {t("studyabrod.canada.subTextL.subTextLh")}
            </h1>
            <div className="mt-14">
              {faqsList.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
};

export default Canada;
