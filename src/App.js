// import { useEffect } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import Hero from "./components/hero/hero";
// import Navbar from "./components/navbar/Navbar";
// import SearchBar from "./components/searchBar/SearchBar";
// import Sidebar from "./components/sidebar/sidebar";
// import firebase from "./firebase";

// import "./App.css";

// function App() {
//   async function writeUserData(name, surname) {
//     try {
//       const docRef = await addDoc(collection(firebase.database, "users"), {name, surname});

//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

// useEffect(() => {
//   writeUserData('chukwudi', 'eze')
// }, [])

//   return (
//     <div className="app">
//       <Navbar />
//       <SearchBar />
//       <div className="content-wrapper">
//         <Sidebar />
//         <Hero />
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Root from "./routes/roots";

function App() {
  return (
    <div>
      <Root />
    </div>
  );
}

export default App;
