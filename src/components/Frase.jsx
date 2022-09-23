import Card from "react-bootstrap/Card";

const Frase = () => {
  return (
    <section className="row bg-white my-5 p-5">
      <aside className="col-4">
        <img
          src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd86034034e0170124eec/download/image.png"
          alt="Homer Simpson" className="w-100"
        />
      </aside>
      <aside className="col-8">
        <div>
          <h3>Homer Simpson</h3>
          <p className="fs-5">
            Facts are meaningless. You could use facts to prove anithing that's
            even remotely true.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Frase;
