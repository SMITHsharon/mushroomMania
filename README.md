# mushroomMania

### Project Description 

This exercise uses Angular to load JSON data from Firebase and filter the output based on user input via a text search box or clicks on radio buttons. 

#### Mushroom Mania on Launch 
![Mushroom Mania on Launch](https://raw.githubusercontent.com/SMITHsharon/mushroomMania/shrooms/screens/Mushroom%20Mania%20on%20Launch.png)

#### Mushroom Mania on Selecting Poisonous Mushrooms
![Mushroom Mania | Poisonous Mushrooms](https://raw.githubusercontent.com/SMITHsharon/mushroomMania/shrooms/screens/Mushroom%20Mania%20on%20Click%20Poisonous.png)

#### Mushroom Mania, Filtering on Text Search
![Mushroom Mania, Filter on Text Search](https://raw.githubusercontent.com/SMITHsharon/mushroomMania/shrooms/screens/Mushroom%20Mania%20on%20Text%20Search.png)


### Project Specs
- Given: JSON data file
- Imported the JSON data into Firebase as the seed file
- Completed all the project setup: jQuery, Bootstrap, Sass, Angular, Sass
- One controller is defined for the app, `ShroomCtrol`. 
- The controller loads the JSON data from Firebase with an `XHR` call using the `$http` function that Angular provides.
- The app puts the JSON object into `$scope.mushrooms` and binds that variable to the controller.
- Uses the Angular directives: `ng-click`, `ng-repeat`, and `filter`. 


### Technologies Used
- `html`
- `css`; `SASS`
- `JavaScript`
- `ES6`
- `jQuery`
- `Bootstrap`
- `Angular`
- `Grunt`


### How To View The Screen 
```
git clone https://github.com/SMITHsharon/mushroomMania.git
cd mushroomMania
cd lib
bower install
npm install
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
