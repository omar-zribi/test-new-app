// src/components/RecipeList.js
import React, { useEffect } from "react";
import { fetchRecipes } from "../redux/actions/recipeActions";
import { useDispatch, useSelector } from "react-redux";

const RecipeList = () => {
  const { results } = useSelector((state) => state.recipes.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const changeTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return formattedDate;
  };

  return (
    <>
      {results && results ? (
        <>
          <h3 style={{ color: "green", display: "flex",width:'auto',fontSize:'75px',textAlign:'center',padding:'1% 33%',margin:'0' }}>
            Liste des Recettes
          </h3>

          {/* {results&&results.toArray(results.map((el)=>{<h5  style={{color:'green',display:'block'}}>{el.approved_at}</h5>}))} */}

          {results &&
            results.map((el) => (
              <tr key={el.id}>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 20px",
                    textAlign: "center",
                  }}
                >
                  {changeTime(el.approved_at)}
                </td>
                <td
                  style={{
                    width: "350px",
                    border: "1px solid red",
                    padding: "0 20px",
                  }}
                >
                  {el.name}
                </td>
                {/* <td
                  style={{
                    width: "350px",
                    border: "1px solid red",
                    padding: "0 20px",
                  }}
                >
                  {el.description}
                </td> */}
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  calories: {el.nutrition.calories}
                </td>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  carbohydrates: {el.nutrition.carbohydrates}
                </td>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  fat: {el.nutrition.fat}
                </td>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  fiber: {el.nutrition.fiber}
                </td>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  protein: {el.nutrition.protein}
                </td>
                <td
                  style={{
                    width: "auto",
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                >
                  sugar: {el.nutrition.sugar}
                </td>
              </tr>
            ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            color: "red",
          }}
        >
          <div
            style={{ width: "100%", textAlign: "center"}}
          >
            <h2 style={{fontSize:'150px'}}>
              no recipe name
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeList;
