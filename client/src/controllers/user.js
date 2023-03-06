const base = "https://talent-box.onrender.com";

export const register_user = async (obj) => {
  const res = await fetch(`${base}/api/user/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};
export const auth_user = async (obj) => {
  const res = await fetch(`${base}/api/user/auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const login_user = async (obj) => {
  const res = await fetch(`${base}/api/user/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_all_courses = async (obj) => {
  const res = await fetch(`${base}/api/user/allcourses`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};





