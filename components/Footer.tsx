export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {currentYear} Karthikeyan. All Rights Reserved.
        </p>

        <p
          style={{
            marginTop: "10px",
            fontSize: "0.9rem",
          }}
        >
        </p>
      </div>
    </footer>
  );
}