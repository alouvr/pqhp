function myFunction() {
    var buttonString = document.getElementById("readMoreButton").innerHTML;
    if (buttonString == "Read More") {
        document.getElementById("aboutShort").innerHTML = "The Pittsburgh Queer History Project (PQHP)  is an oral history and media initiative, focusing on LGBTQ after-hours nightlife in Pittsburgh, PA from 1960 to 1990. Founded by Harrison Apple in 2012, the project began as an investigation of gay-owned-and-operated after-hours nightclubs where fraternal organization charters acted as semi-legal shelters for sex and social membership. These emergent communities contributed to a broader gay and lesbian political community of mutual aid, combatting police harassment and the AIDS epidemic while facing the swift economic decline of Pittsburgh. In the years following heavy outmigration from steel cities like Pittsburgh, these histories have become more difficult to document and pass on.";
        document.getElementById("readMoreButton").innerHTML = "Read Less"

    } else {
        document.getElementById("aboutShort").innerHTML = "The Pittsburgh Queer History Project (PQHP) is an oral history and media initiative, focusing on LGBTQ after-hours nightlife in Pittsburgh, PA from 1960 to 1990. Founded by Harrison Apple in 2012, the project began as an investigation of gay-owned-and-operated after-hours nightclubs where fraternal organization charters acted as semi-legal shelters for sex and social membership...";
        document.getElementById("readMoreButton").innerHTML = "Read More"
    }
}