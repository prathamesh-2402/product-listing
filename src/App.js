import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Product from "./components/Product";
import Sort from "./components/Sort";
import { data } from "./data/data";

const App = () => {
  const [details, setDetails] = React.useState(data);
  const [tempData, setTempData] = React.useState(data);
  const [search, setSearch] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [sort, setSort] = React.useState("");
  const [filters, setFilters] = React.useState({
    brand: "",
    category: "",
    price: 0,
  });
  const { brand, category, price } = filters;

  React.useEffect(() => {
    if (count === 0) {
      setSort("lh");
    }
    // console.log("hmmm-->",tempData)
  }, []);

  const searchMain = (firstVal, secondVal) => {
    if (firstVal !== "price") {
      let arr = tempData?.filter((itm) => {
        if (itm?.[firstVal]?.toLowerCase().includes(secondVal?.toLowerCase())) {
          return itm;
        }
      });
      return arr;
    } else {
      if (secondVal == 100) {
        let arr = tempData?.filter((itm) => {
          if (itm?.price < secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal == 199) {
        let arr = tempData?.filter((itm) => {
          if (itm?.price >= 100 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal == 599) {
        let arr = tempData?.filter((itm) => {
          if (itm?.price >= 200 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal == 999) {
        let arr = tempData?.filter((itm) => {
          if (itm?.price >= 600 && itm?.price <= secondVal) {
            return itm;
          }
        });
        return arr;
      }
      if (secondVal == 1000) {
        let arr = tempData?.filter((itm) => {
          if (itm?.price > secondVal) {
            return itm;
          }
        });
        return arr;
      }
    }
  };
  const sortBro = (type) => {
    if (type === "hl") {
      let arrNew = tempData;
      let arr = arrNew.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      });
      setDetails(arr);
    }
    if (type === "lh") {
      let arrNew = tempData;
      let arr = arrNew.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        } else {
          return -1;
        }
      });
      setDetails(arr);
    }
  };
  React.useEffect(() => {
    //data reset ifs
    if (search === "") {
      setDetails(tempData);
    }
    if (brand === "") {
      setDetails(tempData);
    }
    if (category === "") {
      setDetails(tempData);
    }
    if (price === 0) {
      setDetails(tempData);
    }
    //filter ifs
    if (search !== "") {
      setDetails(searchMain("name", search));
    } else if (brand !== "") {
      setDetails(searchMain("brand", brand));
    } else if (category !== "") {
      setDetails(searchMain("category", category));
    } else if (price > 0) {
      setDetails(searchMain("price", price));
    } else if (sort) {
      sortBro(sort);
    }
  }, [search, brand, category, price, sort]);

  return (
    <div className="flex flex-col items-center">
      <Header search={search} setSearch={setSearch} />
      <div className="flex gap-8 my-8">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between md:gap-[4rem] gap-2 md:items-center">
            <h1>Home/Audiophiles</h1>
            <Sort setSort={setSort} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:-gap-3 gap-2 mt-[1rem]">
            {details?.length !== 0 ? (
              details?.map((item, key) => {
                return (
                  <Product
                    key={key}
                    name={item?.name}
                    brand={item?.brand}
                    category={item?.category}
                    img={item?.img}
                    price={item?.price}
                    reviewCount={item?.reviewCount}
                    op={item?.originalPrice}
                    star={item?.stars}
                  />
                );
              })
            ) : (
              <div className="col-span-3 flex flex-col justify-center items-center">
                <img src="https://www.tharagold.in/assets/img/no-product-found.png" className="w-[12rem]"/>
                <h1>No Product Found!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
