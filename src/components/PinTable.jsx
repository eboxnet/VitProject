import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin,faShareAlt,faEuroSign,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import tableSmall from "../assets/table-small.jpg"

export default function PinTable({toggleTable,handleClick}) {
    return (
<div className="box-table">
          <FontAwesomeIcon
            onClick={() => handleClick("table")}
            className="table-icon"
            name="table"
            size="3x"
            icon={faMapPin}
            color="orange"
          />
          {toggleTable && (
            <div className="active-table shadow">
              <img
                className="image-small-table"
                src={tableSmall}
                alt="living-room-small"
              />
              <div className="details-table">
                <h2>Table</h2>
                <p>
                  180 <FontAwesomeIcon icon={faEuroSign} />
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
