/*When the Add Food button is clicked, the 
forms html appears with a submit button. 
The submit button goes to the read page.*/
$("#create-btn").on("click", function () {
    if(err){
        throw error;
    }
    console.log("create-form request");
});

/*When the See Food button is clicked, 
the read me page appears.*/
$("#read-btn").on("click", function () {
    if(err){
        throw error;
    }
    console.log("read-file request");
});

/*When the Update Food button is clicked, 
the forms with a drop down menu of the 
foods appear for selection and updates 
with a submit button which will bring 
user back to read me page.*/
$("#update-btn").on("click", function () {
    if(err){
        throw error;
    }
    console.log("update-file request");
});

/*When the Update Food button is clicked, 
the forms with a drop down menu of the 
foods appear for selection and deletion 
with a submit button which will alert the 
user with an "Are you Sure?" alert & bring 
user back to read me page.*/
$("#delete-btn").on("click", function () {
    if(err){
        throw error;
    }
    console.log("delet-form request");
});