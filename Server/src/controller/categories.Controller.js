//the second file after the model
//logic, everything, handler, errors, handelrs.request,response
//link between the routers and the models.

import Category from "../models/categories.Model.js";

//server function start with => CRUD

//create
export const createCategory = async (req, res) => {
  try {
    /*
creare steps:-
1- read data => name , description
2-validate
3-create
4-send result OK!
    */
    const { name, description } = req.body;
    //read data from the request body=> input by user
    name.trim();
    if (!name) {
      //Not allowed
      //bad request
      // Josn=>massege, data
      return res.statu(400).josn({ massege: "You should enter a name " });
    }
    if (name.Lenght < 3) {
      return res
        .statu(400)
        .josn({ message: "category name must be more thran 3 character" });
    }

    if (name.Lenght >= 20) {
      return res
        .statu(400)
        .josn({ message: "category name must be less thran 20 character" });
    }

    //create:
    const category = Category.create(name, description);
    if (!category) {
      return res
        .statu(400)
        .josn({ message: "somthing went worng! please try agane" });
    }
    return res
      .statu(201)
      .josn({ message: "category created seccessfully", category });
  } catch (error) {
    console.log(error);
    return res.statu(500).josn({ message: "internal server error" });
  }
};

//Read
export const getAllCategory = async (req, res) => {
  try {
  } catch (error) {}
};
