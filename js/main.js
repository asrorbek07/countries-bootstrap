"use strict";
const regions=[
  {
    value:'africa',
    name:'Africa'
  },
  {
    value:'america',
    name:'America'
  },
  {
    value:'asia',
    name:'Asia'
  },
  {
    value:'europe',
    name:'Europe'
  },
  {
    value:'oceania',
    name:'Oceania'
  },
]

const countries= [
  {
    id:0,
    name:'Germany',
    info: [
      '81,770,900',
      'Europe',
      'Berlin'
    ],
    img:'img/flag-german.png',
    countryDetail: [
      'Deutsche', '83,240,000', 'Europe', 'Central Europe', 'Berlin', '.de', 'Euro', 'English, French, German'
    ]
  },
  {
    id:1,
    name:'United States of America',
    info: [
      '323,947,000',
      'America',
      'Washington, D.C.'
    ],
    img:'img/flag-usa.png',
    countryDetail: [
      'United States', '329,500,000', 'America','North America','Washington, D.C.','.us', 'U.S. Dollar','English, Spanish, Chinese'
    ]
  },
  {
    id:2,
    name:'Brazil',
    info: [
      '206,135,893',
      'America',
      'Brazilia'
    ],
    img:'img/flag-brazil.png',
    countryDetail: [
      'Brasileiros','212,600,000','America', 'South America', 'Brazilia','.br','R Dollar','Portuguese, German, Indigenous Languages'
    ]
  },
  {
    id:3,
    name:'Iceland',
    info: [
      '334,300',
      'Europe',
      'Reykjavík'
    ],
    img:'img/flag-iceland.png',
    countryDetail: [
      'Islandia', '334,300','Europe','Northern Europ', 'Reykjavík','.is','ISK','Icelandic, Polish, Lithuanian'
    ]
  },
  {
    id:4,
    name:'Afghanistan',
    info: [
      '27,657,145',
      'Asia',
      'Kabul'
    ],
    img:'img/flag-afganistan.png',
    countryDetail: [
      'Pashtuns', '27,657,145','Asia','South Central Asia','Kabul','.af','AFS','Dari, Pashto, Arabic'
    ]
  },
  {
    id:5,
    name:'Åland Islands',
    info: [
      '28,875',
      'Europe',
      'Mariehamn'
    ],
    img:'img/flag-aland-island.png',
    countryDetail: [
      'Landskapet Åland', '28,875','Europe','Northern Europe','Mariehamn','.ax','EURO','Swedish, Finnish, Romanian',
    ]
  },
  {
    id:6,
    name:'Albania',
    info: [
      '2,886,026',
      'Europe',
      'Tirana'
    ],
    img:'img/flag-albania.png',
    countryDetail: [
      'Albanian Republic', '2,886,026','Eorupe','Southern Europe','Tirana','.al','Albanian Lek','Albanian, Greek, Aromanian',
    ]
  },
  {
    id:7,
    name:'Algeria',
    info: [
      '40,400,000',
      'Africa',
      'Algiers'
    ],
    img:'img/flag-algenia.png',
    countryDetail: [
      'the city of Algiers', '40,400,000','Africa','',
    ]
  }
]

if(document.querySelector(".countries")){
let elCountriesSelectTemplate = document.querySelector('.countries-select-template').content;
let elSelect = document.querySelector('select');
let elCountriesList = document.querySelector(".countries__list");
let elCountriesItemTemplate = document.querySelector(".countries__item-template").content;



function createCountriesItem(item){
  let elCountriesItem = elCountriesItemTemplate.cloneNode(true);
  elCountriesItem.querySelector("a").id = item.id
   elCountriesItem.querySelector("h3").textContent = item.name;
   elCountriesItem.querySelector(".countries__img").src = item.img;
   let infoList = elCountriesItem.querySelectorAll("dd");
   for (let index = 0; index < item.info.length; index++) {
     infoList[index].textContent = item.info[index]
   }
   return elCountriesItem
 }

 function showCountriesItem(){
   let countriesItemFragment = document.createDocumentFragment();
   countries.forEach(country => {
   countriesItemFragment.appendChild(createCountriesItem(country))
   });
   elCountriesList.appendChild(countriesItemFragment)
 }

 function createOption(option){
   let elOption = elCountriesSelectTemplate.cloneNode(true);
   elOption.querySelector("option").value=option.value;
   elOption.querySelector("option").textContent=option.name;
   return elOption;
   }

 function showOption(){
   let optionFragment = document.createDocumentFragment();
   regions.forEach(country => {
   optionFragment.appendChild(createOption(country))
   });
   elSelect.appendChild(optionFragment)
 }


 showOption()
 showCountriesItem()

}
let id=0;
function changeCounrty() {
  document.querySelectorAll(".countries__link").forEach(link => {
    link.addEventListener('click', function () {
      return link.id
    })
  });
  }
  if(changeCounrty()){
    id=changeCounrty
  }
console.log(id)
let selectedCounrty = id;
console.log(selectedCounrty)

if(document.querySelector(".country")){
function showCountryDetal(){
  const elCountryDetails = document.querySelectorAll(".country__info");
  document.querySelector(".country__img").src = countries[selectedCounrty].img
  for (let index = 0; index < elCountryDetails.length; index++) {
     elCountryDetails[index].textContent = countries[selectedCounrty].countryDetail[index];
  }
}
showCountryDetal()
}
