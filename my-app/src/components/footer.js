import scanlogo2 from "../pics/scanlogo2.svg"

function footer() {
    return (
     <div className="footer">
        <img src={scanlogo2}></img>
        <div>
            <p>г. Москва, Цветной б-р, 40</p>
            <p> +7 495 771 21 11 info@skan.ru</p>
            <p>Copyright. 2022</p>
        </div>
     </div>
    );
  }
  
  export default footer;