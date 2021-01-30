import React from 'react'
import livingSmall from "../assets/living-small.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faShareAlt,faEuroSign,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


export default function PinSofa({handleClick, toggleSofa}) {
    return (
        <div className="box-sofa">
          <FontAwesomeIcon
            onClick={() => handleClick("sofa")}
            //className={`sofa-icon ${toggle ? "active" : ""}`}
            className="sofa-icon"
            name="sofa"
            size="3x"
            icon={faMapPin}
            color="orange"
          />
          {toggleSofa && (
            <div className="active-sofa shadow">
              <img
                className="image-small-sofa"
                src={livingSmall}
                alt="living-room-small"
              />
              <div className="details-sofa">
                <h2>Ekero</h2>
                <p>
                  1180 <FontAwesomeIcon icon={faEuroSign} />
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
