namespace Aufgabe1 {
    let subjects: string[] = ["Percy", "Captain Jessie", "Mr Bean", "Der hackfleischhassende Zerhacker", "Abahatschi"];
    let predicates: string[] = ["zerhackstückelt", "popelt", "trainiert", "penetriert", "spendet"];
    let objects: string[] = ["bis Blut kommt.", "in der Krossen Krabbe.", "das Fleisch.", "mit heruntergelassener Hose.", "vorm Penny auf der Reeperbahn."];

    //console.log(subjects, predicates, objects);

    //For-Schleife
    for (let index: number = subjects.length; index <= 0; index--) {
        let sentences: string = getVerse(subjects, predicates, objects);
        console.log(sentences);
    }

    //Function
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let verse: string = "";
        let outcomeSubjects: number = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(outcomeSubjects, 1) + " ";

        let outcomePredicates: number = Math.floor(Math.random() * _predicates.length);
        verse += _predicates.splice(outcomePredicates, 1) + " ";

        let outcomeObjects: number = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(outcomeObjects, 1) + " ";

        return verse;
    }
}