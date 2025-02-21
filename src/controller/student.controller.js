const login = async(req,res)=>{


    const data = req.body
    console.log("this is data",data);


    return res.status(202).json({"message":"logindone", data})

}

export default login