function redirectToDietPlan() {
    var category = document.getElementById("category").value;
    var dietType = document.getElementById("dietType").value;

    if (category === "weightLoss") {
        if (dietType === "vegetarian") {
            window.location.href = "weightLossVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "weightLossNonVegetarian.html";
        }
    } 

    if (category === "weightGain") {
        if (dietType === "vegetarian") {
            window.location.href = "weightGainVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "weightGainNonVegetarian.html";
        }
    } 

    if (category === "fitness") {
        if (dietType === "vegetarian") {
            window.location.href = "fitnessVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "fitnessNonVegetarian.html";
        }
    } 

    if (category === "sugar") {
        if (dietType === "vegetarian") {
            window.location.href = "sugarVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "sugarNonVegetarian.html";
        }
    } 

    if (category === "bp") {
        if (dietType === "vegetarian") {
            window.location.href = "bpVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "bpNonVegetarian.html";
        }
    } 

    if (category === "cholesterol") {
        if (dietType === "vegetarian") {
            window.location.href = "cholesterolVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "cholesterolNonVegetarian.html";
        }
    } 
    

    if (category === "thyroid") {
        if (dietType === "vegetarian") {
            window.location.href = "thyroidVegetarian.html";
        } else if (dietType === "nonVegetarian") {
            window.location.href = "thyroidNonVegetarian.html";
        }
    } 

    
}