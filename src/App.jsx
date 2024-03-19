import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList
        isPosting={modalIsVisible}
        hideModalHandler={hideModalHandler}
      />
    </main>
  );
}

export default App;
