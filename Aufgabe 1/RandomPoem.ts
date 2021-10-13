namespace Aufgabe1 {
    let subjects: string = ["Percy", "Captain Jessie", "Mr Bean", "Der hackfleischhassende Zerhacker", "Abahatschi"];
    let predicates: string = ["zerhackstückelt", "popelt", "trainiert", "penetriert", "spendääät"];
    let objects: string = ["bis Blut kommt.", "in der Krossen Krabbe.", "das Fleisch.", "mit heruntergelassener Hose.", "vorm Penny auf der Reeperbahn."];

    //console.log(subjects, predicates, objects);

    for (let index: number = subjects.length; index > 0; index--) {
        let sentences: string = getVerse(subjects, predicates, objects);
        console.log(sentences);
    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let verse: string = "";
        let outcomeSubjects: number = Math.floor(Math.random() * _subjects.length);
        console.log(outcomeSubjects);
        verse += _subjects.splice(outcomeSubjects, 1) + " ";

        let outcomePredicates: number = Math.floor(Math.random() * _predicates.length);
        console.log(outcomePredicates);
        verse += _predicates.splice(outcomePredicates, 1) + " ";

        let outcomeObjects: number = Math.floor(Math.random() * _objects.length);
        console.log(outcomeObjects);
        verse += _objects.splice(outcomeObjects, 1) + " ";

        return verse;
    }

}