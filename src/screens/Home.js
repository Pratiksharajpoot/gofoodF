import React, { useEffect, useState } from "react";
// import "/index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import { search } from "../../backend/Routes/CreateUser";

// import Carousel from 'react-bootstrap/Carousel'
export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("https://localhost:5000/api/foodData", {
  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className=" bg-dark text-white">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="outer">
          <div id="carouselExampleFade">
            <div id="carousel" style={{ zIndex: "10" }}>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <div>
                    <img
                      className=" d-block  w-100"
                      src="https://source.unsplash.com/random/10×10/?burger"
                      // style={{ width: '500px', height: '570px' ,backgroundimage:"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))"}}
                      // style={{ background: "rgba(0,0,0,0.5)" }}
                      alt="First slide"
                    />
                  </div>

                
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <img
                      className="d-block  w-100"
                      src="https://source.unsplash.com/random/10×10/?sandwitch"
                      // style={{ width: '500px', height: '40px' }}
                      alt="Second slide"
                    />
                  </div>
            
                </Carousel.Item>
                <Carousel.Item>
                 
                    <div className="bg-image">
                      <img
                        className="d-block w-100 "
                        src="https://source.unsplash.com/random/10×10/?pizza"
                        // style={{ width: '500px', height: '570px' }}
                        // style={{  'backgroundColor': 'rgba(0, 0, 0, 0.6)' }}
                        alt="Third slide"
                      />
                    </div>
                   
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="carousel-caption d-none d-md-block d-flex justigy-content-center">
              {/* <input type="search" placeholder="Search"  className=" btn btn-dark  bg dark overlay " aria-describedby="search-addon" style={{"width":"80%"}}  /> */}
              <input
                type="search"
                className=" overlay text-light btn btn-dark "
                placeholder="Search"
                aria-label="Search"
                style={{ width: "90%", "text-align": "left " }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {foodCat !=[]
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-2 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem != [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3 "
                          >
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such B=Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
