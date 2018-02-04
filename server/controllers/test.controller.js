function date (req, res){
    const date = req.params.date;
    const dateFormat = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let natDate = null;
    let unixDate = null;
    if (isNaN(date)){
        natDate = new Date(date);
        natDate = natDate.toLocaleDateString('en-us', dateFormat);
        unixDate = Math.round((new Date(date)).getTime()/1000);
        if(unixDate < 0){
            unixDate = null;
        }
        if (natDate === "Invalid Date"){
            natDate = null;
        }
    }
    if(!isNaN(date)){
        unixDate = date;
        natDate = new Date(date*1000);
        natDate = natDate.toLocaleDateString('en-us', dateFormat);
        if(unixDate < 0){
            unixDate = null;
        }
    }
    return res.json({"unix": unixDate, "natural": natDate});
}

export default { date };