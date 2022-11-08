# starterProject

StarterProjekt für Praktikanten zum erlernen der grundlegenden Technik von Projekten des Cloud-Teams

## Getting started

Ordnerstruktur/wichtige Files:
  

    - ./backup                  sql dumps
    - ./frontend                client bzw. nginx html 
    - ./dev                     nginx (webserver) Konfiguration, SSL-Zertifikat, hosts
    - ./src                     Backend
    - ./src/main                Backend Logik, REST API und Entity-Klassen
    - ./src/resources           JPA-Konfiguration persistence.xml
    - ./src/webapp              Servlet Konfiguration web.xml
    - ./pom.xml                 Backend Libaries und Abhängikeiten für Maven
    - ./docker-compose.yml      Docker Compose File welcher die Applikationsteile definiert
    - ./init.sh                 Script zum starten der Applikation

  



1. `bash init.sh`
2. tomcat starten
3. https://local.egotec.com  -> Frontend
4. https://local.egotec.com/api/hello/world -> Beispiel REST-Ressource

## Aufgaben

Baue eine TODO-Liste Applikation

1. TodoAPI.kt File erweitern um fehlende REST Schnittstellen  (siehe TODO im genannten File)
2. Frontend für CRUD Operationen bauen mit einer Technik deiner Wahl (siehe TODO in ./frontend/index.html)

## Abgabe

Beteiligte Studenten: 4917541, 2199406, 4109154, 2690350

In der index.html waren keine TODOs vorhanden, also sind wir davon ausgegangen, dass nur die im Backend implementierten Funktionen durch das Frontend sinnvoll nutzbar sein müssen.
Die Funktion, Informationen für eine einzelne Tasks zu erhalten, ist im Backend implementiert war aber im Frontend nirgends sinnvoll unterbringbar.

Die Anwendung kann gestartet werden, indem man unter ```dev/hosts``` bei Workstation die eigene IP einträgt und dann im Terminal im Ordner `frontend/` die Anwendung mit `ng serve --host [IP-ADRESSE]` startet.
Danach kann man in den Ursprungsordner wechseln und dort `docker-compose up [-d]` ausführen.