import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

    const navigate = useNavigate();


    return (
        <div style={{
            margin: "2%",
            backgroundColor: "#8A6DF178",
            borderRadius: "5%",
            border: "2px solid #8a6df1",
            padding: "2%",
            marginTop: "2%",
            marginBottom: "2%",
            minHeight: "250px",
            alignContent: "center",
            display: "grid",
        }}>
            <h1>Erro 404</h1>
            <h1 style={{ fontSize: "30px", color: "rgb(56, 55, 55)" }}>Página não encontrada :X</h1>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
                <button onClick={() => navigate("/home")}>Voltar ao início</button>
            </p>
        </div>

    );
}

export default NotFound;