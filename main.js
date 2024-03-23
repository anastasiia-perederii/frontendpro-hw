let yearOfBirth = prompt('Введіть свій рік народження:');
let placeOfLiving = prompt('Введіть місто, в якому ви проживаєте:');
let favouriteSport = prompt('Введіть ваш улюблений вид спорту:');

if (yearOfBirth && placeOfLiving && favouriteSport) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;

    let message = "Твій вік: " + age + "\n";

    if (placeOfLiving.toLowerCase() === "київ" || placeOfLiving.toLowerCase() === "вашингтон" || placeOfLiving.toLowerCase() === "лондон") {
        message += "Ти живеш у місті " + placeOfLiving + ", що є столицею " + getCountry(placeOfLiving) + "\n";
    } else {
        message += "Ти живеш у місті " + placeOfLiving + "\n";
    }

    let sportsChampions = {
        "футбол": "Ліонель Мессі",
        "теніс": "Рафаель Надаль",
        "баскетбол": "Леброн Джеймс"
    };

    if (favouriteSport.toLowerCase() in sportsChampions) {
        message += "Круто! Хочеш стати " + sportsChampions[favouriteSport.toLowerCase()] + "?";
    }

    alert(message);
} else {
    let missingInfo = "";

    if (!yearOfBirth) {
        missingInfo += "рік народження";
    }
    if (!placeOfLiving) {
        if (missingInfo) missingInfo += ", ";
        missingInfo += "місто";
    }
    if (!favouriteSport) {
        if (missingInfo) missingInfo += ", ";
        missingInfo += "вид спорту";
    }

    alert("Шкода, що ви не захотіли ввести свій(ю) " + missingInfo);
}

function getCountry(city) {
    switch (city.toLowerCase()) {
        case "київ":
            return "України";
        case "вашингтон":
            return "США";
        case "лондон":
            return "Великої Британії";
        default:
            return "";
    }
}


