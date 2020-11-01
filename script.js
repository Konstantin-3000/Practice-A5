const var1Start = $('.js-var1');
const var2Start = $('.js-var2');
const var3Start = $('.js-var3');
const var4Start = $('.js-var4');
const var5Start = $('.js-var5');
const var6Start = $('.js-var6');
const speachStart = $('.js-speach');

const btnCreate = $('.js-create');
const btnReplace = $('.js-replace');
const textStart = $('.js-text');

const startText = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]};

btnCreate.click(function() {
  textStart.html(startText.text);
});

  btnReplace.click(function() {
  const var1 = var1Start.val();    
  const var2 = var2Start.val();
  const var3 = var3Start.val();
  const var4 = var4Start.val();
  const var5 = var5Start.val();
  const var6 = var6Start.val();
  const speach = speachStart.val();

  const newText = {
  "text" : [
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
  ]};  

textStart.html(newText.text);
  });