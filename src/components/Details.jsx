import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hoteis from '../hoteis.json';

function Details() {

    const navigate = useNavigate();
    const params = useParams();
    const hotel = hoteis.find((hotel) => hotel.id === Number(params.id));




    return (
        <div
        style={
            {
                border: "6px solid #644F7A",
                borderRadius: "5%",
                alignItems: "center",
                flexDirection: "column",
                width: "350px",
                height: "700px",
                transition: "all ease 0.3s",
                cursor: "pointer",
                padding: "0.5rem",
                marginRight: "15px",
                marginLeft: "15px",
                marginTop: "15px",
                marginBottom: "15px",
            }
        }
    >
        <img
            src={hotel.img}
            alt={hotel.name}
            style={
                {
                    width: "90%",
                    height: "30%",
                    borderRadius: "5%",
                }
            }
        />

            <div className="title">{hotel.name}</div>
            <div className="description-stars">{hotel.stars} estrelas</div>
            <div className="daily">{hotel.daily_price}</div>
            <div className="phone">{hotel.phone}</div>
            <div className="email">{hotel.email}</div>
            <div className="description">{hotel.description}</div>
        
        <button
                onClick={()=>{navigate(-1)}}
                style={{ margin: "2%" }}>Voltar
        </button>
    </div>
    )
}

export default Details;