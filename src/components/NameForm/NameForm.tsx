import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
};

const NameForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ firstName: "", lastName: "" });

  const update =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <input
          className="px-3 py-2 rounded "
          value={form.firstName}
          onChange={update("firstName")}
          placeholder="First Name"
        />
        <input
          className="px-3 py-2 rounded"
          value={form.lastName}
          onChange={update("lastName")}
          placeholder="Last Name"
        />
      </div>
      <p className="text-yellow-300 font-bold mt-3">
        Full:{" "}
        <span className="text-white">
          {form.firstName} {form.lastName}
        </span>
      </p>
    </div>
  );
};

export default NameForm;
