var Aufgabe1;
(function (Aufgabe1) {
    var subjects = ["Percy", "Captain Jessie", "Mr Bean", "Der hackfleischhassende Zerhacker", "Abahatschi"];
    var predicates = ["zerhackstückelt", "popelt", "trainiert", "penetriert", "spendääät"];
    var objects = ["bis Blut kommt.", "in der Krossen Krabbe.", "das Fleisch.", "mit heruntergelassener Hose.", "vorm Penny auf der Reeperbahn."];
    //console.log(subjects, predicates, objects);
    for (var index = subjects.length; index > 0; index--) {
        var sentences = getVerse(subjects, predicates, objects);
        console.log(sentences);
    }
    function getVerse(_subjects, _predicates, _objects) {
        var verse = "";
        var outcomeSubjects = Math.floor(Math.random() * _subjects.length);
        console.log(outcomeSubjects);
        verse += _subjects.splice(outcomeSubjects, 1) + " ";
        var outcomePredicates = Math.floor(Math.random() * _predicates.length);
        console.log(outcomePredicates);
        verse += _predicates.splice(outcomePredicates, 1) + " ";
        var outcomeObjects = Math.floor(Math.random() * _objects.length);
        console.log(outcomeObjects);
        verse += _objects.splice(outcomeObjects, 1) + " ";
        return verse;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=RandomPoem.js.map