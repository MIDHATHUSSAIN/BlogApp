import list from "../data/data.json";
function CARD() {
  const filterdata = list.filter((data) => data.category === "free");

  return (
    <div id="free-book" className="flex flex-wrap justify-evenly items-center md:mt-2">
      {filterdata.map((p) => (
        <div className="card bg-base-100 w-96 shadow-xl md: mt-8">
          <figure>
            <img src={p.image} alt="Shoes" id="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {p.name}
              <div className="badge badge-secondary">FREE</div>
            </h2>
            <p>{p.title}</p>
            <div className="card-actions justify-end">
               <button className="btn bg-pink-500 text-white">Read Book</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CARD;
