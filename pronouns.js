substitutions = {
  "he": "she",
  "his": "her",
  "him": "her",
  "himself": "herself",
  "male": "female",
  "males": "females",
  "man": "woman",
  "men": "women",
  "guy": "girl",
  "boy": "girl",
  "boys": "girls",
  "guys": "girls",
  "dude": "chick",
  "dudes": "chicks",
  "gf": "bf",
  "girlfriend": "boyfriend",
  "husband": "wife",
  "son": "daughter",
  "sons": "daughters",
  "father": "mother",
  "mr": "ms",
  "mrs": "mr",
  "uncle": "aunt",
  "uncles": "aunts",
  "lady": "sir",
  "ladies": "gentlemen",
  "sister": "brother",
  "sisters": "brothers",
  "king": "queen",
  "kings": "queens",
  "prince": "princess",
  "princes": "princesses"
  // etc.
};

function makeSubstitutions(text_node)
{
  words = text_node.nodeValue.split(/\b/);
  for (var i = 0; i < words.length; i++)
    makeSubstitution(i, words);
  text_node.nodeValue = words.join("");
}

function capitalize(str)
{
  return str[0].toUpperCase() + str.slice(1);
}

function makeSubstitution(index, words)
{
  for (var key in substitutions)
  {
    if (substitutions.hasOwnProperty(key)) {
      word = words[index].toLowerCase();
      isCapitalized = words[index][0] < 'a'

      if (word == key) {
        words[index] = isCapitalized ? capitalize(substitutions[key]) : substitutions[key];
      } else if (word == substitutions[key]) {
        words[index] = isCapitalized ? capitalize(key) : key;
      } else {
        continue;
      }

      return;
    }
  }
}

function recurse(element)
{
  if (element.childNodes.length > 0) 
    for (var i = 0; i < element.childNodes.length; i++) 
      recurse(element.childNodes[i]);

  if (element.nodeType == Node.TEXT_NODE && element.nodeValue.match(/\S/))
    makeSubstitutions(element);
}

var html = document.getElementsByTagName('html')[0];

recurse(html);

if (Math.random() < 0.1)
  alert("Check your privilege!");

