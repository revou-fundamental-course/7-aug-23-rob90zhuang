document.getElementsByClassName("LuasSegitiga").onclick = function() {BukaLuasSegitiga()};

function BukaLuasSegitiga() {
    document.getElementById("PilihLS").classList.toggle("show");
}

document.getElementsByClassName("LuasSegitiga").onclick = function() {ResetLS()};

function ResetLS() {
    document.getElementById("HLS").classList.toggle("hide");
}


document.getElementsByClassName("KelilingSegitiga").onclick = function() {BukaKelilingSegitiga()};

function BukaKelilingSegitiga() {
    document.getElementById("PilihKS").classList.toggle("show");
}

document.getElementsByClassName("KelilingSegitiga").onclick = function() {ResetKS()};

function ResetKS() {
    document.getElementById("HKS").classList.toggle("hide");
}

