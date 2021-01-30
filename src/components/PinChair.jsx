import React from 'react'
import chairSmall from "../assets/chair-small.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faShareAlt,faEuroSign,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


export default function PinChair({handleClick,toggleChair}) {
    return (
        <div className="box-chair">
          <FontAwesomeIcon
            className="chair-icon"
            name="chair"
            onClick={() => handleClick("chair")}
            size="3x"
            icon={faMapPin}
            color="orange"
          />
          {toggleChair && (
            <div className="active-chair shadow">
              <img
                className="image-small-chair"
                src={chairSmall}
                alt="living-room-small"
              />
              <div className="details-chair">
                <h2>Chair</h2>
                <p>
                  120 <FontAwesomeIcon icon={faEuroSign} />
                </p>
                <div className="small-icons">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faShoppingBasket}
                    color="orange"
                  />
                  <FontAwesomeIcon size="2x" icon={faShareAlt} color="orange" />
                </div>
              </div>
            </div>
          )}
        </div>
    )
}
