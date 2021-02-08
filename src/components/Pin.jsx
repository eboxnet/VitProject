import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faShareAlt,faEuroSign,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function Pin({handleClick,name,price,img,visible}) {
    return (
<div className={`box-${name}`}>
          <FontAwesomeIcon
            onClick={() => handleClick(name)}
            className={`${name}-icon`}
            name={name}
            size="3x"
            icon={faMapPin}
            color="orange"
          />
          {visible && (
            <div className={`active-${name} shadow`}>
              <img
                className={`image-small-${name}`}
                src={img}
                alt="living-room-small"
              />
              <div className={`details-${name}`}>
                <h2>{name}</h2>
                <p>
                  {price} <FontAwesomeIcon icon={faEuroSign} />
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
