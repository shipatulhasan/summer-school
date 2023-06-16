export const saveUser = async (user) => {
  const res = await fetch(
    `${import.meta.env.VITE_APP_api}/user/${user?.email}`,
    {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("biker-point-token")}`,
      },
      body: JSON.stringify(user),
    }
  );
  const data = await res.json();
  return data;
};
