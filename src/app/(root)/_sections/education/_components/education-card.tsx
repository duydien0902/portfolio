import React from "react";

interface ResumeCardProps {
  range_yaer: string;
  title: string;
  school: string;
}

export default function EducationCard({
  range_yaer,
  school,
  title,
}: ResumeCardProps) {
  return (
    <div className="p-6 col-span-2 md:col-span-1 space-y-6 border rounded-md shadow">
      <p className="font-bold text-yellow-500 text-2xl">{range_yaer}</p>
      <p className="capitalize text-2xl">{title}</p>
      <p className="uppercase text-gray-400 font-semibold text-sm">{school}</p>
    </div>
  );
}
