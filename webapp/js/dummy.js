define({
    "id": "jl2017",
    "name": "JavaLand 2017",
    "url": "http://javaland.dukecon.org/2017",
    "homeUrl": "http://www.javaland.eu",
    "metaData": {
        "locations": [{
            "id": "1",
            "order": 1,
            "names": {"de": "Silverado Theater", "en": "Silverado Theater"},
            "icon": "location_1.png",
            "capacity": 100
        }, {
            "id": "2",
            "order": 10,
            "names": {"de": "JUG-Café", "en": "JUG-Café"},
            "icon": "location_10.png",
            "capacity": 100
        }, {
            "id": "3",
            "order": 11,
            "names": {"de": "Workshop-Raum Juno", "en": "Workshop-Raum Juno"},
            "icon": "location_11.png",
            "capacity": 100
        }, {
            "id": "4",
            "order": 12,
            "names": {"de": "JavaInnovationLab", "en": "JavaInnovationLab"},
            "icon": "location_12.png",
            "capacity": 100
        }, {
            "id": "5",
            "order": 13,
            "names": {"de": "Quantum 1", "en": "Quantum 1"},
            "icon": "location_13.png",
            "capacity": 100
        }, {
            "id": "6",
            "order": 14,
            "names": {"de": "Quantum 2", "en": "Quantum 2"},
            "icon": "location_14.png",
            "capacity": 100
        }, {
            "id": "7",
            "order": 15,
            "names": {"de": "Quantum 3", "en": "Quantum 3"},
            "icon": "location_15.png",
            "capacity": 100
        }],
        "defaultIcon": "Unknown.png"
    },
    "events": [{
        "id": "529448",
        "start": "2017-03-29T13:00:00",
        "end": "2017-03-29T13:40:00",
        "title": "JavaScript im Jahr 2017",
        "abstractText": "Kaum eine Sprache hat sich in den vergangenen Jahren so stark gewandelt wie JavaScript. Während sie früher als Spielerei abgetan wurde, hat sich besonders in den letzten Sprachversionen gezeigt, dass man auch in JavaScript professionellen und hochwertigen Code schreiben kann. \n\nDieser Talk zeigt anhand konkreter Beispiele, in welchen Bereichen es deutliche Verbesserungen gegeben hat und auf welche Weise man heute die typischen JavaScript-Fallstricke vermeiden kann. Dabei stehen besonders die neusten Sprachversionen ECMAScript 2015 und 2016 im Fokus, die sich mithilfe von Transpilern auch problemlos in älteren Browsern nutzen lassen.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "1",
        "audienceId": "2",
        "typeId": "3",
        "locationId": "1",
        "speakerIds": ["368392"],
        "languageId": "1"
    }, {
        "id": "531862",
        "start": "2017-03-28T09:00:00",
        "end": "2017-03-28T17:00:00",
        "title": "Meet the JUGs",
        "abstractText": "Lerne Java User Groups bei Kaffeespezialitäten kennen\n\nIn deiner Region ist auf jeden Fall mindestens eine Java User Group (JUG) aktiv. Mach dich über die Aktivitäten der JUGs schlau und lerne deren Ansprechpartner bei ausgesuchten Kaffeespezialitäten kennen. Die beste Möglichkeit, dein Netzwerk zu erweitern.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "typeId": "2",
        "locationId": "2",
        "speakerIds": [],
        "languageId": "1"
    }, {
        "id": "529616",
        "start": "2017-03-29T11:00:00",
        "end": "2017-03-29T11:40:00",
        "title": "Resilient Software Design Patterns",
        "abstractText": "Der Trend in der Softwareentwicklung geht weg von Monolithen hin zu Anwendungen, die aus mehreren unabhängigen Einheiten bestehen. Jede dieser Einheiten ist für sich betrachtet leichter zu testen und zu deployen. Allerdings wird hierfür das notwendige Maß an Isolation, Redundanz, und loser Kopplung zunehmend wichtiger, da der Ausfall eines einzelnen Teils nicht die Stabilität des Gesamtsystems gefährden darf. \n\nDie Session zeigt gängige Pattern und etablierte Vorgehensweisen, wie man diesen neuen Herausforderungen begegnen kann.",
        "demo": false,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "2",
        "audienceId": "1",
        "typeId": "1",
        "locationId": "3",
        "speakerIds": ["364571"],
        "languageId": "1"
    }, {
        "id": "529290",
        "start": "2017-03-29T10:00:00",
        "end": "2017-03-29T10:40:00",
        "title": "Asynchrone Anwendungen mit CompletableFuture",
        "abstractText": "Für lange Zeit wurden die meisten Java-Anwendungen überwiegend oder vollständig blockierend/synchron implementiert. In den letzten Jahren zeichnet sich jedoch ein Trend zu vermehrtem Einsatz asynchroner Abläufe ab. Während die Entwicklung insbesondere mehrerer abhängiger asynchroner Aktionen jedoch früher kompliziert und tipp-intensiv war, vereinfacht CompletableFuture diese Aufgabe deutlich. \n\nIn diesem Vortrag werden eingangs Gründe für den Einsatz von Asynchronität diskutiert und anschließend der Einsatz von CompletableFuture ausführlich erläutert.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "3",
        "audienceId": "2",
        "typeId": "1",
        "locationId": "4",
        "speakerIds": ["366601"],
        "languageId": "1"
    }, {
        "id": "529370",
        "start": "2017-03-29T11:00:00",
        "end": "2017-03-29T11:40:00",
        "title": "The Pragmatic Developer's Guide to Java 9",
        "abstractText": "The upcoming Java 9 release brings with it modularity, a new REPL, a new default garbage collector, HTTP 2 client, and much more. However it importantly misses out on such features as Value Types, JSON API and others. \n\nThis session looks at what is in and what is out of the Java 9 release and whether the features *really* benefit a developer. Well discuss questions like whether Java 9 will be as useful to a developer as Java 8 was? How will libraries and frameworks make use of the modularity framework? How will applications benefit, or not, from the new default garbage collector? \n\nThis session cuts through the hype to outline how Java 9 will realistically affect the everyday pragmatic developer.",
        "demo": false,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "3",
        "audienceId": "1",
        "typeId": "7",
        "locationId": "5",
        "speakerIds": ["371809", "364713"],
        "languageId": "2"
    }, {
        "id": "531886",
        "start": "2017-03-29T12:45:00",
        "end": "2017-03-29T14:45:00",
        "title": "JavaFX User Experience and Performance Pitfalls",
        "abstractText": "Diskutiere mit Experten über JavaFX\n\nWie sich eine Software dem Anwender präsentiert, die sogenannte \"User Experience\", entscheidet letztlich darüber ob eine Software erfolgreich ist oder nicht. Dabei ist insbesondere eine flüssige Interaktion mit der Oberfläche von entscheidender Bedeutung. Diese wird nicht zuletzt maßgeblich von der Leistungsfähigkeit der GUI-Software beeinflusst.\n\nIn diesem Workshop sollen daher die Konzepte von JavaFX in diesem Sinne untersucht werden, und es sollen mögliche Performance-Probleme aufgezeigt und Lösungsansätze erarbeitet werden.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "typeId": "2",
        "locationId": "6",
        "speakerIds": ["332724"],
        "languageId": "1"
    }, {
        "id": "529579",
        "start": "2017-03-29T10:00:00",
        "end": "2017-03-29T10:40:00",
        "title": "Field Notes of a Command Line Ninja",
        "abstractText": "Ever wished you had superpowers? Ninja superpowers! So you can move swiftly across the keyboard, enjoy an arsenal of effective tools, and make tedious and mundane tasks fun? \n\nHave you ever witnessed someone write fancy commands and perform magic from the console. Have you ever wished you could learn, or brush up on, those skills too? Maybe you want to be more effective at your everyday tasks, or need a new topic for the next family dinner? \n\nJoin us and learn some awesome command line ninja skills. You will be able to find something new no matter your level of experience. The audience will get a chance to show off their skills as well!\n\nYou can bring your PC/Mac with you and hack-along! Linux, Mac or Windows (with Cygwin, or Windows Subsystem for Linux).",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "4",
        "audienceId": "1",
        "typeId": "7",
        "locationId": "7",
        "speakerIds": ["371752"],
        "languageId": "1"
    }, {
        "id": "529628",
        "start": "2017-03-29T14:00:00",
        "end": "2017-03-29T14:40:00",
        "title": "Getyptes JavaScript mit TypeScript und Flow",
        "abstractText": "JavaScript ist die natürliche Wahl für die Entwicklung im Browser. Für größere Projekte ist JavaScript im Vergleich zu Java jedoch im Nachteil. TypeScript und Flow sind zwei unterschiedliche Ansätze zum Ausgleich der Nachteile.\n\nFlow ist ein statischer Typen-Checker. Er wurde von Facebook entwickelt, um in deren JavaScript- und insbesondere React-Code Fehler zu finden. Dazu können zusätzliche Typeninformationen hinzugezogen werden.\n\nTypeScript ist eine Spracherweiterung von JavaScript, die durch den TypeScript-Compiler in unterschiedliche JavaScript-Versionen zurückübersetzt werden kann. Hier steht eher die Werkzeug-Unterstützung im Vordergrund. TypeScript wird aktiv von Microsoft entwickelt und ist die primäre Sprache für Googles Angular 2 Framework.\n\nIn diesem Talk werde ich in beide Ansätze einführen und die wesentlichen Gemeinsamkeiten und Unterschiede erläutern. Dazu besprechen wir, welcher Ansatz wann sinnvoll ist.",
        "demo": false,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "1",
        "audienceId": "1",
        "typeId": "1",
        "locationId": "1",
        "speakerIds": ["363875"],
        "languageId": "1"
    }, {
        "id": "529325",
        "start": "2017-03-28T13:00:00",
        "end": "2017-03-28T13:40:00",
        "title": "Serverlose Web-Architekturen mit der AWS-Cloud-Infrastruktur",
        "abstractText": "Serverlose Cloud-Architekturen ermöglichen es, Anwendungen und (Micro-)Services zu bauen und zu betreiben, ohne eine dedizierte Infrastruktur verwalten zu müssen. Der Code wird natürlich noch auf Servern ausgeführt, aber das gesamte Server-Management wird vom Cloud-Anbieter übernommen. Dieser kümmert sich um Verfügbarkeit, Skalierung, Ressourcen-Management und die entsprechende Mutli-Tenancy-Fähigkeit der Systeme und Infrastruktur. Der Cloud-Benutzer kann sich nur voll und ganz auf die Ausführung und das Monitoring seiner Funktionen und Services konzentrieren.\n\nIn meinem Vortrag zeige ich Beispiele, wie zeitgemäße, aber serverlose Microsservice-Cloud-Architekturen am Beispiel von Amazon Web Services schnell und agil aufgebaut und betrieben werden können. Hierbei beleuchte ich u.a. die Konzepte von AWS Lambda, Amazon API-Gateway und DynamoDB und zeige eine funktionsfähige Anwendung, die auf diesen Konzepten basiert, ohne mich mit dem Server-Management beschäftigen zu müssen.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "5",
        "audienceId": "1",
        "typeId": "3",
        "locationId": "3",
        "speakerIds": ["359390"],
        "languageId": "1"
    }, {
        "id": "529430",
        "start": "2017-03-29T09:00:00",
        "end": "2017-03-29T09:40:00",
        "title": "Migrating to Java 9 Modules",
        "abstractText": "With Java 9 modules coming to us soon, you want your existing code to be fully ready for the module system. Making code modular can be a daunting task, but Java 9 comes with a number features to ease migration. This includes automatic modules, the unnamed module and a number of command line arguments.\n\nIn this talk we will look at examples of migrating real code. It discusses common problems youll run into during migration, leading to practical tips and the ability to set realistic goals. Its also a good way to understand the module system itself and the various migration paths it supports. This talk is an excellent preparation to start migrating your own code.\n\n* Understanding modules and the module path\n* Automatic modules\n* Mixing classpath and modulepath\n* Dealing with reflection\n* Escape switches\n* Jdeps\n\nAll topics will be based on examples of often used libraries and frameworks.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "3",
        "audienceId": "2",
        "typeId": "7",
        "locationId": "4",
        "speakerIds": ["364697"],
        "languageId": "2"
    }, {
        "id": "537051",
        "start": "2017-03-29T10:00:00",
        "end": "2017-03-29T10:40:00",
        "title": "Sponsored Session: Client-Architekturen in Angular",
        "abstractText": "Bei sogenannten Single-Page-Anwendungen, wird oft viel Funktionalität in den Client verlagert. Die letzten Jahre haben hier leider gezeigt, dass uns Frameworks wie Angular viele Freiheiten bei der Strukturierung und der Architektur lassen und sich viele Entwickler zu wenig Gedanken über über eben diese Punkte gemacht haben.\nHier setzt zum Glück ein Umdenken ein. Es wir vermehrt über Pattern wie Flux und Redux oder SAM gesprochen und sich mehr an Best Practises orientiert. Außerdem spielen Themen wie Modularisierung und Komposition von unabhängig entwickelten Teil-Anwendungen im Zuge von Micro-Services eine Rolle. Doch was steckt hinter all dem?\nDieser Talk gibt einen Überblick über aktuelle Themen und Entwicklungen und zeigt am Beispiel von Angular 2 bzw. 3 wie diese eingesetzt werden können.",
        "demo": true,
        "simultan": false,
        "fullyBooked": false,
        "numberOfFavorites": 25,
        "trackId": "2",
        "audienceId": "1",
        "typeId": "1",
        "locationId": "3",
        "speakerIds": ["371767"],
        "languageId": "1"
    }
    ]
});