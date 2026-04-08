import { create } from "zustand";

const useAuthStore = create(() => ({
  role: localStorage.getItem("auth_role"),
  email: localStorage.getItem("auth_email"),
  name: localStorage.getItem("auth_name"),
}));

export default useAuthStore;
