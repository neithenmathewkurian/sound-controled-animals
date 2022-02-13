function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6Pwpk88R9/model.json")
        ;


}
function gotResults(error, results) {
    if (error) {
        console.error(error);

    }
    else {

        console.log(results);
        var sound1 = results[0].label;
        var confidence = results[0].confidence;
        document.getElementById("result_label").innerHTML = "i can hear-" + sound1;
        document.getElementById("result_confidence").innerHTML = "accuracy-" + confidence.toFixed(3) * 100 + "%";
        img1 = document.getElementById("img1");

        if (sound1 == "barking") {
            img1.src = "doggie.jpg";

        }
        else if (sound1 == "meow") {
            img1.src = "cat.jpg";

        }


    }
}
