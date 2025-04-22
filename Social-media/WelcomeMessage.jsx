const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcomemsg">
      <h1>There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
