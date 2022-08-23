import React from "react";

export const TextInput = ({ label, type, placeholder, onChange }) => {
  return (
    <label className="text-base block w-full">
      {label}
      <input
        className="block p-2 rounded focus:outline-none focus:border-black focus:dark:border-yellow-400 text-black w-full my-2"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
