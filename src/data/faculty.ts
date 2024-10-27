export type Faculty = {
  name: string;
  designation: string;
  image: string;
  email: string;
};

export type Staff = {
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

const staffDesignationPriority: { [key: string]: number } = {
  "Computer Programmer": 5,
  "Trade Instructor Gr.I": 4,
  "Trade Instructor Gr.II": 3,
  "Instructor Gr.II": 2,
  Tradesman: 1,
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

export function sortStaff(staff: Staff[]) {
  return [...staff]
    .map((e) => ({ ...e, name: e.name.toLocaleLowerCase() }))
    .sort((a, b) => {
      const priorityA = staffDesignationPriority[a.designation] || 0;
      const priorityB = staffDesignationPriority[b.designation] || 0;

      return priorityB - priorityA;
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

export const staff: Staff[] = sortStaff([
  {
    name: "MUHAMMAD ALI M",
    designation: "Instructor Gr.II",
    image: "",
    email: "YWxpYXNtbTA3N0BnbWFpbC5jb20=",
  },
  {
    name: "MR. SATHYANATH VARIATH",
    designation: "Computer Programmer",
    image: "",
    email: "c2F0aHlhbi5lY0BnbWFpbC5jb20=",
  },
  {
    name: "SURESHBABU P",
    designation: "Trade Instructor Gr.II",
    image: "",
    email: "c3VyZXNoYmFidW1nbUBnbWFpbC5jb20=",
  },
  {
    name: "SARJA K K",
    designation: "Trade Instructor Gr.II",
    image: "",
    email: "c2FyamFuYXphckBnbWFpbC5jb20=",
  },
  {
    name: "MANOJ K P",
    designation: "Trade Instructor Gr.I",
    image: "",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  {
    name: "MR. MAHESH C",
    designation: "Tradesman",
    image: "",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  {
    name: "SAJITHA C",
    designation: "Tradesman",
    image: "",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  {
    name: "SUJA M R",
    designation: "Tradesman",
    image: "",
    email: "RW1haWwgVW5hdmFpbGFibGU=", // Email Unavailable
  },
  {
    name: "RADHAKRISHNAN K",
    designation: "Tradesman",
    image: "",
    email: "cmFkaGFrcmlzaG5hbjE5ODdAZ21haWwuY29t",
  },
  {
    name: "SIVAHARI P K",
    designation: "Tradesman",
    image: "",
    email: "c2l2YWhhcmlwa0BnbWFpbC5jb20=",
  },
  {
    name: "SESHADRI A S",
    designation: "Trade Instructor Gr.II",
    image: "",
    email: "c2VzaGFkcmlwYWxha2thZEBnbWFpbC5jb20=",
  },
  {
    name: "ASKARALI C",
    designation: "Trade Instructor Gr.II",
    image: "",
    email: "YXNrYXJwb2x5QGdtYWlsLmNvbQ==",
  },
]);
