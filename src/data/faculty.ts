export type Faculty = {
  name: string;
  designation: string;
  image: string;
  email: string;
};

const priority = {
  "Associate Professor": 4,
  "Assistant Professor": 3,
  "Assistant Professor (Contract)": 2,
  "Instructor Gr.I": 1,
};

function sortFaculty(faculty: Faculty[]) {
  return [...faculty]
    .map((e) => ({ ...e, name: e.name.toLocaleLowerCase() }))
    .sort((a, b) => {
      const aPriority = priority[a.designation as keyof typeof priority] || 0;
      const bPriority = priority[b.designation as keyof typeof priority] || 0;

      return bPriority - aPriority;
    });
}

export const faculty: Faculty[] = sortFaculty([
  {
    name: "Mr. VIPIL K",
    designation: "Assistant Professor (Contract)",
    image: "",
    email: "dmlwaWxrQGdlY3NrcC5hYy5pbg==",
  },
  {
    name: "SOUMYA C P",
    designation: "Assistant Professor (Contract)",
    image: "",
    email: "c291bXlhY3BAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "Prof. ANWAR HUSSAIN M.",
    designation: "Associate Professor",
    image: "",
    email: "YW53YXJodXNzYWlubUBnZWNza3AuYWMuaW4=",
  },
  {
    name: "Dr. BINDU P(PALAKKAL)",
    designation: "Associate Professor",
    image: "",
    email: "YmluZHVwQGdlY3NrcC5hYy5pbg==",
  },
  {
    name: "Prof. SHAMLA B",
    designation: "Assistant Professor",
    image: "",
    email: "c2hhbWxhc2FmaW5AeWFob28uY29t",
  },
  {
    name: "Prof. RANI L",
    designation: "Assistant Professor",
    image: "",
    email: "cmFuaWxAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "Prof. HARIPRASAD B",
    designation: "Assistant Professor",
    image: "",
    email: "aHBtYWxhYmFyQGdtYWlsLmNvbQ==",
  },
  {
    name: "Prof. VISHNUPRASAD K",
    designation: "Assistant Professor",
    image: "",
    email: "dmlzaG51cHJhc2FkQGdlY3NrcC5hYy5pbg==",
  },
  {
    name: "Prof. LINCY K",
    designation: "Assistant Professor",
    image: "",
    email: "bGluY3lrNDVAZ21haWwuY29t",
  },
  {
    name: "Prof. DR. ANITHA R",
    designation: "Assistant Professor",
    image: "",
    email: "cmFuaXRoYUBnZWNza3AuYWMuaW4=",
  },
  {
    name: "Dr. R JAYADEVAN",
    designation: "Assistant Professor",
    image: "",
    email: "cmpheWFkZXZhbkBnZWNza3AuYWMuaW4=",
  },
  {
    name: "Prof. GAYATHRI A",
    designation: "Assistant Professor",
    image: "",
    email: "Z2F5YXRocmkuYTI3OTFAZ21haWwuY29t",
  },
  {
    name: "Prof. DR. SHEELA V K",
    designation: "Assistant Professor",
    image: "",
    email: "c2hlZWxhdmtAZ2Vjc2twLmFjLmlu",
  },
  {
    name: "NIRMAL M R",
    designation: "Assistant Professor",
    image: "",
    email: "bmxybWFsYW1iYWQ2QGdtYWlsLmNvbQ==",
  },
  {
    name: "DILEEP M",
    designation: "Assistant Professor",
    image: "",
    email: "ZGlsZWVwbWFkaGF2YW5AZ2Vjc2twLmFjLmlu",
  },
  {
    name: "JITHESH C P",
    designation: "Assistant Professor",
    image: "",
    email: "aml0aHU4MEBnbWFpbC5jb20=",
  },
  {
    name: "Dr. CHITHIRA P. R.",
    designation: "Assistant Professor",
    image: "",
    email: "Y2hpdGhpcmFwckBnbWFpbC5jb20=",
  },
  {
    name: "Mrs. GARGI S",
    designation: "Assistant Professor (Contract)",
    image: "",
    email: "Z2FyZ2lzcmVlNDVAZ21haWwuY29t",
  },
  {
    name: "Mrs. NIRMALA K V",
    designation: "Instructor Gr.I",
    image: "",
    email: "bmxybWFsYTIwMTdzQGdtYWlsLmNvbQ==",
  },
]);
