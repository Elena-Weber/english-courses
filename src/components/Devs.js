import DevsModules from "./devs/DevsModules";

const Devs = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <DevsModules />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Devs;