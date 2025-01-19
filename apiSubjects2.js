import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/app/v1/tours";

export async function apiSubject2() {
  let url = BASE_URL;

  console.log(url);

  const res = await fetch(url);
  const { data, error } = await res.json();

  if (error) {
    console.error(error);
    throw new Error("Subject could not be loaded");
  }
  console.log(data);
  return data;
}

export async function createSubject2(data1) {
  console.log(data1);

  try {
    const { data } = await axios.post(BASE_URL, data1);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Subject could not be created");
  }
}
//
///
///
///

export async function createcompany(data1) {
  console.log(data1);
  const BASE_URL2 =
    "https://mycashback.mycashtest.com/api/companyRequest/create";

  try {
    const response = await fetch(BASE_URL2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Company could not be created");
  }
}
