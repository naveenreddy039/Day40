//UC1
const IS_ABSENT=0
let empCheck=Math.floor(Math.random()*10)%6;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}


//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
switch(empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;        
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage:"+empWage);

//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;        
    }

}
empHrs=getWorkingHours(empCheck);
console.log("Emp Wage:"+empWage);

//UC4
const NUM_0F_WORKING_DAYS=2;
for(let day=0;day<=NUM_0F_WORKING_DAYS;day++)
{
    empHrs+=getWorkingHours(empCheck)
}
console.log("Total Hrs:"+empHrs+"Emp Wage:"+empWage);

//UC5
const MAX_HOURS_IN_MONTH=100;
const NUMB_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUMB_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    totalEmpHrs+=getWorkingHours(empCheck)
}
console.log("UC5-Total Days:"+totalWorkingDays);