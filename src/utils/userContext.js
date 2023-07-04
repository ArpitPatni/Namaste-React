import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy@gmail.com",
  },
});

export default userContext;
