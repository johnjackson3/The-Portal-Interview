function Dates(name, month, day, year, time_s, time_e){
    this.name = name;
    this.month = month;
    this.day = day;
    this.year = year;
    this.time_s = time_s;
    this.time_e = time_e;
}

var interview = new Dates("interview",02, 23, 2017, 15, 16.5);
var lunch = new Dates("lunch", 02, 25, 2017, 12, 13);
var dinner = new Dates("dinner", 02, 24, 2017, 17, 17.5);
var conference = new Dates("conference",02, 24, 2017, 11, 17.5);
var party = new Dates("party", 02, 24, 2017, 17, 20);
var visit = new Dates("visit", 02, 25, 2017, 12.5, 13.5);
var chill = new Dates("chill", 02, 22, 2017, 15, 18);
var sleep = new Dates("sleep", 02, 21, 2017, 1, 8);

var schedule = [interview, lunch, dinner, conference, party, visit, chill, sleep];

var complete = Array();
var index = 0;

for (var i=0; i < schedule.length; i++){
    for (var j=0; j < schedule.length; j++)
        {
        if (schedule[i].month === schedule[j].month && schedule[i].day === schedule[j].day && schedule[i].year === schedule[j].year && schedule[i].time_s >= schedule[j].time_s && schedule[i].name != schedule[j].name){
            if(complete.includes(schedule[i].name) == false && complete.includes(schedule[j].name) == false){
            complete[index] = schedule[i].name;
            index += 1;
            complete[index] = schedule[j].name;
            index += 1;}
        };
        };
};

console.log("hello")
console.log(complete);
console.log(schedule[1].name)
