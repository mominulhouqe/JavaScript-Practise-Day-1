
//Practise Funcation Get Averages --- 

function getAvg (assinment1,assinment2,assinment3){
    let TotalMarks = assinment1 + assinment2 +assinment3;
    console.log("My Total Number is Given = ",TotalMarks);
    let MarksAvg = TotalMarks / 3;
    return MarksAvg;

}
let assinment1Marks = 60;
let assinment2Marks = 59;
let assinment3Marks =50;

const myExmasMarks = getAvg(assinment1Marks,assinment2Marks,assinment3Marks);
const Results = myExmasMarks.toFixed(2);

console.log("I Have Gotten Exams Marks in All Assignment Marks Avarage = "+Results);
