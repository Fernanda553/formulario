const SocialButton = ({ icon }) => {
  return (
    <>
      <button style={{ border: 0, background: "none", cursor: "pointer" }}>
        <i
          style={{ fontSize: "30px" }}
          className={`border border-dark rounded-circle p-3 fa-brands fa-${icon} `}
        ></i>
      </button>
    </>
  );
};

export default SocialButton;
