import React from "react";

interface DumpProps {
  children: object;
}

const Dump: React.FC<DumpProps> = ({ children }) => {
  return (
    <div>
      <pre>{JSON.stringify(children, null, 4)}</pre>
    </div>
  );
};

export default Dump;
