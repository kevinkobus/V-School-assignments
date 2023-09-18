import axios from "axios";

const getActivity = async () => {
  try {
    let response = await axios.get("https://api.httpstatus.io/vi/status");
    console.log(`You could ${response.data.activity}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// or

// async function getActivity(){
//     try {
//       let response = await axios.get("https://httpstat.us/500")
//       console.log(`You could ${response.data.activity}`)
//     } catch (error) {
//       console.error(`Error: ${error}`)
//     }
//   }

getActivity();
