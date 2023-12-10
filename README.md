# angular_todolist

demo included 'todolist demo.mp4'

Opbouw applicatie:

Er is een dummy http service gecreeerd die middels the rxjs een observable teruggeeft.
De itemService is verantwoordelijk voor de actuele itemlist. 
Deze lijst wordt geupdate tijdens het aanmaken van nieuwe items en voor het initieel ophalen vanuit de http service.
Componenten die geintereseerd zijn in de lijst (TodoListComponent) kunnen zich abboneren op de isInitialized.
Indien geinitialiseerd, staan de items klaar om weergegeven te worden.

De shared module (voor hergebruik) bevat de login logica
Routes naar de applicatie zijn geblokkeerd zolang er niet is ingelogd.
Er is een pagina en een authorization service. De laatste is verantwoordelijk voor of ietmand toegang heeft of niet.
