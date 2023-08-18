import "./card.css";

export default function Card({ info ,onPlusAge,onMinusAge,onReset}) {
  const { image, name, role, birthday, mark, edu, address, email, phone,age } = info;
  return (
    <div className="card d-flex">
      <img className="picute" src={image} alt="" />
      <div className="intro flex-column align-items-center">
        <h4>{name}</h4>
        <p>{role}</p>
        <p className="display-one-line mt-3">{age}</p>
        <button onClick={onPlusAge} className="btn btn-primary mt-3 w-auto" >Gia them 1 tuoi</button>
        <button onClick={onMinusAge} className="btn btn-primary mt-3 w-auto">Tre di 1 tuoi</button>
        <button onClick={onReset} className="btn btn-primary mt-3 w-auto">Ve 0 </button>
      </div>
      <div className="info-warpper">
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-calendar-days"></i>
            <span>DOB</span>
          </div>
          <div className="info-content">{birthday}</div>
        </div>
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-heart"></i>
            <span>BG</span>
          </div>
          <div className="info-content">{mark}</div>
        </div>
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-user-graduate"></i>
            <span>EDU</span>
          </div>
          <div className="info-content">{edu}</div>
        </div>
        <div className="info">
          <div className="icon d-flex">
            <i className="fa-solid fa-map"></i>
            <span>RES</span>
          </div>
          <div className="info-content">{address}</div>
        </div>
      </div>
      <div className="contact-warpper">
        <div className="contact bg-red">
          <h5>EMAIL ID</h5>
          <div className="icon">
            <i
              className="fa-solid fa-envelope"
              style={{ color: "#fafcff" }}
            />

            <span>{email}</span>
          </div>
        </div>
        <div className="contact bg-green">
          <h5>PHONE NO</h5>
          <div className="icon">
            <i className="fa-solid fa-phone" style={{ color: '#fafcff' }} />

            <span>{phone}</span>
            </div>
            </div>
      </div>
    </div>
  );
}
