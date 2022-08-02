import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/Products";
import Nav from "react-bootstrap/Nav";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";
import SortsFilters from "../components/SortsFilters";

function Home(props) {
  const [shoesList, setShoes] = useState([]);

  const [brandSelect, setBrandSelect] = useState("");
  const [filterPrice, setFilterPrice] = useState(1000);
  const [sortType, setSortType] = useState(0);
  const { onAdd } = props;
  const [value, setValue] = React.useState(1000);
  const [shoesDB, setShoesDB] = useState([]);
  const [gender, setGender] = useState("All");

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((shoesResponse) => {
        setShoes(shoesResponse);
        setShoesDB(shoesResponse);
      });
  }, []);

  function slider(e) {
    setValue(e);
    setFilterPrice(value);
  }

  function handleSorting(value) {
    setSortType(value);
  }

  function handleBrandChange(selectedBrand) {
    setBrandSelect(selectedBrand);
  }
  function handleSearch(search) {
    let newShoes = [...shoesDB];
    newShoes = shoesDB.filter(
      (shoe) =>
        shoe.brand.toLowerCase().includes(search.toLowerCase(), 0) ||
        shoe.model.toLowerCase().includes(search.toLowerCase(), 0)
    );
    setShoes(newShoes);
  }
  function handleGender(selectedGender) {
    setGender(selectedGender);
  }
  function handleClear() {
    setFilterPrice(1000);
    setBrandSelect("");
    setSortType(0);
    setGender("All");
  }
  useEffect(() => {
    const filterMaster = () => {
      let newShoes = [...shoesDB];
      newShoes = shoesDB.filter(
        (shoe) =>
          shoe.brand.includes(brandSelect, 0) && shoe.price <= filterPrice
      );

      if (parseInt(sortType) === 2) {
        newShoes.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (parseInt(sortType) === 1) {
        newShoes.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (gender !== "All") {
        newShoes = newShoes.filter((shoe) => shoe.gender === gender);
      }
      setShoes(newShoes);
    };
    filterMaster();
  }, [brandSelect, filterPrice, sortType, shoesDB, gender]);

  return (
    <div>
      <div className="container p-3 my-3 bg-dark border text-white  ">
        <Nav justify variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Nav.Item>

          <Nav.Item>
            <Nav.Item bsPrefix="nav-item">
              <Form>
                Max price: {value}$ <br></br>
                <RangeSlider
                  tooltip="off"
                  min={0}
                  max={1000}
                  value={value}
                  onChange={(e) => slider(e.target.value)}
                  variant="dark"
                />
              </Form>
            </Nav.Item>
          </Nav.Item>

          <Nav.Item>
            <SortsFilters
              handleBrandChange={handleBrandChange}
              handleSorting={handleSorting}
              handleGender={handleGender}
              handleClear={handleClear}
              brandSelect={brandSelect}
              sortType={sortType}
              gender={gender}
            />
          </Nav.Item>
        </Nav>
      </div>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {shoesList.map((shoe) => {
            return (
              <Product onAdd={onAdd} key={shoe.id} shoe={shoe}>
                {" "}
              </Product>
            );
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
export default Home;
