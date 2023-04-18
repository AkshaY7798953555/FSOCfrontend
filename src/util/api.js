const apiUrl = "http://localhost:3000"; // Replace with your backend API URL

export const registerUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/user-create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/user-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

};

export const getuser = async (user_id) => {
  try {
    const response = await fetch(`${apiUrl}/dev/get-user?user_id=`+user_id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

};


export const useraddress = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/user-address`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateaddress = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/update-address `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateCenter = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/create-center  `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const AddCenter = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/add-center  `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getcenter = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/get-center`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteuser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/delete-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const DeletAddress = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/delete_addressuser-user `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const deleteCenter = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev//dev/delete-center `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Calculate = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/dev/calculate-distance  `, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
