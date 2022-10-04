import "./spinner.css";

const Spinner = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </section>
  );
};

export default Spinner;
