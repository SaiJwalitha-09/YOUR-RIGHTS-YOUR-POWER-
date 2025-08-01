import React, { useState } from "react";

export const ProblemSubmission = ({ onSubmit }) => {
  const [problem, setProblem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(problem);
    setProblem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Describe your problem:
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};