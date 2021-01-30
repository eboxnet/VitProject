import React from 'react'
import lampSmall from "../assets/lamp-small.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faShareAlt,faEuroSign,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function PinLamp({handleClick,toggleLamp}) {
    return (
<div className="box-lamp">
          <FontAwesomeIcon
            onClick={() => handleClick("lamp")}
            className="lamp-icon"
            name="lamp"
            size="3x"
            icon={faMapPin}
            color="orange"
          />
          {toggleLamp && (
            <div className="active-lamp shadow">
              <img
                className="image-small-lamp"
                src={lampSmall}
                alt="living-room-small"
              />
              <div className="details-lamp">
                <h2>Lamp</h2>
                <p>
                  80 <FontAwesomeIcon icon={faEuroSign} />
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
